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
					console.log(res);
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

var shops = (function(){
	function puvf(){
		$.ajax({
			type:"get",
			url:"data.json",
			async:true,
			cache:true,
			success:function(msg){
				var lists = $(".lists");
				var res = msg.detil;
				console.log(res)
				var str = "";
				for(var i = 0; i < res.length;i++){
					str +=`<li>
						<a href="page.html?id=${res[i].id}" class="lit-pic"><img src="images/${res[i].pic1}"></a>
						<p class="mt-til"><a href="page.html?id=${res[i].id}">${res[i].li}</a></p>
						<span>￥${res[i].money}</span>
						<p class="dile">
							<em class="sue"><a href="page.html?id=${res[i].id}" pid=${res[i].id} name=${res[i].li} src=${res[i].pic1} price=${res[i].money}>${res[i].sele}</a></em>
							<em class="jus">${res[i].det1}</em>
						</p>
						<p class="hot"><img src="images/1497575918300.png"></p>
						</li>`
				}
				lists.html(str);
				
				var all = $(".lists li");
				all.hover(
					  function () {
					    $(this).css("border-color","#e01d20");
					  },
					  function () {
					    $(this).css("border-color","#CCCCCC");
					  }
					);
				for(var index = 0; index < all.length;index++){
					if((index+1)% 5 == 0){
						all.eq(index).addClass("clear-mgr");
					}
				}
				
				//详情页
				var ary = [];
				$(".lists li").click(function(){
					var flag = true;
					var obj = {
						id : $(this).attr("pid"),
						name : $(this).attr("name"),
						src : $(this).attr("src"),
						price : $(this).attr("price"),
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
					//setCookie(key,value,days)
					setCookie("message",JSON.stringify(ary))
					//console.log(document.cookie)
				})
			}
		})
	}
	return {
		init : function(){
			puvf();
		}
	}
})();
shops.init();
