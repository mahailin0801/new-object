//头部滑过显示
var head = (function(){
	function show(){
		var add = $(".add");
		var xf = $(".add-m");
		add.mouseenter(function(){
			xf.css("display","block")
		})
		xf.mouseleave(function(){
			xf.css("display","none")
		})
		
		var bds = $(".clear_bod");
		var hui = $("#bet-ls")
		bds.mouseenter(function(){
			hui.css("display","block")
		})
		hui.mouseleave(function(){
			hui.css("display","none")
		})
		

		$(".seach").focus(function(){
			$(".ms").css("display","none");
		})
		$(".seach").blur(function(){
			$(".ms").css("display","block");
		})
	}
	return {
		init : function(){
			show();	
		}
	}
})();
head.init();

//下拉菜单
var list = (function(){
	function flos(){
		var fls = $(".h-nav li")
		var oLike = $(".hide-nav");
		fls.mouseenter(function(){
			$.ajax({
				type:"get",
				url:"data.json",
				async:true,
				cache :true,
				success:function(msg){
					var res = msg.nav;
					//console.log(res);
					var str = "";
					str += `<div class="sml">
						<div class="mat-ph">
							<h3>${res[0].h3}></h3>
							<ul class="phone">
								<li><a href="">${res[0].li1}</a></li>
								<li><a href="">${res[0].li2}</a></li>
								<li><a href="">${res[0].li3}</a></li>
								<li><a href="">${res[0].li4}</a></li>
								<li><a href="">${res[0].li5}</a></li>
							</ul>
						</div>
						
						<div class="f-show">
						
							<ul class="f-blk">
								<li>
									<a href="" class="info-lx"><img src="images/${res[0].pic1}"></a>
									<p class="exp"><a>${res[0].det1}</a></p>
									<p class="money">￥${res[0].money}</p>
								</li>
								<li>
									<a href="" class="info-lx"><img src="images/${res[0].pic2}"></a>
									<p class="exp"><a>${res[0].det1}</a></p>
									<p class="money">￥${res[0].money}</p>
								</li>
								<li>
									<a href="" class="info-lx"><img src="images/${res[0].pic3}"></a>
									<p class="exp"><a>${res[0].det1}</a></p>
									<p class="money">￥${res[0].money}</p>
								</li>
								<li>
									<a href="" class="info-lx"><img src="images/${res[0].pic4}"></a>
									<p class="exp"><a>${res[0].det1}</a></p>
									<p class="money">￥${res[0].money}</p>
								</li>
								<li>
									<a href="" class="info-lx"><img src="images/${res[0].pic5}"></a>
									<p class="exp"><a>${res[0].det1}</a></p>
									<p class="money">￥${res[0].money}</p>
								</li>
							</ul>
						</div>
					</div>`
					oLike.html(str);
					oLike.css("display","block");
					oLike.css("z-index",1000);
				}
			});
		})
		
		oLike.mouseleave(function(){
			oLike.slideUp(500)
		})
	}
	return {
		init:function(){
			flos();
		}
	}
})();
list.init();



var mores = (function(){
	//左右移动 
	function moves(){
		var lists = $(".m-box li");
		var index = 0;
		$(".s-left").click(function(){
			index--;
			if(index == -1){
				index = 0;
			}
			$(".m-box").animate({"left":-index*68},500);
		})
		$(".s-right").click(function(){
			index++;
			if(index == 2){
				index = 1
			}
			$(".m-box").animate({"left":-index*70},500);
		})
	}
	
	
	//选项卡
	function selectr(){
		var smLi = $(".m-box li");
		var mdLi = $(".cont-md p");
		var bgLi = $(".s-fdj span")
		smLi.mouseenter(function(){
			$(this).addClass("spect-rd").siblings().removeClass("spect-rd");
			mdLi.eq($(this).index()).show().siblings().hide();
			bgLi.eq($(this).index()).show().siblings().hide();
			
		})
	}
	
	//放大镜
	function bsee(){
		var mask = $(".mask");
		var bBox = $(".s-fdj");
		var mBox = $(".cont-md");
		var bigImg =$(".s-fdj img");
		//console.log(bigImg)
		mBox.mouseenter(function(){
			mask.show();
			bBox.show();
		})
		mBox.mouseleave(function(){
			mask.hide();
			bBox.hide();
		})
		
		mBox.mousemove(function(e){
			var e = e || event;
			var x = e.pageX - mBox.offset().left - mask.width() / 2;
			var y = e.pageY - mBox.offset().top - mask.height() / 2;
			var maxL = mBox.outerWidth() - mask.outerWidth();
			var maxT = mBox.outerHeight() - mask.outerHeight();
			x = x < 0 ? 0 : x > maxL ? maxL : x;
			y = y < 0 ? 0 : y > maxT ? maxT : y;
			mask.css("left",x + "px");
			mask.css("top",y + "px");
			
			var bigx = x * (bigImg.outerWidth() - bBox.outerWidth()) / maxL;
			var bigy = y * (bigImg.outerHeight() - bBox.outerHeight()) / maxT;
			bigImg.css("left",-bigx + "px");
			bigImg.css("top",-bigy + "px");
		})
	}

	return {
		init : function(){
			moves();
			selectr();
			bsee();
		}
	}
})();
mores.init();



var every = (function(){
	function cli(){
		var sty = $(".sty");
		sty.click(function(){
			$(this).addClass("bd-r").siblings().removeClass("bd-r")
		})
		
		var qb = $(".gb-q");
		qb.click(function(){
			$(this).addClass("bd-r").siblings().removeClass("bd-r")
		})
		
		var ops = $(".ops");
		ops.click(function(){
			$(this).addClass("bd-r").siblings().removeClass("bd-r")
		})
		
		var num = $(".num");
		var addss = $(".addss");
		var rdu = $(".rdu");
		var index = 1;
		addss.click(function(){
			index++;
			num.val(index);
		})
		rdu.click(function(){
			index--;
			if(index == 0){
				index = 1;
			}
			num.val(index);
		})
		
		
		$("#slel").click(function(){
			$(".other-hds").css({
				"display":"block",
				"background":"#fff"
			});
			
			$(".xx").click(function(){
				$(".other-hds").css("display","none")
			})
			$(".not-s").click(function(){
				$(".other-hds").css("display","none")
			})
			$(".sue-s").click(function(){
				$(".other-hds").css("display","none")
			})
		})
		
	}
	
	
	
	
	
	return {
		init : function(){
			cli();
		}
	}
})();
every.init();
