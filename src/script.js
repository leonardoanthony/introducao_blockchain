async function getContractInitData(){
    const endereco = '0x097b2445d5Ce5DFDeA75c78371995926AC51A673';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();
    const chain_id = await ethereum.request({method: 'eth_chainId'});
    if(chain_id != '0x61'){
        alert('Por favor, conecte-se a Testnet Binance Smart Chain');
        return;
    }
    return {abi, endereco};
}

async function conectar() {
    const result = await ethereum.request({method: 'eth_requestAccounts'});
    console.log(result);
}

async function getAccount(web3) {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
}

async function pegaValor() {
    const web3 = new Web3(window.ethereum);
    const {abi, endereco} = await getContractInitData();

    const contract = new web3.eth.Contract(abi, endereco);

    const valor = await contract.methods.nome().call();
    console.log(valor);

}

async function mudaValor() {
    const web3 = new Web3(window.ethereum);
    const {abi, endereco} = await getContractInitData();

    const account = (await web3.eth.getAccounts())[0];
      

    const contract = new web3.eth.Contract(abi, endereco);
    let receipt = await contract.methods.mudaNome('Leonardo').send({from: account, gas: '45040'});
    console.log(receipt);
}

async function getGas() {
    const web3 = new Web3(window.ethereum);
    const {abi, endereco} = await getContractInitData();
    const account = (await web3.eth.getAccounts())[0];
    const contract = new web3.eth.Contract(abi, endereco);

    contract.methods.mudaNome('Leonardo').estimateGas({from: account,})
        .then(function(gasAmount){
            console.log(Number(gasAmount));
        })
        .catch(function(error){
            console.log(error);
    });
}

ethereum.on('chainChanged', () => window.location.reload());

document.querySelector('#conectar').addEventListener('click', conectar);
document.querySelector('#getGas').addEventListener('click', getGas);
document.querySelector('#pegaValor').addEventListener('click', pegaValor);
document.querySelector('#mudaValor').addEventListener('click', mudaValor);