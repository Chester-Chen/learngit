        // get: http://localhost:3000/api/getTest
        // POST: http://localhost:3000/api/postTest
    //     function getAjax () {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open("get", "http://localhost:3000/api/getTest?name=chenzhiwen&age=18", true);
    //         xhr.send();
    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState == 4 && xhr.status == 200) {
    //                 var response = JSON.parse(xhr.responseText);
    //                 var printf = document.getElementById("cen");
    //                 printf.innerHTML = response.data;
    //                 console.log(response);

    //             }    
    //             else {
    //                 console.log("请求不成功");
    //             }
    //         }
    //     }
    //  getAjax();

    function postAjax () {
        var xhr = new XMLHttpRequest();
        xhr.open("post", "http://localhost:3000/api/postTest", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("name=Chester&age=18");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                var printf = document.getElementById("cen");
                printf.innerHTML = response.data;
            }    
            else {
                console.log("请求不成功");
            }
        }
    }
    postAjax();