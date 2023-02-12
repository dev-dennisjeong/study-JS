// 내림
console.log(Math.floor(3.23213));
// 올림
console.log(Math.ceil(3.23213));

// Math.floor(Math.random() * n) : 0 ~ n-1의 난수
for (let i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random() * 7));
} // 0~7 사이의 수 100개가 랜덤으로 출력
