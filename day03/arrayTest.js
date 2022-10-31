// JS의 Array객체는 길이를 설정하지 않아도
// 원하는 인덱스에 원하는 값을 바로 추가할 수 있다.
// 또한 타입이 지정되어 있지 않기 때문에 다양한 타입도 동시에 담을 수 있다.

var datas = [];
datas[0] = 10;
console.log(datas);
datas[3] = 20;
console.log(datas);

// push() : 가장 마지막에 값 추가
var datas = [20, 5, 6, 12, 10];
console.log(datas);

datas.push(19);
console.log(datas);

// join() : 원하는 구분점을 문자열로 전달하여 각 요소를 전달한 구분점으로 구분한 뒤 문자열로 리턴
console.log(datas.join("=========="));

// slice(begin, end) : 원하는 부분을 추출하기 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달한다.
// slice(begin) : begin부터 마지막까지 추출한다.
console.log(datas.slice(1,3));
console.log(datas.slice(1));


// forEach(callback) : 반복문
datas.forEach(function(v){console.log(v);});

// forEach(callback(값, 인덱스, Array객체));
datas.forEach(function(v, i, ar){
    ar[i] = v*v;
});

console.log(datas);


// indexOf(값) : 값을 해당 Array에서 찾은 뒤 인덱스 번호 리턴
console.log(datas.indexOf(100));
console.log(datas.indexOf(1));

// map(callback) : 기존 값을 원하는 값으로 변경하여 리턴
datas.map(function(v){return v*2;}).forEach(function(v){console.log(v)});


// 월~일까지 Array객체에 담은 후 출력
// forEach는 Array객체에서만 사용 가능
var datas = ["월", "화", "수", "목", "금", "토", "일"];
datas.forEach(function(v){console.log(v)});
"월화수목금토일".split("").forEach(function(v){console.log(v)});

// 7칸의 ArrayList 만들기
// let days = new Array(7);
// let days = new Array("월", "화", "수", "목", "금", "토", "일");