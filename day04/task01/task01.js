let tempTr;
let tempText;

function confirm(){
    // input text 안에 작성한 텍스트값
    const input = document.getElementById("input").value;

    // 모든 tr태그를 다 가져온다.
    const trs = document.querySelectorAll("tbody tr");
    let check = false;

    // 임시 저장 장소, 만약 한 번이라도 체크한 흔적이 있다면 이 곳에 들어와 초기화해준다.
    if(tempTr){
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerHTML = tempText;
    }

    // tbody의 tr태그들을 하나씩 비교
    trs.forEach(tr => {
        // 왼쪽 텍스트를 비교해야하므로 td에는 tr의 첫 번째 자식요소를 가져온다.
        let td = tr.firstElementChild;
        // 작성한 값과 td의 텍스트값이 같다면
        if(td.innerHTML == input) {
            // 임시 저장공간에 각 요소들을 저장해준다.
            tempTr = tr;
            tempText = td.innerHTML;

            // 선택된 사항 배경색 및 텍스트 바꾸기
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + input;
            check = true;
        }
    });

    if(!check){
        alert("다시 시도해주세요.");
    }

}