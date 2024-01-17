# Swap Aggregator Contracts

This repository contains the smart contracts for the Swap Aggregator, a blockchain solution for aggregating token swaps across multiple Automated Market Makers (AMMs) on Ethereum.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Avento-Labs/swap-aggregator-contracts
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create .env File**
   Create an .env file in the root directory of the project and add the following environment variables:

   ```bash
   MNEMONIC='YOUR MNEMNONIC'
   GOERLI_RPC_URL='YOUR ALCHEMY OR INFURA GOERLI RPC URL'
   MAINNET_RPC_URL='YOUR ALCHEMY OR INFURA MAINNET RPC URL'
   ```

4. **Compile Contracts**

   ```bash
    npm run compile
   ```

5. **Run Forked Mainnet**

   ```bash
    npm run start-node
   ```

   > Note: This step is important for running the API server and tests locally.

6. **Deploy Contracts**

   ```bash
    npm run deploy
   ```

7. **Run Tests**

   ```bash
    npm run test
   ```
