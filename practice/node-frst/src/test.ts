const nome: string = "Igor";
const idade: number = 28;
const profissao: string = "Desenvolvedor";
let token: string = process.env.GOOGLE_DRIVE_TOKEN as string;

console.log("Hello, World!");
console.log(`Meu nome é ${nome}, tenho ${idade} anos e sou um ${profissao}.`);
console.log(`Conectando ao Driver com o TOKEN: ${token}`);
