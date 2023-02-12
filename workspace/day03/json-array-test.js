// Passenger 프로토타입 선언
// name, age, level을 프로퍼티로 선언
function Passenger(name, age, level){
    this.name = name;
    this.age = age;
    this.level = level;
}

// Passenger의 프로퍼티를 담고 있는 Object를 3개 선언
// let han = new Passenger('한동석', 20, 1);
// let hong = new Passenger('홍길동', 40, 2);
// let lee = new Passenger('이순신', 30, 3);

// 3개의 Object를 train이라는 Array 객체에 담는다
// let train = new Array(han, hong, lee);
// JSON.stringify를 통해 JSON으로 변환
// let trainJSON = JSON.stringify(train);
// console.log(train); // JS Object 형식
// console.log(trainJSON); // JSON 형식

// passengers라는 Array 객체 선언
let passengers = new Array();
// passengers에 이름, 나이, 등급을 프로퍼티로 담고 있는 Object 3개를 담아줌
passengers.push(new Passenger('한동석', 20, 1));
passengers.push(new Passenger('홍길동', 40, 2));
passengers.push(new Passenger('이순신', 30, 3));
console.log(passengers); //JS Object 형식

// passengers에 담겨있는 passenger들의 나이 총합을 totalAge에 담아줌
let totalAge = passengers.map(passenger => passenger.age).reduce((total, age) => total + age);
// passergers의 평균 나이를 averageAge에 담아줌
let averageAge = totalAge / passengers.length;
console.log(averageAge); // 30