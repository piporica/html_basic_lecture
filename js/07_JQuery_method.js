$(document).ready(()=>{
    // 브라우저에 내용이 완전히 출력되었을때 그 시점에 실행
    $("ul > li").on("mouseover", function () { // arrow 여기 안된대;
        $(this).addClass("myStyle")
    })
    $("ul > li").on("mouseleave", function () {
        $(this).removeClass("myStyle")
    })
})

//그냥 function 인자에 this를 넣고 호출하면 ▲안해도됨
/*
function  set_active(obj){
    // 이벤트 소스 : 이벤트가 발생된 element
    this.classList.add( "myStyle" );
}
*/
function insert_text(){
    $("#myDiv").text("야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ")
    $("#myDiv").text("<h1>야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ</h1>")  // 그냥찍힘
    $("#myDiv").html("<h1>야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ</h1>")  // 태그적용됨
}

function delDiv() {
    $("#delDiv").remove() // 자신을 포함해서 후손들도 삭제
    $("#delDiv").empty();   // 후손만삭제
}

function addList() {
    //없는 태그를 만드려면 어떻게 해야 하나요?
    console.log("왜")
    var newList = $("<li></li>").text("새이름").attr("class","myStyle")  // 제이쿼리 구문을 이렇게 쓰면 이 태그를 만듬
    // 만들었으니 가져다 붙이기
    $("ul").append(newList) // 1. append 자식으로 붙이  고, 맨 마지막 자식으로 붙임
    $("ul").prepend(newList) // 2. prepend 자식으로 붙이고, 맨 첫 자식으로 붙임
    $("ul>li:nth-child(3)").after(newList) // 3. after 동기로 붙이고, 다음에 붙임
    $("ul > li:last").before(newList) // 4. before 동기로 붙이고, 전에 붙임
}