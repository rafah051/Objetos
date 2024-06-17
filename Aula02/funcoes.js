const cliente = {
    nome: "Rafael",
    idade: 17,
    email: "rafael@email.com",
    telefone: ["43988123456", "43988789000"],
    saldo: 200,
    efetuePagamento: function (ValorCompra){
        if(ValorCompra > this.saldo){
            console.log('Saldo insuficiente!!')

        }else{
            this.saldo = this.saldo - ValorCompra;
            console.log(`Pagamento realizado! Novo saldo: ${this.saldo}`)
        }
    }

};

cliente.endereços = [
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    casa: false,
    complemento: "Em frente a Delegacia Civil"
}
]

cliente.endereços.push({
    rua: "House do Rafa",
    numero: 999,
    apartamento: false,
    casa: true,
    complemento: "venezuela"
});

cliente.efetuePagamento(190);