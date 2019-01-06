var del = (function(){
	//删除
	function delet(){
		var pic = $(".pic");
		var box = $(".box");
		pic.click(function(){
			box.css("display","none");
		})
	}
	//二维码
	function chat(){
		var sm = $(".red-sm");
		var box = $(".box");
		var erw = $(".erw");
		sm.click(function(){
			sm.addClass("colorRed");
			box.css("display","none");
			erw.css("display","block")
		})
	}
	//登录
	function deng(){
		var box1 = $("#nums");
	    var box2 = $("#mm");
	    var oSpan = $(".mesg");
	    var login = $("#ok");
	
	    login.click(function(){
	        var iphone = box1.val();
	        var password = box2.val();
	        var xhr = new XMLHttpRequest;
	        var data = "&iphone=" + iphone + "&password=" + password;
	        var url = "http://127.0.0.1/big/wangyi/regs/login.php?id="+ Math.random();
	        xhr.open("get",url + data);
	        xhr.send();
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState == 4 && xhr.status == 200){
	                var res = xhr.responseText;
	                if(res == 0){
	                    oSpan.html("用户名不正确");
	                }else if(res == 1){
	                    oSpan.html("登录成功");
	                }else if(res == 2){
	                    oSpan.html("密码错误") ;
	                }
	            }
	        }
	    })
	}
	return {
		init : function(){
			delet();
			chat();
			deng();
		}
	}
})()
del.init();