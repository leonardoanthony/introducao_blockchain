async function getContractInitData(){
    const endereco = '0xa379d2ADd94b5772FF3f57da10C88Aa6cD7b7398';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();
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

document.querySelector('#conectar').addEventListener('click', conectar);
document.querySelector('#getGas').addEventListener('click', getGas);
document.querySelector('#pegaValor').addEventListener('click', pegaValor);
document.querySelector('#mudaValor').addEventListener('click', mudaValor);