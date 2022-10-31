// 함수가 아닌 다른 영역(중괄호 영역)에서는 scope로 판단하지 않는다.

// for(var i=0;i<10;i++){ //지역변수 같지만 함수의 scope가 아니기 때문에 영역 밖에서도 사용이 가능하다.
// }

// console.log(i);

var data = 10;
var data = 20;
console.log(data);

let number = 5;
// let number = 10;
number = 10;
console.log(number);


// let 키워드는 함수 레벨 스코프가 아닌 블록 레벨 스코프이기 때문에,
// 중괄호 안에서 선언하면 함수가 아니여도 해당 중괄호가 닫히면 메모리에서 해제된다.
for(let i = 0; i<10; i++){
    
}

// 중괄호 안에서 let으로 선언된 변수는 밖에서 사용할 수 없다.
// console.log(i); 