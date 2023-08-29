// seu_script.js

async function run(){
    const web3 = new Web3('http://127.0.0.1:7545');

    const endereco = '0xDb67d3913F19aa532Db514Ffb430754d915EC741';

    const {abi} = await (await fetch('../../build/contracts/ContratoPayable.json')).json();

    const contract = new web3.eth.Contract(abi, endereco);

    const receipt = await contract.methods.recebeDinheiro().send({
        from: '0x2cc4BDa427714f7cd3f83eAD8B04cBF2F2Fe0938',
        value: '10000000000000000000'
    });

    console.log(receipt);
}

document.querySelector('#run').addEventListener('click', run); 

