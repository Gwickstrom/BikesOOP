class Bike {
    price: number;
    max_speed: number;
    miles: number
    constructor(price: number, max_speed: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
        return this;
    }
    displayInfo() {
        console.log(this.price, this.max_speed, this.miles);
    }
    ride() {
        this.miles += 10;
        console.log("Riding");
        return this;
    }
    reverse() {
        this.miles -= 5;
        console.log("Reversing");
        return this;
    }

}

var bob = new Bike(5, 5);

bob.displayInfo();
bob.reverse();
bob.ride();
bob.ride();
bob.reverse();
bob.displayInfo();
