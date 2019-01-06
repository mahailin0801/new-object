
var pub = (function(){
	
	////连接头部和尾部
	function links(){
		$("#head").load("../public/public.html #header",function(res,type,xhr){
			listShow()
		});
		$("#foot").load("../public/public.html #footer");
	}
	
	//下拉菜单
	function listShow(){
		$(".m-select").mouseenter(function(){
			$(".m-select ul").fadeTo(0,1);
		})
		$(".m-select ul li").hover(function(){
			$(this).css("background","#ccc")
		},function(){
			$(this).css("background","#fff")
		});
		$(".m-select").mouseleave(function(){
			$(".m-select ul").fadeTo(0,0);
		})
	}
	
	//百度联想词
	function lenove(){
		$(".searchbox").keyup(function(){
	        var str = this.value;
	        var oScript = document.createElement("script");
	        document.body.appendChild(oScript);
	        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=fn";
		})
		function fn(msg){
	        var arr = msg.s;
	        var str = "";
	        for(var i = 0; i < arr.length; i++){
	            str += `<li>${arr[i]}</li>`;
	        }
	       $(".wrap").html(str); 
	   }
	}
	return {
		init : function(){
			links();
			lenove();
		}
	}
})()
pub.init();



var buyCar = (function(){
	var left = $(".left");
	var right = $(".right");
	var mido = $(".mido");
	var max = $(".bet-ma");
	var mask = $(".mask");
	var bg = $(".bet-mask");
	var index = 0;
		
	var box = $(".bet-over");
	var bigImg =$(".bet-mask img");
	console.log(bigImg)
	var big = $(".bet-mask");
	function show(){
		max.mouseenter(function(){
			mido.css("display","block");
			mask.css("display","block");
			bg.css("display","block");
			if(index >= 1){
				left.css("display","block");
			}else{
				left.css("display","none");
			}
			if(index <7){
				right.css("display","block");
			}else{
				right.css("display","none");
			}
		})
		//放大镜
		left.mouseenter(function(){
			mask.css("display","none");
		})
		left.mouseleave(function(){
			mask.css("display","block");
		})
		right.mouseenter(function(){
			mask.css("display","none");
		})
		right.mouseleave(function(){
			mask.css("display","block");
		})
		max.mousemove(function(e){
			var e = e || event;
			var x = e.pageX - box.offset().left - mask.width() / 2;
			var y = e.pageY - box.offset().top - mask.height() / 2;
			var maxL = box.outerWidth() - mask.outerWidth();
			var maxT = box.outerHeight() - mask.outerHeight();
			x = x < 0 ? 0 : x > maxL ? maxL : x;
			y = y < 0 ? 0 : y > maxT ? maxT : y;
			mask.css("left",x + "px");
			mask.css("top",y + "px");
			
			var bigx = x * (bigImg.outerWidth() - big.outerWidth()) / maxL;
			var bigy = y * (bigImg.outerHeight() - big.outerHeight()) / maxT;
			bigImg.css("left",-bigx + "px");
			bigImg.css("top",-bigy + "px");
		})
		
		max.mouseleave(function(){
			left.css("display","none");
			right.css("display","none");
			mido.css("display","none");
			mask.css("display","none");
			bg.css("display","none");
		})
	}
	return {
		init : function(){
			show();
		}
	}
})();
buyCar.init();



var buyCar2 = (function(){
	function select(){
		var left = $(".left");
		var right = $(".right");
		var mido = $(".mido");
		var max = $(".bet-ma");
		
		var bg = $(".bet-mask");
		var list = $(".bet-over p");
		var dots = $(".bet-mis li");
		var pag = $(".pag");
		var mask = $(".mask");
		//选项卡
		for(let index = 0; index < dots.length; index++){
			dots[index].onclick = function(){
				for(var j = 0; j < dots.length; j++){
					dots[j].className = "";
					list[j].style.display = "none";
				}
				dots[index].className = "active";
				list[index].style.display = "block";
				pag.html(index+1);
				bg.eq(index).fadeIn(0,1).siblings().fadeOut(0,1);
				//移入
				max.mouseenter(function(){
					mido.css("display","block");
					mask.css("display","block");
					bg.css("display","block");
					if(index >= 1){
						left.css("display","block");
					}else{
						left.css("display","none");
					}
					if(index <7){
						right.css("display","block");
					}else{
						right.css("display","none");
					}
				})
				//移出
				max.mouseleave(function(){
					left.css("display","none");
					right.css("display","none");
					mido.css("display","none");
					mask.css("display","none");
					bg.css("display","none");
				})
				
				//左移动
				right.click(function(){
					index++;
					if(index > 0){
						left.css("display","block");
					}
					if(index >= dots.length - 1){
						right.css("display","none");
					}
					pag.html(index+1);
					list.eq(index).fadeIn(0,1).siblings().fadeOut(0,1);
					bg.eq(index).fadeIn(0,1).siblings().fadeOut(0,1);
					dots.eq(index).addClass("active").siblings().removeClass("active");
				})
				
				//右移动
				left.click(function(){
					index--;
					if(index <= dots.length - 1){
						right.css("display","block");
					}
					if(index == 0){
						left.css("display","none");
					}
					pag.html(index+1);
					list.eq(index).fadeIn(0,1).siblings().fadeOut(0,1);
					dots.eq(index).addClass("active").siblings().removeClass("active");
				})
			}
		}
	}
	return {
		init : function(){
			select();
		}
	}
})()
buyCar2.init();


