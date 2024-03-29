require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRI_KEY],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
