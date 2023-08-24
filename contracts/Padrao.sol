// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./HelloWorld.sol";

contract Padrao {
    string public nome;

    function mudaNome(string memory _nome) public {
        nome = _nome;
    }
}