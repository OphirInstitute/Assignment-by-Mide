require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY_URL;
const PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.0",

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

  networks: {
    goerli: {
      url: ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
