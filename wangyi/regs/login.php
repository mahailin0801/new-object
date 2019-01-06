<?php
    header("content-type:text/html;charset=utf-8");
	$iphone = $_GET["iphone"];
	$password = $_GET["password"];
	mysql_connect("127.0.0.1","root","root") or die("连接失败");
	mysql_select_db("zhuce");
	mysql_query("set names utf8");
	$sql = "select * from `user` where iphone = '$iphone'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_assoc($res);

    if($arr){
        if($password == $arr["password"]){
            echo 1;//登录成功
        }else{
            echo 2;//密码错误
        }
    }else{
        echo 0;//用户名不存在
    }
?>