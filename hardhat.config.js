require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  networks: {
    hardhat: {
      seeds: [process.env.MNEMONIC],
      gas: 2100000,
      forking: {
        url: process.env.MAINNET_RPC_URL,
      },
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      chainId: 5,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      gas: 2100000,
      networkTimeOut: 100000000000,
    },
  },
  solidity: {
    version: '0.8.20',
    settings: {
      metadata: {
        useLiteralContent: true,
      },
      optimizer: {
        enabled: true,
        runs: 200,
      },
      // viaIR: true,
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode', 'evm.deployedBytecode', 'evm.methodIdentifiers', 'metadata'],
          '': ['id', 'ast'],
        },
      },
    },
  },
  mocha: {
    timeout: 20000,
  },
};
