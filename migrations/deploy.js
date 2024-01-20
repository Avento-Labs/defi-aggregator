const { ethers } = require('hardhat');

async function main() {
  const localRpcUrl = 'http://localhost:8545'; // Change this to your local Hardhat RPC URL
  const provider = new ethers.providers.JsonRpcProvider(localRpcUrl);

  // Get the first signer using the custom provider
  const [deployer] = await provider.listAccounts();
  const signer = provider.getSigner(deployer);

  // Log the current block number to confirm connection
  console.log(await provider.getBlockNumber());

  // Deploy the contract using the signer connected to the local RPC
  const SwapAggregatorFactory = await ethers.getContractFactory('SwapAggregator', signer);
  const swapAggregator = await SwapAggregatorFactory.deploy();

  await swapAggregator.deployed();

  console.log('SwapAggregator deployed to:', swapAggregator.address);

  // Impersonate the USDT holder
  // const usdtHolderAddress = '0xee5B5B923fFcE93A870B3104b7CA09c3db80047A'; // Address of the USDT holder
  // const myAddress = signer._address; // Your address
  // console.log(myAddress);

  // await network.provider.request({
  //   method: 'hardhat_impersonateAccount',
  //   params: [usdtHolderAddress],
  // });

  // const usdtHolder = await ethers.getSigner(usdtHolderAddress);

  // // USDT Token Contract
  // const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // Mainnet USDT address
  // const USDT = new ethers.Contract(
  //   usdtAddress,
  //   ['function transfer(address, uint256)', 'function balanceOf(address) view returns (uint256)'],
  //   usdtHolder
  // );

  // // Transfer USDT
  // const amount = ethers.utils.parseUnits('1', 6); // For example, 100 USDT
  // await USDT.transfer(signer._address, amount);

  // console.log('USDT Balance:', (await USDT.balanceOf(myAddress)).toString());

  // console.log(`Transferred ${amount.toString()} USDT to ${myAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
