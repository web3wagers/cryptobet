/* eslint-disable import/no-anonymous-default-export */
import { Match } from "../config/interfaces/match";

const { Web3 } = require('web3');

var web3 = new Web3("https://sepolia.optimism.io");

// TODO: change this with user's address when connecting to Metamask
const defaultAccount = '0xc3798d303a3d0Cbff6f78015c20cf06221c6FF36';

// TODO: add this as an env var
const deployedAddress = '0x30462256952Edd0d9cAb0C1FeFF27Cb99bab86eC';
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

async function getEventById(_id:number) {
  try {
    const match = await BetsContract.methods.getEventById(_id).call();
    return match;
    return match;
  } catch (error) {
    console.error(error);
  }
}

export default {getAllEvents, getEventById};