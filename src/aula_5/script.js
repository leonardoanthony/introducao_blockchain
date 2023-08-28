// seu_script.js

async function criar(){
    const web3 = new Web3("http://127.0.0.1:7545");
    
    let transaction = {
        from: '0x0123c97db7C0c4847b04d49205EfE22D71B83E60',
        data: "0x608060405234801561001057600080fd5b5060008081905550610133806100276000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806356e7fedc14603757806391f5de3814604f575b600080fd5b604d60048036038101906049919060af565b6069565b005b60556073565b6040516060919060e4565b60405180910390f35b8060008190555050565b60005481565b600080fd5b6000819050919050565b608f81607e565b8114609957600080fd5b50565b60008135905060a9816088565b92915050565b60006020828403121560c25760c16079565b5b600060ce84828501609c565b91505092915050565b60de81607e565b82525050565b600060208201905060f7600083018460d7565b9291505056fea2646970667358221220913b06b1737513e2175934ca5f70f1e15c8e5532643c3b68025ebbbab11c235a64736f6c634300080d0033",
        gas: "0x1DC8D", 
    };

    let gas = await web3.eth.estimateGas(transaction);
    console.log(gas);

    let receipt = await web3.eth.sendTransaction(transaction);

    console.log(receipt);
}

const button = document.querySelector('#criar');

button.addEventListener('click', criar); 