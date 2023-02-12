// node.js에서 파일 입출력을 처리할 때 사용하는 'fs'모듈 불러오기
let file = require('fs');

// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// file.readFile('경로', '인코딩', '콜백함수')

// love.txt 파일에 '사랑해'라는 내용을 입력하여 txt 파일 생성
// error가 발생한다면 error를 출력, 잘 됐다면 성공을 출력해준다.(콘솔창 확인용)
// file.writeFile('love.txt', '사랑해', 'utf-8', function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!")
//     }
// });

// 위에서 입력한 love.txt 파일의 내용(content)을 불러온다.
file.readFile('love.txt', 'utf-8', function(error, content) {
    if(error){
        console.log(error);
    }else{
        console.log(content);
    }
}); // 사랑해