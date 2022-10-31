// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// shop.json으로 출력한다.
// readFile을 사용해서 shop.json을 읽어 온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
let file = require("fs");

// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.json = JSON.stringify(this); //product의 객체 뒤에 .json만 붙이면 알아서 product의 JSON 텍스트를 문자열로 저장한다.
}

// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
let products = new Array();
products.push(new Product('마우스', 15000, 3).json);
products.push(new Product('키보드', 60000, 8).json);
products.push(new Product('야구공', 3000, 50).json);

// shop.json으로 출력한다.
console.log(products.toString());
file.writeFile('shop.json', "[" + products.toString() + "]", 'utf-8', function(e){});

// readFile을 사용해서 shop.json을 읽어 온다.
file.readFile('shop.json', 'utf-8', function(e, content){
    let sumObject = new Object();
    let totalPrice = 0;
    let totalStock = 0;
    products = JSON.parse(content); //JSON 형태의 문자열을 자바스크립트 객체로 변환한다.

    products.map(v => v.price * v.stock).forEach(v => totalPrice += v);
    products.map(v => v.stock).forEach(v => totalStock += v);

    // 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
    sumObject.totalPrice = totalPrice;
    sumObject.totalStock = totalStock;
    sumObjectJSON = JSON.stringify(sumObject); //JSON형태를 문자열로 변환한다.

    file.writeFile('sum.json', sumObjectJSON, 'utf-8', function(e){});
});

