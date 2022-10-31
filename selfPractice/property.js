/* 
프로토타입을 이용하여 고객 객체를 생성
프로퍼티는 이름, 나이, 성별, 아이디, 비밀번호, 장바구니에 추가하기 함수
고객은 총 5명의 고객 객체를 배열을 이용해 저장 후 일괄 출력 
*/


function customer(name, age, gender, id, password){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
    this.password = password;
    this.itemBasket=[];
    this.addItem = function(item){
        this.itemBasket.push(item);
    }
}

var customerAr = [new customer('김인영', 11, '여', 'gangsan01', '0000'),
new customer('허강산', 13, '남', 'gangsan02', '0001'),
new customer('최서현', 15, '여', 'gangsan03', '0010'),
new customer('이호영', 17, '여', 'gangsan04', '0100'),
new customer('손호현', 19, '여', 'gangsan05', '1000')
];



customerAr[0].addItem('성형수술 상품권');
customerAr[3].addItem('마우스');
customerAr[4].addItem('키보드');
customerAr[4].addItem('핸드폰');


for(let i = 0; i < customerAr.length ; i++){
    console.log(customerAr[i]);
}
