// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.


// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('사탕', 500, 100),
    new Product('과자', 1000, 50),
    new Product('아이스크림', 2000, 30)
];
console.log(products);
productsJSON = JSON.stringify(products);

let file = require('fs');
// file.writeFile('shop.json', productsJSON, 'utf-8', function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!")
//     }
// });

// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
file.readFile('shop.json', 'utf-8', function(error, content) {
    if(error){
        console.log(error);
    }else{
        let arrayProducts =  JSON.parse(content);
        let totalPrice = arrayProducts.map(product => product.price).reduce((total, price) => total + price);
        let totalStock = arrayProducts.map(product => product.stock).reduce((total, stock) => total + stock);
        let sum = {totalPrice: totalPrice, totalStock: totalStock};
        let sumJSON = JSON.stringify(sum);
        file.writeFile('sum.json', sumJSON, 'utf-8', function(error){
            if(error){
                console.log(error);
            }else{
                console.log("성공!");
            }
        });
    }
});






