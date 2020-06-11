class Apple {
    constructor() {
        this.weight =10;
    }
    decrease(){
        this.weight--;
    }
    isEmpty(){
        return this.weight >0;
    }
    getWeight(weight){
        return this.weight;
    }

}
class Adam {
    constructor(name,weight) {
        this.name = name;
        this.weightAdam = weight;
    }
    getName(name){
        this.name = name;
    }

    eat(Apple){
        if(Apple.isEmpty()){
            this.weightAdam++;
            Apple.decrease();

        }
    }
    setWeight(weightAdam){
        this.weightAdam = weightAdam;
    }

}
let tao = new Apple()
let nguoi =new Adam()
nguoi.getName("duong")
nguoi.setWeight(50);
nguoi.eat(tao);
console.log(tao);
console.log(nguoi)