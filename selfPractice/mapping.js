// // 1~100중 3의 배수만 뽑기
// var numbers = new Array(100).fill();
// numbers = numbers.map(function(v, i){return i+1;}).filter(function(v){return v%3==0;})
// console.log(numbers);


// // 1~100중 3과 7의 최소공배수만 뽑기
// var numbers = new Array(100).fill();
// numbers = numbers.map(function(v, i){return i+1}).filter(function(v){return v%3==0 && v%7==0;})
// console.log(numbers);

// // 1~100 출력하기
// // 단, 숫자는 띄어쓰기 한 칸으로 구분한다.(엔터가 아님)
// var numbers = new Array(100).fill();
// var result = numbers.map(function(v, i){return i+1}).join(" ");
// console.log(result);

// 1~100 합 출력
// var numbers = new Array(100).fill();
// var result=0;
// numbers.map(function(v, i){return i+1}).forEach(v => result+=v);
// console.log(result);

// // 1~100 중 2의 배수만 더하기
// var numbers = new Array(100).fill();
// var result = 0;
// numbers = numbers.map(function(v,i){return i+1}).filter(function(v){return v%2==0;}).forEach(v => result +=v);
// console.log(result);

// // 100~1 출력
// var numbers = new Array(100).fill();
// numbers= numbers.map(function(v, i){return i+1}).sort(function(a,b){return b-a}).join(", ");
// console.log(numbers);