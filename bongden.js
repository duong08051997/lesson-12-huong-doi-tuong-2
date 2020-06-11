
class ElectricLamp{
    constructor() {
        this.status = false;
    }
    turnOn(){
       this.status = true;
        console.log('turn on');
    }
    turnOff(){
        this.status = false;
        console.log('turn off');
    }
}
class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = ElectricLamp;
    }
    connectToLamp(ElectricLamp){
        this.electric = ElectricLamp;
    }

    switchOn(){
        this.status = true;
        this.electric.turnOn();

    }
    switchOff(){
        this.status = false;
        this.electric.turnOff();
    }
}

let button = new SwitchButton();
let lamp = new ElectricLamp();
button.connectToLamp(lamp);
for (let i = 1;i<=10;i++){
    button.switchOn(i);
    button.switchOff(i);
}
