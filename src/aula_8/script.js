// seu_script.js

async function pegaNome(){
    const web3 = new Web3("http://127.0.0.1:7545");

    let endereco = '0x2b7ca73B63a9A4137FAdAeEC2731f2Ba2785F9a4';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();

    const contract = new web3.eth.Contract(abi, endereco);
    let nome = await contract.methods.nome().call();
    console.log(nome);    
    
}


async function mudaNome(){
    const web3 = new Web3("http://127.0.0.1:7545");

    let endereco = '0x2b7ca73B63a9A4137FAdAeEC2731f2Ba2785F9a4';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();

    const contract = new web3.eth.Contract(abi, endereco);
    const receipt = await contract.methods.mudaNome('Leonardo').send({from: '0x4ec907CabC6fE7b6FB5aA436B5a407edC971bc16',})

    console.log(receipt);
}


async function criar(){
    const web3 = new Web3("http://127.0.0.1:7545");

    const {bytecode} = await (await fetch('../../build/contracts/Padrao.json')).json();
    
    let transaction = {
        from: '0x4ec907CabC6fE7b6FB5aA436B5a407edC971bc16',
        data: bytecode,
        gas: "0x4B621"
    };

    // let gas = await web3.eth.estimateGas(transaction);
    // console.log(gas);

    let receipt = await web3.eth.sendTransaction(transaction);

    console.log(receipt);
}

async function encode() {
    const web3 = new Web3("http://127.0.0.1:7545");

    let endereco = '0x2b7ca73B63a9A4137FAdAeEC2731f2Ba2785F9a4';
    const {abi} = await (await fetch('../../build/contracts/Padrao.json')).json();

    const contract = new web3.eth.Contract(abi, endereco);
    const encode = contract.methods.mudaNome('Anthony').encodeABI();
    console.log(encode);

}


document.querySelector('#criar').addEventListener('click', criar); 
document.querySelector('#pegaNome').addEventListener('click', pegaNome); 
document.querySelector('#mudaNome').addEventListener('click', mudaNome); 
document.querySelector('#encode').addEventListener('click', encode); 