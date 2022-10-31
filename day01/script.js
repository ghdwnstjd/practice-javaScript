// script_file.html
// url.html

function change(obj){
    // console.log(obj.classList);
    // obj.src = "images/boy.png";
    // console.log(obj.classList[1]);
    // obj.classList.replace("on", "off");
    // if(obj.classList[1]=="on"){
    //     obj.src = "images/boy.png";
    //     obj.classList.replace("on", "off");
    // } else{
    //     obj.src = "images/son.png";
    //     obj.classList.replace("off", "on");
    // }
    var status = obj.classList[1];
    var src = status == "on" ? "images/boy.png" : "images/son.png";

    setAttributes(obj, src, status);
}

function setAttributes(obj, src, status){
    obj.src = src;
    status == "on" ? obj.classList.replace("on", "off") : obj.classList.replace("off", "on");
}