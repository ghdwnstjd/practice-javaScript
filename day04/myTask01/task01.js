var table = document.getElementById("tableId");
const trs = document.getElementsByTagName("tr");
const tds = document.getElementsByTagName("td");

const name = document.getElementById('target');
const check = document.getElementById('enter');

check.addEventListener("click", function(){
    if(name.value){
        if(name.value=="아동"){
            trs[1].style.backgroundColor = "red";
            tds[0].innerText = "★아동";
        } else{
            trs[1].style.backgroundColor = "white";
            tds[0].innerText = "아동";
        }

        if(name.value=="청소년"){
            trs[2].style.backgroundColor = "red";
            tds[2].innerText = "★청소년";
        }else{
            trs[2].style.backgroundColor = "white";
            tds[2].innerText = "청소년";
        }

        if(name.value=="성인"){
            trs[3].style.backgroundColor = "red";
            tds[4].innerText = "★성인";
        }else{
            trs[3].style.backgroundColor = "white";
            tds[4].innerText = "성인";
        }
        if(name.value!="아동" && name.value!="청소년"&&name.value!="성인"){
            alert("다시 시도해주세요.");
        }
    } else{
        alert("검색어를 입력해주세요.");
    }
})