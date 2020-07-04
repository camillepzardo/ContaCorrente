import{Cliente} from "./Cliente.js";
import{contaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo",11122233356);

const contaCorrenteRicardo = new Conta(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.depositar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);