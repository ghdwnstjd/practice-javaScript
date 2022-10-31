HTMLCollection.prototype.forEach = Array.prototype.forEach;
const input = document.querySelector("input[type='button']");
const result = document.querySelector("#result p");


input.addEventListener("click", checkValue);

function enterkey(){
    console.log("여기");
    checkValue();
    alert("뭐야2");
}

function checkValue(){
    console.log("여기");
    console.log("여기");
    console.log("여기");
    console.log("여기");
    const num = document.getElementById("number").value;
    console.log("여기2");
    alert("뭐야1");
    if(!isNaN(num)){
        changeHangle(num);
    } else{
        result.innerHTML = "숫자를 입력해주세요.";
    }
}

function changeHangle(num){
    console.log(num);
    var hangle = "영일이삼사오육칠팔구".split("");
    var listNum = new Array(num.split(""));
    var changed = "";
    console.log(listNum[0][0]);
    if(listNum[0][0] == '.') {
        listNum[0].unshift(0);
    }

    listNum[0].forEach(v => {
        if(v == '.'){
            changed += "점";
        } else {
            changed += hangle[v];
        }
    });
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    console.log("ksfjklsnvm,sn bkshgahfkd");
    result.innerHTML = changed;
    console.log(result.innerHTML);
}