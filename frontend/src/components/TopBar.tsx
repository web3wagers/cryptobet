"use client";
import React, { useState } from "react";
import UserController from "@/src/controllers/UserController";

const TopBar = () => {
  const [accountAddress, setAccountAddress] = useState<any>();
  const [walletConnected, setWalletConnected] = useState<any>(false);
  
  function shortenString(input: string) {
    // Asegurarse de que la longitud de la cadena es suficiente
    if (input.length <= 6) {
      return input; // No hay suficiente longitud para recortar
    }

    // Obtener los primeros 4 caracteres
    const firstPart = input.substring(0, 7);
    // Obtener los últimos 2 caracteres
    const lastPart = input.substring(input.length - 6);

    // Unir las partes con "..."
    return `${firstPart}...${lastPart}`;
  }
  function logOut() {
    setAccountAddress("");
    setWalletConnected(false);
  }

  async function connectWallet() {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        var formatAddress = shortenString(accounts[0]);
        UserController.setUserAddress(accounts[0]);
        setAccountAddress(formatAddress);
        console.log(UserController.getUserAddress());
        setWalletConnected(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  }

  return (
    <div className="z-10 fixed pl-[26rem] w-[100%] h-[12.5rem] bg-menuContent text-white flex justify-between items-center p-10 ">
      <h1 className={"text-5xl"}>CryptoBet</h1>

      <div className="inline-flex">
        {walletConnected && (
          <h2 className={"text-4xl rounded-xl bg-background p-2"}>
          {accountAddress}
        </h2> 
        )}

        {walletConnected && (
          <button
            onClick={logOut}
            className="bg-buttonOrange text-white text-2xl p-5 rounded-xl ml-9"
          >
            Diconnect
          </button>
        )}
        {!walletConnected && (
          <button
            onClick={connectWallet}
            className="bg-buttonOrange text-white text-2xl p-5 rounded-xl"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
