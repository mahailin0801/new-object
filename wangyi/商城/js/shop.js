
var header = (function(){
	//百度联想词(question)
	function olink(){
		var search = document.getElementById("searchbox");
	    var box = document.getElementById("wrap");
	    search.onkeyup = function (){
	        var str = this.value;
	        var oScript = document.createElement("script");
	        document.body.appendChild(oScript);
	        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=fn";
	    }
	    function fn(msg){
	        var arr = msg.s;
	        var str = "";
	        for(var i = 0; i < arr.length; i++){
	            str += `<li>${arr[i]}</li>`;
	        }
	       box.innerHTML = str; 
	    }
	}
	//下拉菜单的显示
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
	return {
		init : function(){
			olink();
			listShow()
		}
	}
})();
header.init()


var section = (function(){
	//轮播图图片获取
	function playShow(){
		var oLike = $(".playMove");
		var pro = promiseAjax("data.json");
		pro.then(function(msg){
			var arr = JSON.parse(msg);
			var res = arr.url;
			console.log(res)
			var str = "";
				for(var i = 0; i < res.length;i++){
					str += `<li><a href="javascript:;"><img src="../images/${res[i]}"></a></li>`
				}
				oLike.html(str)
		},function(){
			alert("失败");
		});
	}
	//轮播图
	function autoPlay(){
		var box = $(".playMove");
		var dots = $(".dots a")
		var index = 0;
		var timer = null;
		timer = setInterval(play,1500);
		function play(){
			index++;
			if(index == dots.length){
				index = 0;
				box.css("left", 0);
			}
			dots.eq(index).addClass("z-sel").siblings().removeClass("z-sel");
			box.css("left", -index * 1100);
		}
		$(".move").mouseenter(function(){
			clearInterval(timer);
		})
		$(".move").mouseleave(function(){
			timer = setInterval(play,1500);
		})
		for(let i = 0; i < dots.length; i++){
			dots[i].onmouseenter = function(){
				index = i - 1;
				play()
			}	
		}
		$(".left").click(function(){
			clearInterval(timer);
			index--;
			if(index == -1){
				index = 0;
			}
			dots.eq(index).addClass("z-sel").siblings().removeClass("z-sel");
			box.css("left", -index * 1100);
		})
		$(".right").click(function(){
			clearInterval(timer);
			if(index == dots.length){
				index = 0;
				box.css("left", 0);
			}
			index++;
			if(index == dots.length){
				index = dots.length - 1;
			}
			dots.eq(index).addClass("z-sel").siblings().removeClass("z-sel");
			box.css("left", -index * 1100);
		})
	}
	return {
		init : function(){
			autoPlay();
			playShow()
		}
	}
})()
section.init()

var shops = (function(){
	//shuju
	function shop(){
		var oLike = $(".list");
		var pro = promiseAjax("data.json");
		pro.then(function(msg){
			var arr = JSON.parse(msg);
			var res = arr.later;
			console.log(res)
			var str = "";
				for(var i = 0; i < res.length;i++){
					str += `<li data-action="bircd" data-index="0">
							<div>
								<a class="cover f-pr f-blk j-statistics" data-alg="featured" data-id="9338002" data-position="0" data-action="card" target="_blank" href="/store/product/detail?id=9338002">
									<img src="../images/${res[i].pic}" class="f-img">
								</a>
								<div class="cnt f-tc">
									<h3 class="f-thide2">
										<span class="tag tag-red"><em>${res[i].inter}</em></span>
										<a data-id="9338002" data-position="0" data-action="card" target="_blank" href="/store/product/detail?id=9338002">${res[i].now}</a>
									</h3>
									<p class="txt f-thide">
										¥<em>${res[i].money}</em>
									</p>
								</div>
							</div>
						</li>`
				}
				oLike.html(str)
		},function(){
			alert("失败");
		});
	}
	return {
		init : function(){
			shop();
		}
	}
})()
shops.init();


var hotBuy = (function(){
	function buy(){
		var oLike = $("#list2");
		var pro = promiseAjax("data.json");
		pro.then(function(msg){
			var arr = JSON.parse(msg);
			var res = arr.later2;
			console.log(res)
			var str = "";
				for(var i = 0; i < res.length;i++){
					str += `<li data-action="bircd" data-index="0">
							<div>
								<a class="cover f-pr f-blk j-statistics" data-alg="featured" data-id="9338002" data-position="0" data-action="card" target="_blank" href="/store/product/detail?id=9338002">
									<img src="../images/${res[i].pic}" class="f-img">
								</a>
								<div class="cnt f-tc">
									<h3 class="f-thide2">
										<span class="tag tag-red"><em>${res[i].inter}</em></span>
										<a data-id="9338002" data-position="0" data-action="card" target="_blank" href="/store/product/detail?id=9338002">${res[i].now}</a>
									</h3>
									<p class="txt f-thide">
										¥<em>${res[i].money}</em>
									</p>
								</div>
							</div>
						</li>`
				}
				oLike.html(str)
		},function(){
			alert("失败");
		});
	}
	
	//滚动置顶
	function fix(){
		window.onscroll = function(){
			var Stop = document.body.scrollTop || document.documentElement.scrollTop;
			if(Stop > 600){
				$("#m-top").fadeTo(0,1);
			}
			$(".m-item").click(function(){
				$("html,body").animate({
					scrollTop : 0
				},0,function(){
					$("#m-top").fadeTo(0,0);
				},0)
				
			})
		}
	}
	
	return {
		init : function(){
			buy();
			fix()
		}
	}
})()
hotBuy.init();

