// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Incrementer {
    // Variables
    uint256 public number;

    // Events
    event Increment(uint256);
    event Reset(uint256);

    // Increment By One
    function increment() public {
        number++;
        emit Increment(number);
    }

    // Reset to Zero
    function reset() public {
        emit Reset(number);
        number = 0;
    }
}