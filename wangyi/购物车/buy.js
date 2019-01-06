//热门推荐
var toHot = (function(){
	//热门数据
	function shop(){
		var oLike = $(".h-by");
		var pro = promiseAjax("data.json");
		pro.then(function(msg){
			var arr = JSON.parse(msg);
			var res = arr.later;
			console.log(res)
			var str = "";
				for(var i = 0; i < res.length;i++){
					str += `<li class="oli">
							<a href="#" class="h-cup"><img src="images/${res[i].pic}"></a>
							<div class="h-idu">
								<div class="h-st">
									<div class="h-rd">${res[i].inter}</div>
									<a href="">${res[i].now}</a>
								</div>
								<p class="h-mo">￥<span>${res[i].money}</span></p>
							</div>
						</li>`
				}
				oLike.html(str);
		},function(){
			alert("失败");
		});
	}
	
	//滚动置顶
	function fix(){
		window.onscroll = function(){
			var Stop = document.body.scrollTop || document.documentElement.scrollTop;
			if(Stop > 400){
				$(".m-back").css("display","block")
			}
			$(".m-back").click(function(){
				$("html,body").animate({
					scrollTop : 0
				},0,function(){
					$(".m-back").css("display","none");
				},0)
				
			})
		}
	}
	return {
		init : function(){
			shop();
			fix();
		}
	}
})()
toHot.init();


//连接头部和尾部
var pub = (function(){
	function links(){
		$("#head").load("../public/public.html #header",function(res,type,xhr){
			list.init();
		});
		$("#foot").load("../public/public.html #footer");
	}
	return {
		init : function(){
			links();
		}
	}
})()
pub.init();

var list = (function(){
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
			listShow();
			lenove();
		}
	}
})()

var choice = (function(){
	//单个显示选中未选中
	function selectone(){
		var flag = true;
		$(".click i").click(function(){
			if(flag){
				$(this).addClass("z-checked").siblings().removeClass("z-checked");
			}else{
				$(this).removeClass("z-checked").siblings().addClass("z-checked");
			}
			flag = !flag
		})
	}
	
	//全选
	function selectall(){
		var flag = true;
		$(".allselect").click(function(){
			if(flag){
				$(".click i").addClass("z-checked").siblings().removeClass("z-checked");
			}else{
				$(".click i").removeClass("z-checked").siblings().addClass("z-checked");
			}
			
			$(".click i").click(function(){
				$(".allselect i").removeClass("z-checked").siblings().addClass("z-checked");
			})
			flag = !flag
		})
	}
	return {
		init : function(){
			selectone();
			selectall();
		}
	}
})()
choice.init();
