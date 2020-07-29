
function call_ajax(data){
    $.ajax({
        async : true,
        url : "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        data: {
            key : "20d31ec1ae32de6a10fc2ffe9c626fc3",
            targetDt: data
        },
        type : 'GET',
        time : 3000,
        dataType : 'json',
        success : function (result) {
            $("tbody").empty()
            console.log(result)
            result.boxOfficeResult.dailyBoxOfficeList.forEach((item, idx)=>{
                let tr = $("<tr></tr>").attr("id",item.movieCd)
                let imgtd = $("<td></td>") //이미지찾아야됨...이건 나중에 구현
                let movieIMG = getImage(item.movieNm)
                let img = $("<img>").attr({
                    id : item.movieNm+"/00/00/00",
                    src : movieIMG,
                    width : "150px",
                })
                let movNmtd = $("<td></td>").text(item.movieNm)
                let rank = $("<td></td>").text((idx+1)+"위")
                let accSell = $("<td></td>").text(item.salesAcc)
                let accView = $("<td></td>").text(item.audiAcc)
                let infoBtntd = $("<td></td>")
                let infoBtn = $("<input type='button' />").attr({
                    id : item.movieCd,
                    value : "정보확인",
                    onclick : "findInfo(this.id)"
                })
                imgtd.append(img)
                infoBtntd.append(infoBtn)
                tr.append(rank).css("width","10pt")
                tr.append(imgtd)
                tr.append(movNmtd)
                tr.append(accSell)
                tr.append(accView)
                tr.append(infoBtntd)

                $("tbody").append(tr)

                nowImg = document.getElementById(item.movieNm+"/00/00/00")
                nowImg.addEventListener('contextmenu',(e)=>{e.preventDefault()})
                nowImg.addEventListener('mousedown',img_Search)
            })
        },
        error : function () {
            alert("오류!")
        },
    })

}
function focusDate(){
    $("input[type=text]").val('')
}
function focusText(){
    $("input[type=date]").val('')
}

function call(e) {
    if(e === "d"){
        data = ($("input[type=date]").val()).replace(/-/g,'')
        call_ajax(data)
    }
    if(e === "k"){
        if(event.keyCode === 13)
            call_ajax($("input[type=text]").val())
    }
    if(e === "b"){
        if(event.button === 0)
        {
            if($("input[type=text]").val() === ''){
                data = ($("input[type=date]").val()).replace(/-/g,'')
                call_ajax(data)
            }
            else
                call_ajax($("input[type=text]").val())
        }
    }
}

function findInfo(code) {
    $.ajax({
        async: true,
        url : "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
        data : {
            key : "20d31ec1ae32de6a10fc2ffe9c626fc3",
            movieCd : code
        },
        type : 'GET',
        time : 3000,
        dataType : 'json',
        success : function (result) {
            let selector = "#"+code.toString()+" img"
            $("#infoIMG").attr({
                src : $(selector).attr("src"),
            }).css("width","80%")
            console.log($(selector).attr("src"))
            $("#movieNm").text("영화제목: "+result.movieInfoResult.movieInfo.movieNm)
            $("#prdtYear").text("제작년도: "+result.movieInfoResult.movieInfo.prdtYear)

            let genre = ''
            result.movieInfoResult.movieInfo.genres.forEach((item)=>{
                genre += item.genreNm
                genre += ', '
            })

            genre = genre.slice(0,-2)
            $("#genreNm").text("장르: "+genre)

            let directNm = ''
            result.movieInfoResult.movieInfo.directors.forEach((item)=>{
                directNm += item.peopleNm
                directNm += ', '
            })
            directNm = directNm.slice(0,-2)
            $("#directNm").text("감독: "+directNm)

            let actors = ''
            result.movieInfoResult.movieInfo.actors.forEach((item)=>{
                actors += item.peopleNm
                actors += ', '
            })
            actors = actors.slice(0,-2)
            $("#actorNm").text("배우: "+actors)
        }
    })
}

function getImage(title) {
    var rst;
    $.ajax({
        async : false,
        url : "https://dapi.kakao.com/v2/search/image",
        headers : { 'Authorization' : 'KakaoAK 5f5db4cb77b1785cfd1329a9fd062637'},
        type: 'GET',
        data : { 'query' : title,
            'size' : 1
        },
        success : (result) => {
            rst = result.documents[0].image_url
        }
    })
    return rst
}

function img_Search(e) {
    console.log(e)
    e.stopPropagation();
    e.preventDefault();
    obj = e.target
    let num
    let search_word = obj.id.split('/')[0]
    console.log(data)
    if(e.button === 0){
        num = Number(obj.id.split('/')[1]) + 1
        obj.id = search_word+"/"+num.toString()+'/'+obj.id.split('/')[2]+'/'+obj.id.split('/')[3]
        search_word += " 영화 포스터"
    }
    else if(e.button === 2){
        num = Number(obj.id.split('/')[2]) + 1
        obj.id = search_word+"/"+obj.id.split('/')[1]+'/'+num.toString()+'/'+obj.id.split('/')[3]
        search_word += " 포스터"
    }
    else {
        num = Number(obj.id.split('/')[3]) + 1
        obj.id = search_word+"/"+obj.id.split('/')[1]+'/'+obj.id.split('/')[2]+'/'+num.toString()
    }

    console.log(search_word)
    $.ajax({
        async : false,
        url : "https://dapi.kakao.com/v2/search/image",
        headers : { 'Authorization' : 'KakaoAK 5f5db4cb77b1785cfd1329a9fd062637'},
        type: 'GET',
        data : { 'query' : search_word,
            size : 30
        },
        success : (result) => {
            obj.src = result.documents[num].image_url
        }
    })
}
