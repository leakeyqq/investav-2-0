"use client";
import { useState, useEffect } from 'react';
import { Client, AccountId, PrivateKey, TransferTransaction, Hbar } from "@hashgraph/sdk";
import Web3 from 'web3';

// Replace these at the top of your file with ACTUAL working testnet credentials:
const operatorAccountId = "0.0.5796870";  // Working testnet account
const operatorPrivateKey = "3030020100300706052b8104000a04220420cf721145c0a2ff6db47defbb668c192294f929fb5a63eb32bac8905f4afae7ee"; // Matching private key
const fundAccountId = "0.0.3803992";     // Test recipient account


export default function InvestDialog({ fundId, open, onClose }) {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        });
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask or a Web3 wallet!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });
      setAccount(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error("User rejected request:", error);
    }
  };

  const handleDeposit = async () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
  
    setIsLoading(true);
  
    try {
      // 1. Initialize client with operator credentials
      const client = Client.forTestnet().setOperator(
        AccountId.fromString(operatorAccountId), // Your operator account ID
        PrivateKey.fromString(operatorPrivateKey) // Your operator private key
      );
  
      // 2. Simple transfer (1 USDC = 100,000 tinybars)
      const transferTx = await new TransferTransaction()
        .addHbarTransfer(operatorAccountId, Hbar.fromTinybars(-amount * 100000)) // Deduct from your account
        .addHbarTransfer(fundAccountId, Hbar.fromTinybars(amount * 100000))  // Add to fund
        .execute(client);
  
      const receipt = await transferTx.getReceipt(client);
      alert(`Success! Transaction ID: ${receipt.transactionId}`);
      onClose();
    } catch (error) {
      alert(`Failed: ${error.message.split("Error:")[1] || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Invest in Fund #{fundId}</h2>
        
        <div className="mb-4">
          <label className="block mb-2">Amount (USDC)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
          />
        </div>

        {!isConnected ? (
          <button
            onClick={connectWallet}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={handleDeposit}
            disabled={isLoading}
            className={`w-full py-2 rounded ${isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white`}
          >
            {isLoading ? 'Processing...' : 'Deposit USDC'}
          </button>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}