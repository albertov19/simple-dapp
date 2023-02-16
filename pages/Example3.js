import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { ethers } from 'ethers';
import Head from 'next/head';
import detectEthereumProvider from '@metamask/detect-provider';

const SimpleDapp = () => {
  const [network, setNetwork] = useState('');
  const [account, setAccount] = useState('');

  // Renders first
  useEffect(() => {
    checkMetamask();
  }, []);

  // Function to initializa Metamask
  const checkMetamask = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });

    if (provider) {
      // Get Chain ID of the Connected Network
      const chainId = await provider.request({
        method: 'eth_chainId',
      });

      // Check if Chain ID is Supported
      let networkName;
      switch (chainId) {
        case '0x507':
          networkName = 'Moonbase Alpha';
          break;
        default:
          networkName = '';
          setAccount('Only Moonbase Alpha Supported');
          break;
      }

      // Get Accounts
      if (networkName !== '') {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        // Update State
        if (accounts) {
          setAccount(ethers.utils.getAddress(accounts[0]));
          setNetwork(networkName);
        }
      }
    } else {
      // MetaMask not detected
      setAccount('MetaMask not Detected');
    }
  };

  return (
    <Container>
      <Head>
        <title>Simple Dapp</title>
        <link rel='icon' type='image/png' sizes='32x32' href='https://cdn-icons-png.flaticon.com/512/919/919851.png' />
      </Head>
      <div>
        <p>{account}</p>
        <p>{network}</p>
      </div>
    </Container>
  );
};

export default SimpleDapp;
