

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
    const endereco = '0x2Ee8AFF291131e49fc65edf6A0203429721f8AC0';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();

    const contract = new web3.eth.Contract(abi, endereco);

    const valor = await contract.methods.nome().call();
    console.log(valor);

}

async function mudaValor() {
    const web3 = new Web3(window.ethereum);
    const endereco = '0x2Ee8AFF291131e49fc65edf6A0203429721f8AC0';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();


    const account = (await web3.eth.getAccounts())[0];
      

    const contract = new web3.eth.Contract(abi, endereco);
    let receipt = await contract.methods.mudaNome('Leonardo').send({from: account, gas: '3000000'});
    console.log(receipt);


    // contract.methods.mudaNome('Leonardo').estimateGas({from: account,})
    //     .then(function(gasAmount){
    //         console.log(Number(gasAmount));
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });


}





document.querySelector('#conectar').addEventListener('click', conectar);
// document.querySelector('#getAccount').addEventListener('click', getAccount);
document.querySelector('#pegaValor').addEventListener('click', pegaValor);
document.querySelector('#mudaValor').addEventListener('click', mudaValor);