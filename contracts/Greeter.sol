//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract LifeCoin is ERC20 {
    constructor (uint256 initialSupply) ERC20("LifeCoin", "LFC") public {
        _mint(msg.sender, initialSupply*10**18);
    }
}