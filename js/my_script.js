//js코드작성
/*
JS : 웹 클라이언트에서 실행되는 언어
    요즘은 서버언어로도 사용되기도 함

*/
// 변수선언
var myVal;
let myLet;

// 정-실수 구분 x - number type
var tmp = 100;

// 문자-문자열 구분 x - string type
var tmp1 = "Hello";

// Boolean
var tmp2 = true;

// array
var tmp3 = [1,2,3,4];

// 객체표현
var tmp4 = {
    name : "이름",
    age : 25,
}
alert(tmp4.name);
console.log(tmp4.name);

// 함수에 대해서 알아보자
// 1. 선언적 함수 - 함수 이름 존재
function myFunc() {
    alert(함수1실행);
}
// 2. 익명함수 - 일급함수
let my_mult = function(a,b) {
    return a*b;
}
// arrow func
let my_add = (a,b) => {
    return a+b;
}































