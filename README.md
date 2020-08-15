This is an example project that swaps a newly created ERC20 token in uniswap for eth, and then sends that eth back to the user. I had a hard time finding a complete, working example to do this, so I wanted to make this freely available for anyone to use.

Requirements
============
1. You already have [metamask](https://metamask.io/) or some other wallet set up, and have some eth on ropsten. You can get eth from a faucet like https://faucet.metamask.io/
2. [nodejs >= v12.x & npm >= 6.x](https://nodejs.org/en/) is installed
3. Ganache is installed


Instructions
============

1. Create a file `.secret` with your secret key from metamask
2. Create a file `.infura` with your ropsten infura url, like so: https://ropsten.infura.io/v3/examplekey. You can also copy this URL directly from the settings tab on the project, just change endpoints to ropsten.
3. Update `buidler.config.js` with your public address, under namedAccounts -> deployer.
4. Run these commands:
```sh
npm install && npm install --only=dev
npx buidler test --network ganache
./deploy.sh
```
5. Go to [uniswap.org](https://app.uniswap.org/) and create a pool, adding some token1 and eth. By default, the deploy script will deploy to the ropsten test network, so make sure you're on ropsten when adding the pool to uniswap.
6. Go to the token1 address in etherscan and call the approve function, passing in the contract address and -1 (unlimited).
7. Go to the contract address in etherscan and call swap, passing in the token1 address.

Notes
=====
You can safely run `deploy.sh` as many times as you want. Only modified contracts will be redeployed/verified. The deployments/ folder is meant to be checked into source code, to keep track of all of the deployments. Documentation for the buidler-deploy plugin can be found [here](https://buidler.dev/plugins/buidler-deploy.html).