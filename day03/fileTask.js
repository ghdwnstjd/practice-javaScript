// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환한다.
// 각 프로퍼티를 출력한다.

let file = require('fs');
let item = new Object();
let itemJSON;

item.name = "키보드";
item.cost = 20000;
item.stock = 5;

itemJSON = JSON.stringify(item);
// console.log(itemJSON);

file.writeFile('product.json', itemJSON, 'utf-8', function(e){
    if(e){
        console.log(e);
    } else{
        console.log("출력 성공!");
    }
});

file.readFile('product.json', 'utf-8', function(e, content){
    if(e){
        console.log(e);
    }else{
        let item = JSON.parse(content);
        console.log("상품명 : " + item.name);
        console.log("가격 : " + item.cost);
        console.log("재고 : " + item.stock);
    }
})