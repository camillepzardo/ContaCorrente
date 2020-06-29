import { Cliente } from "./Cliente.js";

export class contaCorrente {
    agencia;
    _cliente;
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){           
            this._cliente = novoValor;
        }
    } 

    get cliente(){
        return this._cliente;
    }

        // proposta de sintese de dados privados https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; //atributo com _ na frente, privado, n mexer.  #saldo = 0, 


    get saldo(){
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

