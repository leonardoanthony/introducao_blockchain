// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Padrao {
    string public nome;

    constructor(){
        nome = 'Leonardo';
    }

    function mudaNome(string memory _nome) public {
        nome = _nome;
    }
}