import { Match } from "../config/interfaces/match";

const { Web3 } = require('web3');

var web3 = new Web3("https://sepolia.optimism.io");

// TODO: change this with user's address when connecting to Metamask
const defaultAccount = '0xc3798d303a3d0Cbff6f78015c20cf06221c6FF36';

// Create a new contract object using the ABI and address
const deployedAddress = '0x0c0551e5a1805d93361587cd8C44fAF67E2aD7C3';
const abi = require("../../BetsAbi.json");
const BetsContract = new web3.eth.Contract(abi, deployedAddress);
BetsContract.handleRevert = true;

async function getAllEvents() {
    try {
        const matches = await BetsContract.methods.getAllEvents().call();
        const jsonEvents : Match = {
          matches
        }
        return jsonEvents;
      } catch (error) {
        console.error(error);
      }
}

export default getAllEvents;