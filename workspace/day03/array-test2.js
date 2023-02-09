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
// let oneToHunni = new Array(100);
// for (let i = 0; i < oneToHunni.length; i++) {
//         oneToHunni[i] = i + 1;
//     }
// console.log(oneToHunni);

// let result = 0;
// for (let i = 0; i < oneToHunni.length; i++) {
//     result += oneToHunni[i];
// };
// console.log(result);


// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0);

// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));
// let datas = new Array(10).fill(0).map((data, i) => i + 1);
// let datas = new Array(10).fill(0);
// let i = 0;
// datas.forEach(data => datas[i++] = i);
// datas.forEach(function(data, i){
//     datas[i] = i + 1;
// });
// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
let hangle = "공일이삼사오육칠팔구".split("");
// let input = "일공이사".split("");
// let result = input.map(data => hangle.indexOf(data));
// console.log(result);

// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "공공이사".split("");
// let result = input.map(input => hangle.indexOf(input)).join("");

// console.log(parseInt(result));


// 정수를 한글로 변경
// let input = "1024".split("");
// let result = input.map(data => hangle[data]).join("");
// console.log(result);

// console.log(result);



// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// while(input != 0){
//     result = hangle[input % 10] + result;
//     input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력

// let datas = new Array(100).fill(0).map((data, i) => i + 1);
// let result = datas.reduce((variable, data) => variable + data);
// console.log(result);



