$(function(){
	 var storage = window.localStorage;
	//鼠标移入列表
	$('.sptopdao>p').mouseover(function(){ 
			$('.listshops>div').eq($(this).index()).css({display:'block'}).siblings('div').css({display:'none'});
			$('.sptopdao>p').mouseout(function(){
			  $('.listshops>div').css({display:'none'})
	 })
	})
	//登录页面点击跳转
	$('.tardl').click(function(){djtzdl();});
	function djtzdl(){
			 $(location).attr('href','./signin.html');
	}
	//购物车数量
	  if($('.commoditys>div').index()<0){
	  			  $('.commoditys>p').css({display:'block'});
				  $('#commoditysnum').css({display:'none'});
	  }else{
	  			  $('.commoditys>p').css({display:'none'});
				  $('#commoditysnum').css({display:'block'}).text($('.modnum>span').text());
	  }  
	  //打开购物车
	   $('.gucgh').click(function(){
		   $('.hui').css({display:'block'});
		   $('.shoppingcarts').animate({right:'0'},500);
	   })
	   //关闭购物车
	   $('.shpnon').click(function(){
		   $('.hui').css({display:'none'});
		   $('.shoppingcarts').animate({right:'-600px'},500);
	   });
	   //删除商品
	   $('.delmod').click(function(){
		   $('.commtype').remove('div');
		   if($('.commoditys>div').index()<0){
		   			  $('.commoditys>p').css({display:'block'});
					  $('#commoditysnum').css({display:'none'});
				$('.setents>span').text(0);	  
		   }else{
		   			  $('.commoditys>p').css({display:'none'});
		   }
	   })
	   var jiage = $('.modtotalprice').text();
	   $('.setents>span').text(jiage);
	
	//循环遍历对象
	$('.imglist>img').each(function(i){
	   $(this).attr('src','../picture/mod0_' + i + '.jpg');
	 });
	//点击变色
	$('.xzcors>div').click(function(){
		$(this).css({borderColor:'black'}).siblings('div').css({borderColor:'rgba(133, 133, 133,.4)'});
		var mocol = $(this).index();
		$('.imglist>img').each(function(i){
		   $(this).attr('src','../picture/mod'+ mocol +'_' + i + '.jpg');
		 });
	})
	//数量减少
	$('.slnujaj').click(suan);
	function suan(){
		var madnums = $('.slnujaj>span').text();
		madnums-=1;
		if($('.slnujaj>span').text()<=1){
			$('.slnujaj>span').text(1);
		}else{
			 $('.slnujaj>span').text(madnums);
			$('.modtotalprice').text('¥ '+madnums*$('.modprice').text());
			$('.setents>span').text($('.modtotalprice').text());
			$('#commoditysnum').text($('.slnujaj>span').text());
		}
	}
	//数量增加
	$('.prja').click(function(){
		var madnums = Number($('.slnujaj>span').text());
		madnums += 1;
		$('.slnujaj>span').text(madnums+=1);
	});
	
	var stonum = 0;
	 //添加购物车
	 $('.addtospcar').click(function(){
		 $('.hui').css({display:'block'});
		 $('.shoppingcarts').animate({right:'0'},500);
		 $('.commoditys>p').css({display:'none'});
		 //判断颜色
		var col =  Number($('.imglist>img').eq(0).attr('src').charAt(14));
		var cplos='';
		 switch(col){
			 case 0:
				cplos='白色';
			 break;
			 case 1:
			 	cplos='银色';
			 break;
			 case 2:
			 	cplos='黑色';
			 break;
			 case 3:
			 	cplos='蓝色';
			 break;
			 case 4:
			 	cplos='红色';
			 break;
		 }
		//创建商品
		var cope = $('<div></div>').addClass('commtype');
		var bgul = $('<div></div>').addClass('backurl').css({background:'url(../picture/'+$('.imglist>img').eq(0).attr('src')+')  no-repeat center center',backgroundSize:'100%'});
		var patx = $('<h2></h2>').addClass('paerstex').text('Model S 1:18 汽车模型');;
		var cacs = $('<h3></h3>').addClass('carcols').text(cplos);
		var mdpe = $('<h4></h4>').addClass('modprice').text('¥ 1499');
		var mdnm = $('<h5></h5>').addClass('modnum');
		var mdmn = $('<div></div>').addClass('mdman').text('-');
		var span = $('<span></span>').text($('.slnujaj>span').text());
		var mdja = $('<div></div>').addClass('mdmja').text('+');
		var baca = $('<img>').addClass('delmod').attr('src','../picture/spcaton.png').click(function(){$('.commtype').remove('div:first');storage.clear();stonum = 0;if($('.commoditys>div').index()<0){
		   			  $('.commoditys>p').css({display:'block'});
					  $('#commoditysnum').css({display:'none'});
				$('.setents>span').text(0);	  
		   }else{
		   			  $('.commoditys>p').css({display:'none'});
		   }});
		var odpe = $('<h6></h6>').addClass('modtotalprice').text('¥ '+ parseInt($('.slnujaj>span').text()) * 1499);
		$('.commoditys').append(cope);
		cope.append(bgul);
		bgul.after(patx);
		patx.after(cacs);
		cacs.after(mdpe);
		mdpe.after(mdnm);
		mdnm.append(mdmn);
		mdmn.after(span);
		span.after(mdja);
		mdnm.after(baca);
		baca.after(odpe);
		
		//总金额计算
		//循环遍历对象
		var sum=0;
		$('.commtype').each(function(i){
		   sum+=Number($('.modnum>span').eq(i).text());
		 });
		$('.setents>span').text('¥ '+ sum*1499)
		stonum++;
		storage['molcor'+stonum] = cacs.text();
		storage['modimg'+stonum] = bgul.attr('style').slice(17,49);
		storage['modnum'+stonum] = span.text();
	 })
	 //结账
	// var mdcl=[]
	 $('.checkouts').click(function(){
		 $(location).attr('href','./viewports.html');
	 })
//	console.log(storage.modimg)


	//
})
	 