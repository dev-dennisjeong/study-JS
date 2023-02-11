/* 
    task01.html
*/

globalThis.temp; //undefined
console.log(globalThis.temp);

function confirm() {
    const input = document.querySelector("input").value;
    const trs = document.querySelectorAll("tbody tr");
    // flag같은거임
    let check = false;

    // globalThis.temp가 undefined가 아니면, 즉 입력한 값이 아동, 청소년, 성인이라면
    // 이 if문으로 들어온다.
    // (만약 사용자가 입력한 값이 없거나 td의 innerHTML이 아니라면 무시)
    // 이 if문은 배경색과 별 달아준거를 원래대로 돌려준다.
    if(globalThis.temp) {
        // 배경색을 흰색으로 설정
        temp.style.background = "#fff";
        // 별을 없애준다.
        temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    }
    
    // tr을 검사한다(3개)
    trs.forEach(tr => {
        // tr의 첫번째 요소(아동, 청소년, 성인)를 td에 담아서 지역변수로 선언
        let td = tr.firstElementChild; 

        // td에 포함된 HTML을 그대로 가져와서 사용자가 입력한 input과 같으면 if문 실행
        if(td.innerHTML == input) {
            // check true로 바꿔준다. flag같은거임
            check = true;
            // globalThis.temp에 tr을 담아준다.
            globalThis.temp = tr;
            // tr의 배경색을 바꿔준다.
            tr.style.background = "#ef5350";
            // td의 HTML에 별을 달아준다.
            td.innerHTML = "★" + td.innerHTML;
        }
    });
    
    // 위에서 check가 true로 바뀌니까 만약 위에 안들어가면 일로 온다
    // 그러면 다시 시도하라는 경고창을 띄운다.
    if(!check) {
        alert("다시 시도해주세요.");
    }
    console.log(globalThis.temp);
}
