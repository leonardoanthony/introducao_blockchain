// seu_script.js

async function pegaNome(){
    const web3 = new Web3("http://127.0.0.1:7545");
    
    let transaction = {
        to: '0x2b7ca73B63a9A4137FAdAeEC2731f2Ba2785F9a4',
        data: '0x2deb124b', //* nome() em hex
    };

    let receipt = await web3.eth.call(transaction);

    console.log(receipt);
}


async function mudaNome(){
    const web3 = new Web3("http://127.0.0.1:7545");
    
    let transaction = {
        from: '0x4ec907CabC6fE7b6FB5aA436B5a407edC971bc16',
        to: '0x2b7ca73B63a9A4137FAdAeEC2731f2Ba2785F9a4',
        data: '0xe5e1bf8f000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000084665726e616e6461000000000000000000000000000000000000000000000000', //* mudaNome(string) em hex + nome em hex
        gas: "0x4B621"
    };

    let receipt = await web3.eth.sendTransaction(transaction);

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


document.querySelector('#criar').addEventListener('click', criar); 
document.querySelector('#pegaNome').addEventListener('click', pegaNome); 
document.querySelector('#mudaNome').addEventListener('click', mudaNome); 