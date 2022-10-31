// var number = "1024";
// var koreanNumber = "공일이삼사오육칠팔구".split("");
// for(i=0; i<number.length;i++){
//     console.log(koreanNumber[number.charAt(i)]);
// }


const name = document.getElementById('target');
const check = document.getElementById('change');
const p = document.querySelector("p#result");
console.log(check);
console.log(name);


check.addEventListener("click", function(){
    if(name.value){
        var hangle = "공일이삼사오육칠팔구".split("");
        var input = name.value.split("");
        var result="";
        var count = 0;
        console.log(input);
        input.forEach(v => {
            if(v=="."){
                result += "점";
                console.log(result)
                count++;
            }
            else if((v >=0 && v <10)){
                result +=hangle[v];
            } else{
                p.innerHTML = "숫자만 입력해주세요";
            }
        });
        if(p.innerHTML != "숫자만 입력해주세요"){
            p.innerHTML = result;
        }
        if(count>1){
            p.innerHTML = "숫자만 입력해주세요";
        }

    } else{
        p.innerHTML = "입력창에 입력을 해주세요";
    }
});

function enterKey(){
        if(name.value){
            var hangle = "공일이삼사오육칠팔구".split("");
            var input = name.value.split("");
            var result="";
            var count = 0;
            console.log(input);
            input.forEach(v => {
                if(v=="."){
                    result += "점";
                    console.log(result)
                    count++;
                }
                else if((v >=0 && v <10)){
                    result +=hangle[v];
                } else{
                    p.innerHTML = "숫자만 입력해주세요";
                }
            });
            if(p.innerHTML != "숫자만 입력해주세요"){
                p.innerHTML = result;
            }
            if(count>1){
                p.innerHTML = "숫자만 입력해주세요";
            }
    
        } else{
            p.innerHTML = "입력창에 입력을 해주세요";
        }
}