import { Cliente } from "./Cliente.js";

export class contaCorrente {
    static numeroDeContas = 0;
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){           
            this._cliente = novoValor;
        }
    } 

    get cliente(){
        return this._cliente;
    }

        // proposta de sintese de dados privados https://github.com/tc39/proposal-class-fields#private-fields
     //atributo com _ na frente, privado, n mexer.  #saldo = 0, 


    get saldo(){
        return this._saldo;
    }
//construtor tbm pode usar acessores dentro da classe
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        contaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

