const cliente = {
    nome: "Rafael",
    idade: 17,
    email: "rafael@email.com",
    telefone: ["43988123456", "43988789000"]

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
    complemento: "perto do Japão"
})

console.log(cliente.endereços);