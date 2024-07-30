// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Bets {
    // lets use eventType as the following:
    // 1: soccer
    // 2: basketball
    // 3: football
    // we will be betting only these sports for the moment
    struct Event {
        uint id;
        uint eventType;
        string name;
        string team1name;
        string team2name;
        string team1imgurl;
        string team2imgurl;
        string time;
        uint8 result; // 0: Not set, 1: Team1 wins, 2: Team2 wins, 3: Draw
        bool isActive;
    }

    struct Bet {
        uint eventId;
        address payable better;
        uint8 predictedResult; // 1: Team1 wins, 2: Team2 wins, 3: Draw
        uint amount;
        bool paid;
    }

    address private owner;
    uint private nextEventId;
    mapping(uint => Event) public events;
    mapping(uint => Bet[]) public eventBets;

    event BetPlaced(uint indexed eventId, address indexed better, uint amount, uint8 predictedResult);
    event BetPaid(uint indexed eventId, address indexed better, uint amount);

    constructor() {
        owner = msg.sender;
        nextEventId = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    function createEvent(uint eventType, string memory name, string memory team1name, 
                         string memory team2name, string memory team1imgurl, string memory team2imgurl, 
                         string memory time) public onlyOwner {
        // method for event creation
        // params: name: name of the event, team1: team1 name, team2: team2 name
        // returns: none
        events[nextEventId] = Event(nextEventId, eventType, name, team1name, team2name, team1imgurl, team2imgurl, time, 0, true);
        nextEventId++;
    }

    function placeBet(uint eventId, uint8 predictedResult) public payable {
        // method for user to bet
        // params: eventId: id of the event where the bet is placed, predictedResult: value between 1 and 3 
        // returns: none
        require(events[eventId].isActive, "Event is not active");
        require(msg.value > 0, "Bet amount must be greater than zero");
        require(predictedResult >= 1 && predictedResult <= 3, "Invalid predicted result");

        eventBets[eventId].push(Bet(eventId, payable(msg.sender), predictedResult, msg.value, false));

        emit BetPlaced(eventId, msg.sender, msg.value, predictedResult);
    }

    function setEventResult(uint eventId, uint8 result) public onlyOwner {
        // method for admin to set event result (1, 2, 3)
        // params: eventId: id of the event where the bet is placed, result: value between 1 and 3 
        // returns: none
        require(events[eventId].isActive, "Event is not active");
        require(result >= 1 && result <= 3, "Invalid result");

        events[eventId].result = result;
        events[eventId].isActive = false;
    }

    function payBets(uint eventId) public onlyOwner {
        // method for admin to pay the bet winners
        // params: eventId: id of the event where the bet is placed
        // returns: none
        require(!events[eventId].isActive, "Event is still active");
        require(events[eventId].result != 0, "Event result is not set");

        uint totalPool = 0;
        uint winnerPool = 0;

        for (uint i = 0; i < eventBets[eventId].length; i++) {
            Bet storage bet = eventBets[eventId][i];
            totalPool += bet.amount;
            if (bet.predictedResult == events[eventId].result) {
                winnerPool += bet.amount;
            }
        }

        for (uint i = 0; i < eventBets[eventId].length; i++) {
            Bet storage bet = eventBets[eventId][i];
            if (bet.predictedResult == events[eventId].result && !bet.paid) {
                uint payout = (bet.amount * totalPool) / winnerPool;
                
                // payable(bet.better).transfer(payout);
                (bool sent, ) = bet.better.call{value: payout}("");
                require(sent, "Failed to send Ether");

                bet.paid = true;
                emit BetPaid(eventId, bet.better, payout);
            }
        }
    }

    function getAllEvents() public view returns (Event[] memory) {
        Event[] memory allEvents = new Event[](nextEventId);
        for (uint i = 0; i < nextEventId; i++) {
            allEvents[i] = events[i];
        }
        return allEvents;
    }
}