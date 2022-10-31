var hong={name:'홍길동',age:20,level:1};
var lee={name:'이순신',age:40,level:2};
var jang={name:'장보고',age:19,level:3};
var train=new Array(hong,lee,jang);


console.log(train);
console.log(JSON.stringify(train));
var test = JSON.stringify(train);
