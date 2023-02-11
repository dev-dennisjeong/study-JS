const ON = 1; //const는 상수, 수정 불가능

function testConst(){
    // ON = 2; //수정 안됨
    console.log(ON);
}

function testLet(){
    // let은 수정이 됨
    let data = 10;
    // let을 중복해서는 못씀
    // let data = 20;
    data = 20;
    console.log(data);
}

testLet();
testConst();