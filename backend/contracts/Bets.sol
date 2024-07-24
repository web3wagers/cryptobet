// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Bets {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

}