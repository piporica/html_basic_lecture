
function print_text(){
    // 버튼을 눌렀을 때 실행할 코드를 기술
    console.log($("#apple").text()) // 인자가 없으면 글자 가져오기, 있으면 글자 바꾸기.
    console.log($("#ananas").text())
    console.log($("ul>.myList").text())
    console.log($("ul [class]").text())

    console.log($("input[type=text]").val())
    console.log($("ol >li.myList:first").text()) // 선택한 것 중 첫번째
    console.log($("ol >li.myList:first + li ").text())  // 선택한 것 중 첫번째의 다음 동기인 리스트
    console.log($("ol >li.myList:nth-child(2)").text())
    console.log($("ol >li.myList:last").text())

    $("input[type=text]").attr("size", 10)

}

function change_color() {
    let fruit = $("select > option:selected").text()
    let my_list = $("ul > li")
    my_list.each((idx, item)=> {
        if ($(item).text() === fruit) {
            $(item).css("color", "red")
        }
        else {
            $(item).css("color", "black")
        }
    })
}