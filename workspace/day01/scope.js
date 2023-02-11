// var x = 20;      // 지역변수와 이름이 겹치지 않는 전역 변수
// global.x = 20;   // Node.js 에서 최상위 객체(전역 객체)
// window.x = 20;   // 브라우저에서의 최상위 객체(전역 객체)
// globalThis.x = 20;  // global과 window 객체를 상황에 맞게 사용해주는 전역 객체

function f(){
    var x = 10;

    console.log(x); //10이 출력됨

    console.log(this.x); // undefined가 뜸

    console.log(global.x);
    // node에서는 값이 잘나옴 그러나 브라우저에서는 "global is not defined" 에러

    console.log(window.x);
    // 전역변수로 window.x값 주면 브라우저 콘솔에선 값 잘나옴
    // node에서는 "window is not defined" 에러

    console.log(globalThis.x);
    // node.js와 브라우저의 최상위 객체를 맞추기 위해 globalThis 객체를 사용한다.

    // var는 전역 또는 함수의 범위
    // let은 블록 범위(const도 마찬가지)
    // let은 수정 가능, const는 수정 불가능(java의 final)
    for(var i=0; i<10; i++){ //var는 f함수의 전역변수이므로 for문 밖에서 쓸 수 있음
    // for(let i=0; i<10; i++){  //let은 for문 밖에서 못씀
    
    }
    // console.log(i);
}

f();