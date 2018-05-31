/* 获取快递公司 */
var cmy = $("#company");

/* 获取单号*/
var postid = $("#postid");

/* 查询*/
var cx = $("#cx");

/* id show */
var $show = $("#show");

cx.click(function () {
    //     // 获取公司数据 获取单号数据
    var company = cmy.val();
    var postnum = postid.val();
    var url = "http://v.juhe.cn/exp/index?com=" + company + "&no=" + postnum + "&dtype=&key=1d0d8be9b9cc781846920e4274779f63";
    $.ajax({
        type: "get",
        url: url,
        data: {com: company, no: postnum},
        dataType: "jsonp",
        success: function (data) {
            // 获取接口数据
            var info = data.result.list;

            // 遍历数据
            for(var i = 0; i < info.length; i++) {
                //获取每笔时间
                var time = info[i].datetime;           

                // 获取每笔快递信息
                var msg = info[i].remark;
                
                // 整合信息追加到页面
                var content = time + ":" + msg;
                // console.log(content);
                var $p = $("<p></p>").append(content);
                var $li = $("<li></li>").append($p);
                $show.append($li);
                
            }  
        }
    });


});




/* 给查询按钮添加事件 */
// cx.click (function () {
//     // 获取公司数据 获取单号数据
//     var company = cmy.val();
//     var postnum = postid.val();

//     // ajax get the data
//     var xhr = new XMLHttpRequest();
//     xhr.open("post", "http://v.juhe.cn/exp/index", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send("com" + "=" + company + "&no" + "=" + postnum);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 || xhr.readyState == 200) {
//             // var response = JSON.parse(xhr.responseText);
//             var response = xhr.responseText;
//             console.log(response);
//             var printf = $("#show");
//             printf.append(response.result);
//         } else {
//             console.log("查询失败");
//         }
//     }
// });

/* get请求 */
// cx.click (function () {
//     // 获取公司数据 获取单号数据
//     var company = cmy.val();
//     var postnum = postid.val();
//     //
//     var url = "http://v.juhe.cn/exp/index?com=" + company + "&no=" + postnum + "&dtype=&key=1d0d8be9b9cc781846920e4274779f63";
//     // 
//     var xhr = new XMLHttpRequest();
//     xhr.open("get", url, true);
//     xhr.send(null);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var response = xhr.responseText;
//             var info = response.result.list;
//             console.log(info);
//             var printf = $("#show");
//             printf.innerHTML = response;
//         } else {
//             // console.log("查询失败");    
//         }
//     }
// });