"use client";
import { useState } from "react";

export default function ConnectWalletButton() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected request:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      {account ? (
        <p>{account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button 
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}