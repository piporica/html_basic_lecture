
function my_func(){
    // jQuery => selector부터~
    // $("selector")
    // 1. 전체선택자 (univesal selector) -> $('*')
    $('*').css("color","red")

    // 2. 태그선택자 (tag~ ) $("li")
    $('span').remove()

    // 3. 아이디선택자 (id selector) -> #~
    $("#ic").text("제주") // 인
    $("#clickBtn").val('꺄') // 버튼

    // 4. 클래스선택자 -> ./~
    $(".region").css("background-color", "yellow")

    // 5. 구조선택자
    // -1. 자식선택자 >
    $("ol > *").css("color", "pink") //$("ol > li")
    // -2. 후손선택자 ' '
    $("div li").css("font-size", "30px")
    // -3. 동위선택자 :
    //    1) 선택된 본인 바로 다음의 sibling 을 찾음 +
    $("#ic + .isDel").remove()
    //    2) 본인 다음의 모든 sibling을 찾음 (본인제외!) ~
    $("#name1 ~").css("font-style","italic")

    // 6. 속성선택자 []
    $("[id]").css("font-weight","bolder")
    $("[id = ic]").css("font-weight","bold")


}