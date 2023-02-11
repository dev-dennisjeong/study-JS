/* 
    author: Han
    contents: variable
*/

var data = 10;
console.log(data); //data에 들어있는 값을 출력
console.log(typeof(data)); //data에 들어있는 값의 타입 출력

data = "안녕";
console.log(typeof(data));


// hoisting(호이스팅): 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
//                     초기화 작업은 호이스팅 되지 않고 선언만 호이스팅된다.
// ※ var 키워드를 사용하지 않으면 호이스팅되지 않는다.
console.log(age); //age를 찾긴 찾음 그러나 undefined(var로 선언한 변수는 undefined로 초기화됨)
var age = 10;
console.log(age); //위에서 age에 10이라는 값을 넣어줬으므로 10이 출력됨

// var 키워드를 사용하더라도 여러 번 선언이 가능하기 때문에 계속 수정될 수 있다. 목적에 맞게 쓰지 않은 코드이다.
var data = 10;
var data = 20;
console.log(data); //data가 20으로 수정되어 출력됨