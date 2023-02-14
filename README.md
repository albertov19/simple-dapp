# Simple Dapp

This is a very simple dApp for Workshop purpses. Built using React, Next.js for server side rendering and Semantic UI (React).

## Getting Started

Clone the repo and install dependencies:

```
git clone https://github.com/albertov19/simple-dapp.git && cd simple-dapp\
yarn
```

## Build Different Examples

Rename the different examples in the `./pages` folder to `index.js` and build the local site with:

```
yarn dev
```

The examples are as follows:

 - **Example 1** - Basic React app with a couple of buttons to increment a variable's value and another to reset it to zero. Helpful to understand the basics of a web application. Uses Semantic UI React for buttons and other components
 - **Example 2** - Application that extends _Example 1_, it adds the posibility to read on-chain data via an Ethers provider
 - **Example 3** - This version is to showcase a basic application that connects to Metamask
 - **Example 4** - Application that combines everything from above. Moreover, the increment and reset button now create on-chain transactions for each of these actions
