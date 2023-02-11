// script-file.html
// url.html

function changeImage(object){
    // object에 있는 1번째 리스트의 값을 지역변수 status에 담는다.
    let status = object.classList[0];

    // status가 on이면 실행
    if(status == "on"){
        // on을 off로 바꾼다.
        object.classList.replace("on", "off");
        // 이미지를 icon3으로 설정
        object.src = "image/icon3.png";
        // 리턴해준다.(아래 실행문을 실행시키지 않기 위함)
        return;
    }
    // if문으로 들어가지 않았다면 status는 off이므로 off를 on으로 바꿔준다
    object.classList.replace("off", "on");
    // 이미지는 icon4로 설정
    object.src = "image/icon4.png";

}