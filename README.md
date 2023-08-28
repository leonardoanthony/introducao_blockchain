# Anotações

### Chama o console do truffle para fazer chamadas eth

        truffle console

### usando metodos do contrato

        let instance = HelloWorld.deployed()
        let numero = await instance.numero();
        await.setNumero(10);
        let instance2 = HelloWorld.at('address');
        
### Introdução ao Web3js

        let gas = await web3.eth.estimateGas(transaction); //recupera o gas estimado da transação
        let receipt = await web3.eth.sendTransaction(transaction); //envia a transacao
