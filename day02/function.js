/* JS에서는 오버로딩을 지원하지 않는다. */
function add(num1, num2, num3){
    return num1+num2+num3;
}

function add(num1, num2){
    return num1 + num2;
}

// JS에서 동일한 식별자로 함수를 여러 번 선언하면,
// 가장 마지막에 선언한 함수로 결정된다.

console.log(add(1,3));
console.log(add(1,10,3));

// 가변인자
function add(...args){
    total = 0;
    for(let i =0; i<args.length; i++){
        total+=args[i];
    }
    return total;
}

console.log(add(1,3));
console.log(add(1,10,3));


// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// 파일 확장자를 .ts로 변경
// tsc 파일명.ts
// node 파일명.js

function intro(name, ...args){
    console.log("이름: " + name);
    for(let i=0; i<args.length;i++){
        console.log("기타정보" + (i+1) + " : " + args[i]);
    }
    
}

