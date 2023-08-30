// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ContratoPayable {

    address payable public owner;

    mapping(address => uint) public clients;

    receive() external payable{}

    constructor() {
        owner = payable(msg.sender);
    }

    function getWalletBalance() public view returns(uint) {
        return address(msg.sender).balance;
    }

    function getAccountBalance() public view returns(uint){
        return clients[msg.sender];
    }

    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    function recebeDinheiro() public payable{
        clients[msg.sender] = msg.value;
    }

    function withdraw() public {
        uint256 value = address(this).balance;

        uint256 clientWithdraw = (value * 9) / 10;
        uint256 contractWithdraw = value - clientWithdraw;

        address payable client = payable(msg.sender);

        client.transfer(clientWithdraw);
        owner.transfer(contractWithdraw);

        clients[msg.sender] = 0;
        
    }

}