/* task02.html */

const input = document.querySelector("input#input");
const check = document.querySelector("input#input-button")
const result = document.querySelector("div#result");
const hangle = "공일이삼사오육칠팔구";
const isNumeric = n => !isNaN(n); //숫자인지 문자인지 검사
// isFinite

check.addEventListener("click", function(){
    if(isNumeric(input.value)){
        result.innerHTML = input.value.split("").map((data, i) => {
            // 첫번째 0 이면 영, 아니면 공을 리턴 ㅋㅋㅋ
        if(data == '0'){
            return i == 0 ? '영' : '공';
        }
        return data == '.' ? '점' : hangle[data];
        }).join("");
    }else{
        result.innerHTML = "숫자만 입력해주세요.";
    }
});

