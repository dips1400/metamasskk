import React, { useState } from 'react';
import Web3 from 'web3';

const Metamask = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the provider from MetaMask
        const provider = new Web3(window.ethereum);
        setWeb3(provider);

        // Get the current account
        const accounts = await provider.eth.getAccounts();
        setAccount(accounts[0]);

        console.log('Connected to MetaMask:', account);

        //Get the network ID
        const networkId = await provider.eth.net.getId();
        console.log('Network ID:', networkId);

        //Get the user's account balance
        const balance = await provider.eth.getBalance(accounts[0]);
        console.log('Balance:', provider.utils.fromWei(balance, 'ether'), 'ETH');
        
      } else {
        console.error('MetaMask is not installed');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div>
      <button 
      style={{ backgroundColor:"#277541",color:"#FFFFFF",
      border:"none", padding:"0.8rem",
      borderRadius:"0.4rem", cursor:"pointer",
      }}
      onClick={connectWallet}>Connect Wallet</button>
      {account && <p>Connected Account: {account}</p>}
    </div>
  );
}

export default Metamask;
