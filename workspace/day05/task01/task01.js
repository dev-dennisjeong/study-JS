/* 
    task01.html
*/


const check = document.querySelector("button.check");
const input = document.querySelector("input[type=text]");
console.log(input);
const tr = document.querySelectorAll("tr.col");
const td = document.querySelectorAll("td.kind");

check.addEventListener("click", function(){
    if(input.value == "아동"){
        tr[0].style.backgroundColor = '#ef5350';
        tr[1].style.backgroundColor = 'white';
        tr[2].style.backgroundColor = 'white';
    }else if(input.value == "청소년"){
        tr[1].style.backgroundColor = '#ef5350';
        tr[0].style.backgroundColor = 'white';
        tr[2].style.backgroundColor = 'white';
    }else if(input.value == "성인"){
        tr[2].style.backgroundColor = '#ef5350';
        tr[0].style.backgroundColor = 'white';
        tr[1].style.backgroundColor = 'white';
    } else{
        alert("다시 시도해주세요");
        for (let i = 0; i < tr.length; i++) {
           tr[i].style.backgroundColor = 'white';
        }
    }
});



