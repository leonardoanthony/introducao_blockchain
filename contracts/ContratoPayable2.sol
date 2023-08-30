// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ContratoPayable {

    address payable public owner;

    struct Client {
        address wallet;
        string name;
        uint value;
    }

    mapping(address => Client) public clients;

    receive() external payable{}

    constructor() {
        owner = payable(msg.sender);

        Client memory newClient;

        newClient.name = "Leonardo";
        newClient.wallet = owner;
        newClient.value = 0;

        clients[msg.sender] = newClient;
    }

    function createAccount(string memory _name) public{
        Client memory newClient;

        newClient.name = _name;
        newClient.wallet = payable(msg.sender);
        newClient.value = 0;

        clients[msg.sender]  = newClient;
    }

    function getWalletBalance() public view returns(uint) {
        return address(msg.sender).balance / 1000000000000000000;
    }

    function getAccountBalance() public view returns(uint){
        return clients[msg.sender].value / 1000000000000000000;
    }

    function getContractBalance() public view returns(uint) {
        return address(this).balance / 1000000000000000000;
    }

    function deposit() public payable{
        clients[msg.sender].value = msg.value;
    }

    function withdraw() public {
        uint value = clients[msg.sender].value;

        uint256 clientWithdraw = (value * 9) / 10;
        uint256 contractWithdraw = value - clientWithdraw;

        address payable client = payable(msg.sender);

        client.transfer(clientWithdraw);
        owner.transfer(contractWithdraw);

        clients[msg.sender].value = 0;
        
    }

}