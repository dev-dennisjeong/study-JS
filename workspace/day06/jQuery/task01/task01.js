/* 
    day06/task01.html
*/

// globalThis.temp; //undefined
// console.log(globalThis.temp);
const $input = $("input");
const $trs = $("tbody tr");

function confirm() {
    let check = false;
    globalThis.$temp;
    
    if(globalThis.$temp) {
        // 배경색을 흰색으로 설정
        $temp.css("background-color", "#fff");
        // 별을 없애준다.
        $temp.children().first().text($temp.children().first().text().replace("★", ""));
    }

       $trs.each((i, tr) => {
        let $td = $(tr).children().eq(0);
        if($td.text() == $input.val()){
            check = true;
            globalThis.$temp = $(tr);
            $(tr).css('background-color', '#ef5350');
            $td.text("★" + $td.text());
        }
    });

    
    // 위에서 check가 true로 바뀌니까 만약 위에 안들어가면 일로 온다
    // 그러면 다시 시도하라는 경고창을 띄운다.
    if(!check) {
        alert("다시 시도해주세요.");
    }
    console.log(globalThis.$temp);
}


/* 
    day06/jQuery/task01.html
*/

// globalThis.$temp;

// function confirm() {
//     const $input = $("input").val()
//     const $trs = $("tbody tr");
//     let check = false;

//     if(globalThis.$temp) {
//         globalThis.$temp.css('background', "#fff");
//         globalThis.$temp.children().first().text($temp.children().first().text().replace("★", ""));
//     }

//     $trs.each((i, tr) => {
//         let $tr = $(tr);
//         let $td = $tr.children().first();
//         let text = $td.text().trim();
//         console.log(text);
//         if(text == $input) {
//             check = true;
//             globalThis.$temp = $tr;
//             $tr.css('background', "#ef5350");
//             $td.text("★" + text);
//         }
//     })

//     if(!check) {
//         alert("다시 시도해주세요.");
//     }
// }