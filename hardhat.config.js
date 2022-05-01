require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");


const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;  

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    // rinkeby: {
    //   url: INFURA_PROJECT_ID,
    //   accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999
      }
    }
  },
  gasReporter: {
    currency: 'ETH',
    coinmarketcap: "",
    gasPrice: 50
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ""
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  
};
