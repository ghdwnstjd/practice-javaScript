function checkGlobalFunctions(){
    var result = eval("2*3+4*6");
    var value = parseInt("hello");

    console.log(result);
    console.log(value);

    if(isNaN(value)){
        console.log("숫자만 가능합니다.")
    }

    if(!isFinite(value)){
        console.log("숫자만 가능합니다.")
    }
}

checkGlobalFunctions();