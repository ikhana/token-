require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('hardhat-contract-sizer');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled:true,
      runs: 200,
    },
  },
  networks: {
    bsctestnet: {
      url:  "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
    
      accounts:
        process.env.PRIVATE_KEY.toString() !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    bsc: {
      url:  "https://bsc-dataseed1.binance.org/",
      chainId: 56,
    
      accounts:
        process.env.PRIVATE_KEY.toString() !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
