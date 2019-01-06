
var register = (function(){
    //选择国家
    function country(){
        var btn = $(".select-ico");
        var oUl = $(".dpmenu-EMUI5-down");
        var oList = $(".dpmenu-EMUI5-down li");
        var text = $(".select-text");
        btn.click(function(){
            oUl.css("display",'block');
        })
        oUl.mouseleave(function(){
            oUl.css("display",'none');
        })
        oList.mouseenter(function(){
            $(this).css("background","#61e7f7");
        })
        oList.mouseleave(function(){
            $(this).css("background","#fff");
        })
        oList.click(function(){
            text.html($(this).html());

        })
    }
    //电话号码
    function phone(){
        var reg = /^1(3|4|5|7|8)\d{9}$/;//电话号码的正则
        var lb = $("#phoneInputDiv-box .lb_opacity_Class");
        var box = $("#phoneInputDiv-box");
        var inpt = $("#username");

        var mind = $("#msg_phone");
        num = null;
        inpt.keyup(function(){
            num = $("#username").val();
            lb.css("display","none");
            if(num.length == 0){
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
        })
        inpt.blur(function(){
            num = $("#username").val();
            if(!reg.test(num)){
                mind.css({"color":"red","font-size":12});
                mind.html("手机号不正确");
                box.css("border-color","red");
            }else if(num.length == 0){
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }else{
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
        })
    }
    //验证码
    function random(){
        var lb = $("#randomCodeDiv .lb_opacity_Class");
        var box = $("#randomCodeDiv");
        var inpt = $("#randomCode");
        var mind = $("#randomCode_msg");
        inpt.keyup(function(){
            var nums = inpt.val();
            lb.css("display","none");
            if(nums.length == 0){
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
        })
        inpt.blur(function(){
            var nums = inpt.val();
            if(nums.length <=3){
                mind.css({"color":"red","font-size":12});
                mind.html("验证码错误");
                console.log(mind)
                box.css("border-color","red");
            }else{
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
        })
    }

    //短信验证
    function message(){
        var reg = /^\d{4,8}$/;
        var lb = $("#errRandomCode-box .lb_opacity_Class");
        var box = $("#errRandomCode-box");
        var inpt = $("#authCode");

        //console.log(num)
        var mind = $("#msg_phoneRandomCode");
        inpt.keyup(function(){
            var nums = $("#authCode").val();
            lb.css("display","none");
            if(nums.length == 0){
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
        })
        inpt.blur(function(){
            var nums = $("#authCode").val();
            if(!reg.test(nums)){
                mind.css({"color":"red","font-size":12});
                mind.html("短信验证码不正确");
                box.css("border-color","red");
            }else if(nums.length == 0){
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }else{
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
        })
    }

    //密码
    function secert(){
        var nums = /^\d+$/;//纯数字
        var char_ = /^[a-z]+$/i;//纯字母
        var other = /^[!@#$%^&*]+$/;//纯特殊字符

        var _num = /\d+/;//包含数字
        var _char = /[a-z]+/i;//包含字母
        var _other = /[!@#$%^&*]+/  //包含特殊字符

        var mind = $("#msg_password");
        var lb = $("#pwdDiv .lb_opacity_Class");
        var du = $(".oi");
        var box = $("#pwdDiv");
        var bgbox = $("#pwd_check_dialog");
         str = null;
        $("#password").keyup(function(){
            bgbox.css("display","block");
            str = $("#password").val();
            lb.css("display","none");
            if(str.length < 8){
                $(".tb").css("color","#b6fe09")
            }
            if(str.length >= 8){
                $(".mous").css("color","#b6fe09")
            }
            if(_num.test(str) && _char.test(str) && _other.test(str)){
                $(".wp").css("color","#b6fe09");
                du.css("background","#b6fe09");
            }
        })
        $("#password").blur(function(){
            str = $("#password").val();
            if(str.length < 8){
                $(".tb").css("color","#b6fe09");
                mind.html("至少包含八个字符");
                mind.css({"color":"red","font-size":12});
                box.css("border-color","red");
            }else if(str.length == 0){
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }else{
                mind.css("display","none");
                box.css("border-color","#d9d9d9");
            }
            bgbox.css("display","none");
        })

        //确认
        var box1 = $("#confirmpwdDiv");
        var lb1 = $("#confirmpwdDiv .lb_opacity_Class");
        var input1 = $("#confirmPwd");
        var mind1 = $("#msg_checkPassword");

        input1.keyup(function(){
            num1 = input1.val();
            lb1.css("display","none");
            if(num1.length == 0){
                mind1.css("display","none");
                box1.css("border-color","#d9d9d9");
            }
        })
        input1.blur(function(){
            num1 = input1.val();
            if(str != num1 ){
                mind1.html("密码输入错误");
                mind1.css({"color":"red","font-size":12});
                box1.css("border-color","red");
            }
            if(str == num1){
                mind1.html("");
                box1.css("border-color","#d9d9d9");
            }
            if(str == null || num == null){
                mind1.html("密码输入错误");
                mind1.css({"color":"red","font-size":12});
                box1.css("border-color","#d9d9d9");
            }
            if(num1.length == 0){
                mind1.css("display","none");
                box1.css("border-color","#d9d9d9");
            }
        })
        return str;
    }

    //注册
    function reg(){
        var btn = $("#btnSubmit");
        var tg = $("#registerForm");
        btn.click(function(){
            var iphone = $("#username").val();
            console.log(iphone)
            var password = $("#password").val();
            console.log(password)
            if(iphone == "" || password == ""){
                return;
            }
            var xhr = new XMLHttpRequest;
            var data = "&iphone=" + iphone + "&password=" + password;
            var url = "http://127.0.0.1/big/wangyi/regs/resighter.php?id="+ Math.random();
            xhr.open("GET",url + data);
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    var res = xhr.responseText;
                    if(res == 0){//注册失败
                        tg.html("用户名已存在，请输入新的用户名");
                    }else if(res == 1){
                        tg.html("注册成功");
                        window.location.href = "login.html";
                    }else if(res == 2){
                        tg.html("注册失败")
                    }
                }
            }
        })
    }

    return {
        init : function(){
            country();
            phone();
            random();
            message();
            secert();
            reg();
        }
    }
})();
register.init();

5