class Mouse {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    checkSpeed() {
        return this.speed;
    }

    mouseSay(str) {
        console.log(`${this.name} kêu ${str}`);
    }

    checkStatus() {
        (this.status) ? console.log(`${this.name} còn sống`) : console.log(`${this.name} chết`);
    }
}

class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    catSay(str) {
        console.log(`${this.name} kêu ${str}`);
    }

    catchMouse(mouse) {
        if (this.maxSpeed > mouse.speed) {
            this.maxSpeed = 0;
            console.log(`${this.name} bắt được ${mouse.name}`);
        } else {
            console.log(`${this.name} không bắt được ${mouse.name}`);
        }

    }

    eatMouse(mouse) {
            if (mouse.status) {
                this.weight += mouse.weight;
                mouse.status = false;
                console.log(`${mouse.name} bị ${this.name} ăn`)
                mouse.checkStatus(mouse);
            } else {
                console.log(`${this.name} không ăn ${mouse.name}`);

        }
    }
    
    checkWeight(cat) {
        return this.weight;
    }

}

let mouse1 = new Mouse("chuột cống", 10, 15, true);
let mouse2 = new Mouse("chuôt đồng", 5, 20, true);
let mouse3 = new Mouse("chuột chết", 2, 0, false);
let cat = new Cat("mèo ngu", 30, 30);

cat.catSay("meo meo");
mouse1.mouseSay("chit chit");
mouse2.mouseSay("chut chit");
mouse3.mouseSay("im re");

cat.catchMouse(mouse1);
cat.catchMouse(mouse2);
cat.catchMouse(mouse3);

cat.eatMouse(mouse1);
cat.eatMouse(mouse2);
cat.eatMouse(mouse3);
console.log(cat);
console.log(mouse1);
console.log(mouse2);
console.log(mouse3);
console.log(cat.checkWeight());



