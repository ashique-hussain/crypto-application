require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/93vA7sz-p1Z7yMUNGZTOs1cNVhqZCJml',
      accounts: ['9eb5faf5d354ee8b6f8c9203b2a3d4a6485bf22f3ba788912f11843d92463509'],
    },
  },
};