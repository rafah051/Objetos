const clientes = {
    Nome: 'Rafael',
    Idade: 17,
    CPF: '123.456.789-01',
    Email: 'rafael@gmail.com',

}

//console.log(`O nome do cliente é ${clientes['Nome']} e a idade é ${clientes['Idade']} anos`);

//Criar array com dados
const chaves = ['Nome', 'Idade', 'CPF', 'Email'];
chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor ${clientes[chave]}`)

})