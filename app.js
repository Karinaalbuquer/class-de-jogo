class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const tipo = this.tipo;
        let ataque;

        if (tipo === 'mago') {
            ataque = 'magia';
        } else if (tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (tipo === 'monge') {
            ataque = 'artes marciais';
        } else {
            ataque = 'shuriken';
        }

        return `o ${tipo} atacou usando ${ataque}`;
    }
}

const heroi1 = new Heroi('Smaug', 35, 'Guerreiro');
const heroi2 = new Heroi('Drakon', 113, 'Mago');
const heroi3 = new Heroi('Fafnir', 200, 'Elfo');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
