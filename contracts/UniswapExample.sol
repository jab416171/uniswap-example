// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.6;

import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';
import '@uniswap/v2-periphery/contracts/UniswapV2Router02.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';

contract UniswapExample {
    address public factory;
    constructor(address factory_) public {
        factory = factory_;

    }

    function swap(address token1_, uint amountIn_) public {
        IUniswapV2Router02 router = IUniswapV2Router02(factory);
        IERC20 token1 = IERC20(token1_);

        require(token1.approve(address(router), uint(-1)), 'approve failed');

        uint256 amountIn = amountIn_;
        require(token1.transferFrom(msg.sender, address(this), amountIn), 'transferFrom failed.');

        address[] memory path = new address[](2);
        path[0] = address(token1);
        path[1] = router.WETH();
        uint256 amountOutMin = 1;
        router.swapExactTokensForETH(amountIn, amountOutMin, path, msg.sender, block.timestamp);
        msg.sender.transfer(address(this).balance);
    }
}
