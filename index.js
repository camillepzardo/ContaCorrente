class Cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    _saldo = 0; //atributo com _ na frente, privado, n mexer.  #saldo = 0, 
    // proposta de sintese de dados privados https://github.com/tc39/proposal-class-fields#private-fields

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
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233356;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 77788855564;


const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo); 
