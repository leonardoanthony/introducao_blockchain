// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HelloWorld {
    uint public numero;

    constructor(){
        numero = 0;
    }

    function setNumero(uint _newNumero) public {
        numero = _newNumero;
    }
}