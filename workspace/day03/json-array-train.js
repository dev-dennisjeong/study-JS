// 좌석등급, 가격, 좌석수를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Train(level, price, seat) {
    this.level = level;
    this.price = price;
    this.seat = seat;
}

let classes = [
    new Train("firstClass", 100000, 20),
    new Train("businessClass", 50000, 30),
    new Train("economyClass", 20000, 50)
];

// train.json에 변환된 JSON 형식의 문자열을 작성한다.
classesJSON = JSON.stringify(classes);

// train.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 좌석 수를 Object에 담은 뒤 trainSum.json으로 출력한다.
let file = require('fs');
// file.writeFile('train.json', classesJSON, 'utf-8', function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!")
//     }
// });


file.readFile('train.json', 'utf-8', function(error, content){
    if(error){
        console.log(error);
    }else{
        let classes = JSON.parse(classesJSON);
        let totalPrice = classes.map(v => v.price * v.seat).reduce((total, price) => total + price);
        let totalSeat = classes.map(v => v.seat).reduce((total, seat) => total + seat);
        let trainSum = {totalPrice: totalPrice, totalSeat: totalSeat};
        let trainSumJSON = JSON.stringify(trainSum);
        file.writeFile('train-sum.json', trainSumJSON, 'utf-8', function(error){
            if(error){
                console.log(error);
            }else{
                console.log("성공!");
            }
        });
    }
});
