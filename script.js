class Traveler {
    constructor (nome){
        this.nome = nome
        this.comida = 1
        this.isHelthy = true
    }
    set nome(nome){
        this._nome = nome
    }
    get nome() {
        return this._nome
    }
    hunt = () => {
        this.comida += 2
    }
    eat = () => {
        if (this.comida > 0){
            this.comida -=1
        }
        if(this.comida === 0){
            this.isHelthy = false
        }
    }
}

class Wagon {
    constructor (capacidade){
        this.capacidade = capacidade
        this.passageiros = []
    }
    set capacidade(int){
        this._capacidade = int
    }
    getAvailableSeatCount = () => {
        let emptySeat = this.capacidade - this.passageiros.length
        return emptySeat
    }
    join = (travler) => {
        if (this.getAvailableSeatCount() > 0){
            this.passageiros.push(travler)
        }
    } 
    shouldQuarantine = () =>{
        for (let i = 0; i< this.passageiros.length; i++){
            if (!this.passageiros[i].isHelthy){
                return true
            }
        }
    }
    totalFood = () => {
        let contador = 0
        for (let i = 0; i< this.passageiros.length; i++){
            contador += this.passageiros[i].comida   
        }
        return contador
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);

