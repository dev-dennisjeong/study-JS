// false로 취급되는 값: "", 0, null, undefined
// testFalse라는 함수를 선언
function testFalse(){
    // 지역변수로 data와 result 선언
    let data;
    let result;
    // data값이 true면 result에 TRUE를 담아준다.
    if(data){
        result = "TRUE";
    // false면 FALSE
    }else{
        result = "FALSE";
        
    }
    // 출력으로 확인 --> FALSE뜸(undefined이기 때문에)
    console.log(result);
}

// compareType 함수 선언
function compareType(){
    // ddta1은 문자열 타입, data2는 숫자 타입으로 같은 값을 넣어줌
    let data1 = "1", data2 = 1;

    console.log(data1 == data2);    //값만 같으면 true, 1이라는 값은 같아서 true
    console.log(data1 === data2);   //타입까지 같아야 true, 값은 같지만 타입이 달라서 false
}

// 함수 사용
testFalse();
compareType();