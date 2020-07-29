function call_ajax() {
    // 입력 텍스트 상자에서 키입력이 들어왔을 때 호출
    if(event.keyCode === 13 || event.button === 0) {
        //제이쿠ㅓ리를 이용해서 AJAX처리해보아요
        //akax의 인자 : JS의 객체 {어쩌구:어쩌구,}
        // data : 서버프로그램에게 넘겨줄 데이터들
        $.ajax({
            async: true,  // 비동기 방식의 호출(default) -> false해야 동기
            url: "http://192.168.0.200:8080/bookSearch/search",
            data: {
                keyword: $("input[type=text]").val()
            },
            type: "GET", // 겟 or 포스트
            time: 3000, //타임아웃 - 시간제한
            dataType: "json", // 서버로부터 오는 데이터타입 - 알아서 객체로 컨버팅해준다함
            success: function (result) { // result : 받은 객체
                /*
                만들어야하는것
                    <tr>
                        <td>sodales</td>
                        <td>ligula</td>
                        <td>in</td>
                        <td>libero</td>
                        <td>del</td>
                    </tr>
                 */
                $("tbody").empty()
                result.forEach((item, idx)=> {
                    let tr = $("<tr></tr>").attr("id",idx) // tr
                    let imgTd = $("<td></td>")   // td(첫줄)
                    let img = $("<img />").attr("src", item.img) // 이미지
                    let titleTd = $("<td></td>").text(item.title)
                    let authorTd = $("<td></td>").text(item.author)
                    let priceTd = $("<td></td>").text(item.price)
                    let delBtn = $("<input type='button' />").attr({
                        id : idx,
                        value: "삭제!",
                        //onclick: "delLine(id)",
                    })

                    // 제이쿼리 함수로 하기

                    delBtn.on("click",function () {
                        //this : 현재 이벤트가발생된객체를 저장
                        $(this).parentElement.parentElement.remove();
                    })

                    imgTd.append(img)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(delBtn)
                    $("tbody").append(tr)
                })

            }, // 성공 후 동작
            error: function (result) {
                alert("실패!")
            }
        })
    }
}
function delLine(n) {
    selector = "tr[id="+n+"]"
    $(selector).remove()
}

