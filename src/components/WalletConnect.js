import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import xeniumAbi from '../xeniumAbi';



const xeniumAddress = '0xbdCF581FF70AAE104D41C6B2AbCb3F29E0bCFB89';

// Inside WalletConnect component
const WalletConnect = ({ setProvider, setSigner, setWalletConnected, setWalletAddress, walletAddress }) => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const newProvider = new ethers.providers.Web3Provider(window.ethereum);
          const newSigner = newProvider.getSigner();
          const newWalletAddress = await newSigner.getAddress();
          
          setProvider(newProvider);
          setSigner(newSigner);
          setWalletConnected(true);
          setWalletAddress(newWalletAddress);
          
          console.log('Wallet connected:', newWalletAddress);
        } catch (error) {
          console.error('Error connecting wallet:', error);
        }
      } else {
        alert('MetaMask is not installed. Please install it to use this app.');
      }
    };
  
    return (
      <button onClick={connectWallet}>
        {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : 'Connect Wallet'}
      </button>
    );
  };
  
  export default WalletConnect;
  