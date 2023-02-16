import React, { useState } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import Head from 'next/head';

const SimpleDapp = () => {
  const [number, setNumber] = useState(0);

  // Button to Increment the Number
  const increment = async () => {
    setNumber(number + 1);
  };

  // Button to Reset the Number
  const reset = async () => {
    setNumber(0);
  };

  return (
    <Container>
      <Head>
        <title>Simple Dapp</title>
        <link rel='icon' type='image/png' sizes='32x32' href='https://cdn-icons-png.flaticon.com/512/919/919851.png' />
      </Head>
      <div>
        <Form>
          <p>{number}</p>
          <Button onClick={increment}>Increase</Button>
          <Button onClick={reset}>Reset</Button>
        </Form>
      </div>
    </Container>
  );
};

export default SimpleDapp;
