// 1. 제어문
// 2. 콜백함수
// 3, arrow expression

// 1~10까지 Array 객체에 담은 후 짝수만 출력
// let datas = new Array(10);

// for (let i = 0; i < datas.length; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);

// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// console.log(datas.join(","));

// datas.forEach(function(data, i, datas){
//     datas[i] = data;
// });

// console.log(datas);



// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// "공일이삼사오육칠팔구".split("").forEach(function(data, i, array){
//     hangle[i] = data;
// });
// console.log(hangle);
// hangle.map(function(data){return hangle.indexOf(data)}).forEach(data => console.log(parseInt(data)));

// 정수를 한글로 변경
// let int = "0123456789";
// let int = new Array();
// "0123456789".split("").forEach(function(data, i, array){
//     int[i] = data;
// });
// console.log(int);
// int.map(function(data){return hangle.indexOf()}).forEach(data => console.log(data));
// hangle.map(data => data.charAt(0));

// let result = "";
// for (let i = 0; i < hangle.length; i++) {
//     result += hangle.charAt(i);
// }
// console.log(result);



// 1~100까지 합 출력
// 1~100까지 담기
// let oneToHunni = new Array(100).fill(0);
// for (let i = 0; i < oneToHunni.length; i++) {
//         oneToHunni[i] = i + 1;
//     }
// console.log(oneToHunni);

// 1~100까지 더하기
// let result = 0;
// for (let i = 0; i < oneToHunni.length; i++) {
//     result += oneToHunni[i];
// };
// console.log(result);


// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력

// - 배열 만들고 fill(0)으로 초기화해주는 것이 국룰
// let datas = new Array(10).fill(0); 

// 1~10을 datas 배열에 담아줌
// let datas = new Array(10).fill(0).map((data, i) => i + 1);

// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));
// filter로 datas에 들어있는 값 중 2로 나눴을 때 0인 값(짝수)만 data에 담아서 출력

// let i = 0;
// datas.forEach(data => datas[i++] = i);
// datas.forEach(function(data, i){
//     datas[i] = i + 1;
// });
// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구".split(""); //split("")을 통해 문자열 -> 배열
// let input = "일공이사".split("");
// let result = input.map(data => hangle.indexOf(data)); // result에 input의 값을 hangle의 인덱스번호로 바꿔줌
// 일 -> 한글의 1번째 인덱스인 1, ...

// console.log(result); //출력 [1, 0, 2, 4] - 배열

// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "공공이사".split("");
// let result = input.map(input => hangle.indexOf(input)).join(""); //join("")을 통해 하나로 합쳐줌

// console.log(result); // 0024 - 문자열
// console.log(parseInt(result)); //결과가 문자열이므로 숫자 타입으로 변환 - 24(앞에 00은 사라짐)


// 정수를 한글로 변경
// let input = "1024".split("");
// let result = input.map(data => hangle[data]).join("");
// input의 값을 hangle의 인덱스 번호로 사용하여 값을 가져온다.

// console.log(result);

// console.log(result);



// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// input을 while문으로 검사해서 한글로 변경
// while(input != 0){ // input이 0이 아니면 while문 종료
//     result = hangle[input % 10] + result; //input을 10으로 나눈 나머지를 result에 담는다.
//     input = parseInt(input / 10); //input이 10이면 1이 되므로 while문 종료
// }

// console.log(result);

// 1~100까지 합 출력

// 1~100까지 담는다
// let datas = new Array(100).fill(0).map((data, i) => i + 1);
// reduce() -> 누적해서 더해주는 메소드
// let result = datas.reduce((variable, data) => variable + data);
                            //(누적값, 현재값) => 현재 값을 누적 값에 계속 더해준다.

// console.log(result); //5050



