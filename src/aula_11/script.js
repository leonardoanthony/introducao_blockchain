

async function conectar() {
    const result = await ethereum.request({method: 'eth_requestAccounts'});
    console.log(result);
}

async function iniciar() {
    const web3 = new Web3('http://127.0.0.1:7545');
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
}




document.querySelector('#conectar').addEventListener('click', conectar);
document.querySelector('#iniciar').addEventListener('click', iniciar);