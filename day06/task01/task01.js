let $tempTr;
let tempText;

function confirm(){
    const input = $("#input").val();
    const $trs = $("tbody tr");
    let check = false;

    if($tempTr){
        $tempTr.css("background", "#fff");
        $tempTr.children().first().text(tempText);
    }

    $trs.each(function(i, tr){
        let $td = $(tr).children().first();
            if($td.text() == input) {
                $tempTr = $(tr);
                tempText = $td.text();
    
                $(tr).css('background', "#ef5350");
                $td.text("★" + input);
                check = true;
            }
    })

    if(!check){
        alert("다시 시도해주세요.");
    }

}