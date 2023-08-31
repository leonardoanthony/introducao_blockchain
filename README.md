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

#### Para trabalhar com os metodos do contrato um tipo de transação especifica deve ser criada

        let transaction = {
                to: 'Endereço do contrato',
                data: '0x' + 8 primeiro caracteres do hash ( padrão Keccak-256 https://emn178.github.io/online-tools/keccak_256.html e de seus parametros se houver)
        }
        let receipt = await web3.eth.call (transaction); //envia a transacao



        0000000000000000000000000000000000000000000000000000000000000020
        0000000000000000000000000000000000000000000000000000000000000008
        4665726e616e6461000000000000000000000000000000000000000000000000

### Recuperando informações da blockchain local/carteira local

        const web3 = new Web3(window.ethereum);
        const conex_result = await ethereum.request({method: 'eth_requestAccounts'});
        console.log(conex_result);
        let contas = web3.eth.getAccounts();



