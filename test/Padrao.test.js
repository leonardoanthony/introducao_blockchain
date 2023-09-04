const Padrao = artifacts.require("Padrao");

contract("Simplecoin", (accounts) => {

    it("Padrao foi migrado", async () => {
        let instance = await Padrao.deployed();

        assert(instance, "O contrato não foi migrado");
    })

    it("Nome é Leonardo", async () => {
        let instance = await Padrao.deployed();
        let nome = await instance.nome();

        assert(nome == 'Leonardo', "o nome não é leonardo");
    })



})