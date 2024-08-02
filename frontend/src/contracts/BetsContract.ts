/* eslint-disable import/no-anonymous-default-export */
const { Web3 } = require('web3');

var web3 = new Web3("https://sepolia.optimism.io");

// TODO: add this as an env var
const deployedAddress = '0x359Cf6c8d26bD1cFB647aB567e821339FD16a712';
const abi = require("../../BetsAbi.json");
const BetsContract = new web3.eth.Contract(abi, deployedAddress);
BetsContract.handleRevert = true;

async function requestAccount() {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  } catch (error) {
    console.error('User denied account access', error);
    throw new Error('User denied account access');
  }
}

async function getAllEvents() {
  try {
    const matches = await BetsContract.methods.getActiveEvents().call();
    const jsonEvents = {
      matches
    }
    return jsonEvents;
  } catch (error) {
    return error;
  }
}

async function getEventById(_id: number) {
  try {
    const match = await BetsContract.methods.getEventById(_id).call();
    return match;
  } catch (error) {
    return error;
  }
}

async function sendBet(_eventId: number, _winner: number, _eth: number) {
  const account = await requestAccount();
  const ethInWei = Number(_eth * 1e18).toString(16)
  const gasPrice = await web3.eth.getGasPrice();

  const tx = [{
    from: account,
    to: deployedAddress,
    gas: Number('2000000').toString(16),
    gasPrice: Number(gasPrice).toString(16),
    value: ethInWei,
    data: BetsContract.methods.placeBet(_eventId, _winner).encodeABI()
  }];
  
  let result = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: tx
  })
  .catch((error: any) => {
    console.log(error);
  })
  console.log(result);
  return result;
}

export default { getAllEvents, getEventById, sendBet };