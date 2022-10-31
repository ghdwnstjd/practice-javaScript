// 1. 상품명과 가격을 JSON으로 만든다.
// 2. 위 JSON을 JS Object 객체로 변환한다.
// 3. 각각의 프로퍼티를 출력한다.
// 4. JSON으로 변환한 뒤 출력한다.


item = {name: "가나우유", cost: "1500"};
// 1
itemJSON = JSON.stringify(item);
console.log(itemJSON);

// 2
item = JSON.parse(itemJSON);

// 3
console.log("상품명: " + item.name);
console.log("가격: " + item.cost + "원");

// 4
itemJSON = JSON.stringify(item);
console.log(itemJSON);
