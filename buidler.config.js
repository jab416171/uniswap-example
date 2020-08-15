usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-web3");
usePlugin("buidler-deploy");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});
const fs = require('fs');
const privatekey = fs.readFileSync(".secret").toString().trim();
const infura_url = fs.readFileSync(".infura").toString().trim();
const etherscan_api_key = fs.readFileSync(".etherscan").toString().trim();

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.6",
  },
  networks: {
    // defaultNetwork: "ganache",
    ganache: {
      url: "http://127.0.0.1:7545",
    },
    buidlerevm: {
      // See its defaults
    },
    ropsten: {
      url: infura_url,
      accounts: [privatekey]
    },
    rinkeby: {
      url: infura_url,
      accounts: [privatekey]
    },

  },

    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            4: '0xffffeffffff', // but for rinkeby it will be a specific address
            "specialnetwork": "0xf34e...", //it can also specify a specific network name (specified in buidler.config.js)
        },
        feeCollector:{
            default: 1, // here this will by default take the second account as feeCollector (so in the test this will be a different account than the deployer)
            1: '0xffffeaaa', // on the mainnet the feeCollector could be a multi sig
            4: '0xaaaeffffff', // on rinkeby it could be another account
        }
    }

};
