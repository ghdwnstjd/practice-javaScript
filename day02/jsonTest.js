// 프로퍼티에 ""(twoquotation)이 있으면 JSON 이고,
// 프로퍼티에 어떠한 따옴표도 없으면 JS Object이다.
// JSON.parse() : JSON 형식을 JS Object 타입으로 변환
// JSON.stringify() : JS Object 타입을 JSON형식으로 변환

user = {name: "한동석", age: 20};
userJSON = JSON.stringify(user);
console.log(userJSON);

user =JSON.parse(userJSON);
console.log(user.name);