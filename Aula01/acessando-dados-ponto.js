const clientes = {
    Nome: 'Rafael',
    Idade: 17,
    CPF: '123.456.789-01',
    Email: 'rafael@gmail.com',

}

console.log(clientes.Nome)
console.log(`O nome do cliente é ${clientes.Nome}
e sua idade é ${clientes.Idade} anos.`)
console.log(`Os priemiros 3 números do seu cpf são ${clientes.CPF.substring(0,3)}`)