var list = (function(){
	//下拉菜单
	function show(){
		var sw = $(".f-wkl");
		var ps = $(".ps-t");
		sw.mouseenter(function(){
			ps.css("display","block");
		})
		sw.mouseleave(function(){
			ps.css("display","none");
		})
	}
	
	//对应颜色
	function color(){
		var col = $(".st-cl li");//色卡选项
		var bgPic = $(".bet-mask img")//大图
		var mdPic = $(".bet-over img");//中图
		var smPic = $(".bet-mis img");//小图
		for(let index = 0; index < mdPic.length; index++){
			col.click(function(){
				$(this).addClass("checked").siblings().removeClass("checked");
			})
		}
	}
	
	//数量
	function num(){
		var rdu = $(".red");
		var mou = $(".mou");
		var add = $(".add");
		var index = 1;
		rdu.click(function(){
			index--;
			if(index <= 1){
				index = 1;
			}
			mou.html(index);
		})
		add.click(function(){
			index++;
			mou.html(index);
		})
	}
	return {
		init : function(){
			 show();
			 color();
			 num();
		}
	}
})();
list.init();

var joinCar = (function(){
	function shuju(){
		var oLike = $(".pic-info");
		var pro = promiseAjax("data.json");
		pro.then(function(msg){
			var arr = JSON.parse(msg);
			var res = arr.erji;
			console.log(res)
			var str = "";
				for(var i = 0; i < res.length;i++){
					str += `<div class="info-til">
						<h2>${res[i].name}</h2>
					</div>
					<p class="info-tr"><a href="">1020 音乐发烧节包邮，满减，下单还返券</a></p>
					<p class="price">
						<span class="rmb">¥</span>
						<em class="j-flag">${res[i].price}</em>
					</p>
					
					<div class="info-lx">
						<p class="lx-f f-lt">促销:</p>
						<div class="f-wkl">
							<ul class="f-lt"> 
								<li>
									<p class="f-rd f-lt ">限时领取</p>
									<p class="f-md f-lt">包邮券  &nbsp;&nbsp;返场包邮券,&nbsp;&nbsp;无门槛&nbsp;<i>领券</i></p>
									<p class="f-show f-rt">全部优惠券(6) <i></i></p>
								</li>
							</ul>
							<div class="ps-t">
								<ul class="f-shows"> 
									<li>
										<p class="f-rd f-lt ">限时领取</p>
										<p class="f-md f-lt">包邮券  &nbsp;&nbsp;返场包邮券,&nbsp;&nbsp;无门槛&nbsp;<i>领券</i></p>
										
									</li>
								</ul>
								<ul class="f-shows"> 
									<li>
										<p class="f-rd f-lt ">限时领取</p>
										<p class="f-md f-lt">包邮券  &nbsp;&nbsp;返场包邮券,&nbsp;&nbsp;无门槛&nbsp;<i>领券</i></p>
									</li>
								</ul>
								<ul class="f-shows"> 
									<li>
										<p class="f-rd f-lt ">限时领取</p>
										<p class="f-md f-lt">包邮券  &nbsp;&nbsp;返场包邮券,&nbsp;&nbsp;无门槛&nbsp;<i>领券</i></p>
									</li>
								</ul>
								<ul class="f-shows"> 
									<li>
										<p class="f-rd f-lt ">限时领取</p>
										<p class="f-md f-lt">包邮券  &nbsp;&nbsp;返场包邮券,&nbsp;&nbsp;无门槛&nbsp;<i>领券</i></p>
									</li>
								</ul>
								<ul class="f-shows"> 
									<li>
										<p class="f-rd f-lt ">限时领取</p>
										<p class="f-md f-lt">包邮券  &nbsp;&nbsp;返场包邮券,&nbsp;&nbsp;无门槛&nbsp;<i>领券</i></p>
									</li>
								</ul>
							</div>
						</div>
						
					</div>
					
					<div class="info-lx">
						<p class="lx-f f-lt">颜色:</p>
						<ul class="f-lt st-cl " style="background-color: #fff;border: none;"> 
							<li>红色</li>
							<li>黄色</li>
							<li>${res[i].color}</li>
							<li>白色</li>
						</ul>
					</div>
					<div class="info-lx">
						<p class="lx-f f-lt">数量:</p>
						<ul class="f-lt s-ls" style="background-color: #fff;border: none;"> 
							<li class="red"></li>
							<li class="mou">${res[i].count}</li>
							<li class="add"></li>
						</ul>
					</div>`
				}
				oLike.html(str);
		},function(){
			alert("失败");
		});
	}
	function join(){
		var ary = [];
		$(".b-car").click(function(){
			var flag = true;
			var obj = {
				id : $(this).attr("pid"),
				name : $(this).attr("name"),
				src : $(this).attr("src"),
				price : $(this).attr("price"),
				color :	$(this).attr("color"),
				count : 1
			}
			var cookieInfo = getCookie("message");
			if(cookieInfo.length != 0){
				ary = cookieInfo;
				for(var i = 0;i < ary.length;i++){
					if(ary[i].id == obj.id){
						ary[i].count++;
						flag = false;
					}
				}
			}
			if(flag){
				ary.push(obj);
			}
			setCookie("message",JSON.stringify(ary))
			
			//进行购物车的结算
			if(!confirm("确定——继续购买，取消——进行结算")){
				window.location.href = "shopcar.html"
			}
		})
	}
	return {
		init : function(){
			
		}
	}
})()
