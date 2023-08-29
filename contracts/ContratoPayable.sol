// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ContratoPayable {

    address public enderecoAnterior;

    constructor() {
        enderecoAnterior = msg.sender;
    }

    function recebeDinheiro() public payable{
        payable(enderecoAnterior).transfer(msg.value);
        enderecoAnterior = msg.sender;
    }

}