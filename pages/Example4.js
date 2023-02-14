import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import { ethers } from 'ethers';
import Head from 'next/head';
import detectEthereumProvider from '@metamask/detect-provider';

// Contract Stuff
const contractAddress = '0x356bbbA2821F97E81B0eE759a727EFe9b1fAfbAC';
const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'Increment',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'Reset',
    type: 'event',
  },
  {
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'number',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reset',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// Provider
const endpoint = 'https://rpc.api.moonbase.moonbeam.network/';
const provider = new ethers.providers.StaticJsonRpcProvider(endpoint);
const incrementerREAD = new ethers.Contract(contractAddress, contractABI, provider);

const SimpleDapp = () => {
  const [network, setNetwork] = useState('');
  const [account, setAccount] = useState('');
  const [number, setNumber] = useState('');

  // Renders first
  useEffect(() => {
    checkMetamask();

    getValue();
  }, []);

  const checkMetamask = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });

    if (provider) {
      const chainId = await provider.request({
        method: 'eth_chainId',
      });

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

  const getValue = async () => {
    const value = await incrementerREAD.number();
    setNumber(value.toString());
  };

  const increment = async () => {
    setNumber('Incrementing ...');

    // Create Write-Version Contract interface
    let wallet;
    let incrementerWRITE;
    if (typeof ethereum !== 'undefined' && ethereum.chainId === '0x507') {
      wallet = new ethers.providers.Web3Provider(ethereum).getSigner();
      incrementerWRITE = new ethers.Contract(contractAddress, contractABI, wallet);
    } else {
      console.error('NO METAMASK DETECTED!');
    }

    // Send Increment Tx
    const tx = await incrementerWRITE.increment();
    await tx.wait();

    await getValue();
  };

  const reset = async () => {
    setNumber('Resetting ...');
    // Create Write-Version Contract interface
    let wallet;
    let incrementerWRITE;
    if (typeof ethereum !== 'undefined' && ethereum.chainId === '0x507') {
      wallet = new ethers.providers.Web3Provider(ethereum).getSigner();
      incrementerWRITE = new ethers.Contract(contractAddress, contractABI, wallet);
    } else {
      console.error('NO METAMASK DETECTED!');
    }

    // Send Reset Tx
    const tx = await incrementerWRITE.reset();
    await tx.wait();

    await getValue();
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
        <p>{number}</p>
        <Form>
          <Button onClick={increment}>Increase</Button>
          <Button onClick={reset}>Reset</Button>
        </Form>
      </div>
    </Container>
  );
};

export default SimpleDapp;
