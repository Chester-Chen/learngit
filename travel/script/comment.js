var $title = $("#comment-title");
var $content = $("#comment-content");
var $replyBox = $("#replyBox");
var $btn = $("#btn");



 $btn.click(function () {
    var str = $content.val(); 
    var title = $title.val();
    var p = $("<p></p>").text(str);
    var h3 = $("<h3 class='layui-timeline-title'></h3>").text(title);
    var div = $("<div class='layui-timeline-content layui-text'></div>").append(h3).append(p);
    var li = $("<li class='layui-timeline-item'><i class='layui-icon layui-timeline-axis'>&#xe63f;</i></li>").append(div);
    $replyBox.after(li);
 });






// $(function () {
//     // 标题
//     $("#btn").click(function () {
    
//         $("#comment-title").each(function(){
//             var _this = $(this);
//             if (_this) {
//                  newObj = $(
//             "<li class='layui-timeline-item'><i class='layui-icon layui-timeline-axis'>&#xe63f;</i><div class='layui-timeline-content layui-text'>" + _this.val() + "<p>"+str+"</p></div></li>");
//             $("#replyBox").after(newObj);
//             }
//             // alert(_this.val());
//         })
       
//     })
   
// })
