// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

// let products = new Array();
// products.push(new Product('참후레쉬', 1500, 90));
// products.push(new Product('참후레쉬', 1500, 60));
// products.push(new Product('참후레쉬', 1500, 30));
// console.log(products);

// JSON으로 변경시킨다.
let productsJSON = JSON.stringify(products);
console.log(productsJSON);


// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.

// getTotals 함수 선언
function getTotals(productsJSON, callback) {
    let products = JSON.parse(productsJSON); //JSON.parse()를 통해 JS Object 형식으로 바꿔줌
    // totals에 products의 각 상품의 가격과 재고를 곱한 총 가격을 담아줌
    let totals = products.map(product => product.price * product.stock);
    if(callback){
        callback(totals);
    }
}

// callback 함수를 통해 totals를 넘겨줌
getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
