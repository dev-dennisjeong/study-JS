// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 Object 타입으로 변환하여 각 프로퍼티를 출력한다.

function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product("초콜릿", 1000, 10),
    new Product("사탕", 500, 20)
];

let productsJSON = JSON.stringify(products);


let file = require('fs');

// file.writeFile('product.json', productsJSON, 'utf-8', function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!")
//     }
// });

// let file = require('product.json');
file.readFile('product.json', 'utf-8', function(error, content) {
        if(error){
            console.log(error);
        }else{
            console.log(JSON.parse(content));
        }
    });
