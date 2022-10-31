
// change 버튼을 누를 경우 getResult 함수가 실행된다.
$("#change").on('click', getResult);

const $div = $("#round");
const $p = $("#result");
let result = "";
let check = false;


// changeToHangle의 매개변수 number가 getResult함수의 매개변수값이 된다.
function changeToHangle(number){
    let hangle = "공일이삼사오육칠팔구";
    let data = "";
    result="";

    // 만약 숫자가 아닌 것이 들어왔다면
    if(!numberCheck(number)){
        return;
    }
    
    // .234 이렇게만 기재해도 1이하의 실수로 인식한다.
    pointNumber(number);

    // 숫자가 마이너스 일 때
    minusNumber(number);

    // 일단 3으로 왼쪽 위 숫자를 변경하고, 만약 소수점이 있다면 나중에 2로 변경한다.
    $div.text("3");
    
    // 매개변수의 숫자 길이만큼 반복문을 돌린다.
    // 텍스트로 인식하기 때문에 이렇게 기재가 가능함
    for(let i in number){
        // data에 각 자리수의 숫자를 한글로
        data = hangle[number.charAt(i)];

        // check가 true이고(맨 앞자리가 . 일때), data에 들어온 값이 '공'일 때
        if(check && data == '공'){
            // 플래그를 false로 바꾸고 다음 반복으로 넘어간다.
            check = false;
            continue;
        }

        if(number.charAt(i) == '-'){
            continue;
        }

        // 만약 data에 값이 안들어왔다면(이미 위에서 숫자가 맞는지를 확인했기 때문에, 해당 자리수가 숫자가 아니라면 . 밖에 올 수 있는 것이 없다.)
        if(!data && number.charAt(i) != '-'){
            result += "점";
            $div.text("2");
            continue;
        }
        result += data;
    }
    $p.text(result);
}


function getResult(){
    // input태그의 이름이 input인 것의 텍스트를 input 변수로 담는다.
    var input = $("input[name='input']").val();
    input = input.startsWith('.') ? '0' + input : input;
    // 해당 변수를 changeToHangle 메소드의 매개변수로 담아 함수를 실행한다.
    changeToHangle(input);
}


// ================ 각 검사를 함수로 구현하여 코드 정리 ================

// 만약 숫자가 아닌 것이 들어왔다면
function numberCheck(number){
    if(isNaN(number) || number.startsWith("-.")){
        // 숫자만 입력하라는 문자 출력
        $p.text("숫자만 입력해주세요.");
        // 왼쪽 위 숫자 4로 변경
        $div.text("4");
        // 더이상 아래 코드를 실행할 필요 없으므로 return
        return false;
    }
    return true;
}

// .234 이렇게만 기재해도 1이하의 실수로 인식한다.
function pointNumber(number){
    if(number < 1){
        // result 값 맨 앞에 "영"을 추가한다.
        result = "영";
        // 플래그를 true로 수정한다.
        check = true;
    }
}

// 마이너스
function minusNumber(number){
    let zeroCheck = parseInt(number)==0;
    if(number <0){
        result = "마이너스 ";
        check=false;
        if(zeroCheck){
            result +="영";
            check=true;
    }
}

}