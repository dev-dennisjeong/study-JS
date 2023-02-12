// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
// 동물원의 동물 전체 평균 나이를 구한다.

function Animal(name, kind, age){
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = new Array();
animals.push(new Animal("쪼쪼", "원숭이", 2));
animals.push(new Animal("호돌이", "호랑이", 5));
animals.push(new Animal("브라질", "닭", 3));

// console.log(animals);
let animalsJSON = JSON.stringify(animals);
console.log(animalsJSON);

function average(animalsJSON, callback){
    let animals = JSON.parse(animalsJSON);
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback){
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));



// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
// function Animal(name, kind, age) {
//     this.name = name;
//     this.kind = kind;
//     this.age = age;
// }

// let animals = [
//     new Animal('구름이', '양', 4),
//     new Animal('뽀삐', '소', 8),
//     new Animal('바둑이', '기린', 9)
// ];

// let animalsJSON = JSON.stringify(animals);

// // 동물원의 동물 전체 평균 나이를 구한다.
// function average(animalsJSON, callback) {
//     let animals = JSON.parse(animalsJSON);
//     // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
//     let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
//     let average = total / animals.length;
//     if(callback) {
//         callback(average);
//     }
//     return average;
// }

// average(animalsJSON, average => console.log(average));
