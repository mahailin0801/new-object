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
	    echo 0;//用户名已存在，重新输入
	}else {
	    $sql = "insert into `user` (iphone,password) values ('$iphone','$password')";
	    $res = mysql_query($sql);
	    if ($res) {
	        echo 1;//注册成功
	    } else {
	        echo 2;//注册失败
	    }
	}
?>