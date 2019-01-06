function $id(id){
	return document.getElementById(id);
}

function rand(min,max){
	return Math.round(Math.random()*(max - min) + min);
}


function getColor(){
	var str = "0123456789ABCDEF";
	var color = "#";
	for(var i = 0; i <= 5; i++){
		color += str.charAt(rand(0,15));
		
	}
	return color;
}
function zero(val){
	return val < 10 ? "0" + val : val;

}

function diff(start,end){
	
	return Math.abs(start.getTime() - end.getTime())/1000;
}



//user=gm1234; pwd=123434; age=16
function setCookie(name,value,days){
	var oDtae = new Date();
	oDtae.setDate(oDtae.getDate() + days);
	document.cookie = name + "=" + value + ";expires=" + days;
}

function getCookie(name){
	var arr = document.cookie.split(";");
	for(var i = 0; i < arr.length; i++){
		var arr1 = arr[i].replace(/^\s+/g,"");
		var val = arr1.split("=");
		if(val[0] == name){
			return val[1];
		}
	}
	return "";
}

function removeCookie(name){
	setCookie(name,"",-1);
}