'use client';
import React from 'react'

const TopBar = () => {

  async function connectWallet() {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  }; 

  return (
    <div
      className='z-10 fixed pl-[26rem] w-[100%] h-[12.5rem] bg-menuContent text-white flex justify-between items-center p-10 '
    >
      <h3 className={'text-4xl'}>
        CryptoBet
      </h3>
      <button onClick={connectWallet} className='bg-buttonOrange text-white text-2xl p-5 rounded-xl'>
        Connect Wallet
      </button>
    </div>
  )
}

export default TopBar