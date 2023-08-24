// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Padrao.sol";

contract Criador {
    address public endereco;

    function criaPadrao() public {
        Padrao novoPadrao = new Padrao();
        endereco = address(novoPadrao);
    }
}