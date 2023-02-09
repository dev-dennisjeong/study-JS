function Passenger(name, age, level){
    this.name = name;
    this.age = age;
    this.level = level;
}

// let han = new Passenger('한동석', 20, 1);
// let hong = new Passenger('홍길동', 40, 2);
// let lee = new Passenger('이순신', 30, 3);

// let train = new Array(han, hong, lee);
// let trainJSON = JSON.stringify(train);
// console.log(train);
// console.log(trainJSON);

let passengers = new Array();
passengers.push(new Passenger('한동석', 20, 1));
passengers.push(new Passenger('홍길동', 40, 2));
passengers.push(new Passenger('이순신', 30, 3));

let totalAge = passengers.map(passenger => passenger.age).reduce((total, age) => total + age);
let averageAge = totalAge / passengers.length;
console.log(averageAge);