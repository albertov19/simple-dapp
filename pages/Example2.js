import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { ethers } from 'ethers';
import Head from 'next/head';

// Contract Stuff
const contractAddress = '0x356bbbA2821F97E81B0eE759a727EFe9b1fAfbAC';
const contractABI = [
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
];

// Provider
const endpoint = 'https://rpc.api.moonbase.moonbeam.network/';
const provider = new ethers.providers.StaticJsonRpcProvider(endpoint);
const incrementerREAD = new ethers.Contract(contractAddress, contractABI, provider);

const SimpleDapp = () => {
  const [number, setNumber] = useState('');

  // Renders first
  useEffect(() => {
    getValue();
  }, []);

  // Get Variable from Contract
  const getValue = async () => {
    const value = await incrementerREAD.number();
    setNumber(value.toString());
  };

  return (
    <Container>
      <Head>
        <title>Simple Dapp</title>
        <link rel='icon' type='image/png' sizes='32x32' href='https://cdn-icons-png.flaticon.com/512/919/919851.png' />
      </Head>
      <div>
        <p>{number}</p>
      </div>
    </Container>
  );
};

export default SimpleDapp;
