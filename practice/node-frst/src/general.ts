// Tipos primitivos
let nome: string = "Igor";
let idade: number = 30;
let ativo: boolean = true;
let qualquer: any = "pode ser qualquer coisa";
let indefinido: undefined = undefined;
let nulo: null = null;

// Tipos literais e union types
type Status = "ativo" | "inativo";
let statusUsuario: Status = "ativo";
let id: string | number = 123;

// Tupla
let usuario: [string, number] = ["Igor", 1];

// Enum
enum Cargo {
  Admin = "Administrador",
  User = "Usuário",
  Guest = "Convidado",
}

// Interface
interface Pessoa {
  nome: string;
  idade: number;
  cargo?: Cargo; // opcional
}

// Type alias
type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
};

// Função com tipagem
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

// Função que não retorna nada
function logarErro(erro: string): void {
  console.error(erro);
}

// Função com parâmetros opcionais e default
function somar(a: number, b: number = 0): number {
  return a + b;
}

// Generics
function primeiroElemento<T>(arr: T[]): T {
  return arr[0];
}

// Classe e herança
class Animal {
  constructor(public nome: string) {}

  emitirSom(): void {
    console.log(`${this.nome} fez um som.`);
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log(`${this.nome} latiu.`);
  }
}

// Type assertion (as)
let valorDesconhecido: unknown = "123";
let valorConvertido: number = (valorDesconhecido as string).length;

// Trabalhando com arrays e objetos
const produtos: Produto[] = [
  { id: 1, nome: "Mouse", preco: 50 },
  { id: 2, nome: "Teclado", preco: 100, descricao: "Mecânico" },
];

// Async/Await
async function buscarProdutoPorId(id: number): Promise<Produto | undefined> {
  return produtos.find((p) => p.id === id);
}

// Módulo (exemplo de exportação/importação)
export { saudacao, Pessoa, Produto, buscarProdutoPorId };

// Uso das funções
console.log(saudacao("Igor"));
const rex = new Cachorro("Rex");
rex.emitirSom();

buscarProdutoPorId(1).then((produto) => {
  if (produto) {
    console.log(`Produto encontrado: ${produto.nome}`);
  }
});
