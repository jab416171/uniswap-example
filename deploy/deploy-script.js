
module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    router = {}
    factory = {}
    // uniswap has the same address on mainnet and ropsten
    router.address = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    // factory.address = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

    token1 = await deploy("ERC20Token1", {
      from: deployer,
      args: [],
    });
    console.log("token1 deployed to", token1.address)
    token2 = await deploy("ERC20Token2", {
      from: deployer,
      args: [],
    });
    console.log("token2 deployed to", token2.address)
    UniswapExample = await deploy("UniswapExample", {
      from: deployer,
      args: [router.address],
    });
    console.log("UniswapExample deployed to", UniswapExample.address)
    };
