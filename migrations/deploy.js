const { ethers } = require('hardhat');

async function main() {
  // Get the contract to deploy
  const swapAggregatorFactory = await ethers.getContractFactory('SwapAggregator');
  const swapAggregator = await swapAggregatorFactory.deploy();

  await swapAggregator.deployed();

  console.log('SwappingAggregator deployed to:', swapAggregator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
