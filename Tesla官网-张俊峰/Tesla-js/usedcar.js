$(function(){
	var cbl = 0;
	$('.clicksidebar').click(function(){
			  cbl++;
			  if(cbl%2==0){
				  //点击变换
				  $('.sidebarcenter').css({opacity:'1',transition:'1s'});
				  $('.sidebartop').css({transform:'rotate(0deg)',top:'0px',transition:'1s'});
				  $('.sidebarbottom').css({transform:'rotate(0deg)',bottom:'1px',transition:'1s'});
				  $('.greycloth').css({display:'none'});
				  $('.sidebar').css({right:'-312px',transition:'1s'});
				  $('.clicksidebar').css({position:'absolute'});
			  }else{ 
				  //点击变换
				  $('.clicksidebar').css({position:'fixed'});
				  $('.sidebarcenter').css({opacity:'0',transition:'1s'});
				  $('.sidebartop').css({transform:'rotate(45deg)',top:'7px',transition:'1s'});
				  $('.sidebarbottom').css({transform:'rotate(-45deg)',bottom:'7px',transition:'1s'});
				  $('.greycloth').css({display:'block'});
				  $('.sidebar').css({right:'0',transition:'1s'});
			  }
	})
	
	
	//价格筛选
	$('#heilow').change(function(){
		if($('#heilow').val()==1){
			$('.gaodaodi').css({display:'none'});
			$('.ddaogao').css({display:'block'})
		}else{
			$('.gaodaodi').css({display:'block'});
			$('.ddaogao').css({display:'none'})
		}
	})
	//车辆类型
	$('.mdlei').click(function(){
		$(this).find('p').css({display:'block'}).parent('.mdlei').siblings('.mdlei').find('p').css({display:'none'});
		if($(this).index()==1){
			$('.canitfindtsl').css({display:'block'});
			$('.gaodaodi').css({display:'none'});
			$('.ddaogao').css({display:'none'})
		}else{
			$('.gaodaodi').css({display:'block'});
			$('.canitfindtsl').css({display:'none'});
		}
	})
	//车系点击事件
	$('.modexi').click(function(){
		$(this).find('p').css({display:'block'}).parent('.modexi').siblings('.modexi').find('p').css({display:'none'});
	})
	//车漆筛选
	var cariex =[];
	$('.carpaint>div').click(function(){
		cariex.push($(this).index());
		var that = $(this).index();
		if(cariex.length>2){
			cariex.shift();
		}
		if(cariex[0]==cariex[1]){
			$('.vehicle').css({display:'block'});
			$(this).css({border:'4px solid transparent'})	
		}else{
			$(this).css({border:'4px solid #007fff'}).siblings('div').css({border:'4px solid transparent'});
			$('.vehicle').css({display:'block'})
			
			switch($(this).index()){
				case 1:
					resha(that);
				break;
				case 2:
					resha(that);
				break;
				case 3:
					resha(that);
				break;
				case 4:
					resha(that);
				break;
			}
			function resha(that){
				$('.modsimg').each(function(i){
				if($('.modsimg').eq(i).attr('src').charAt(15,16)!=(that-1)){
					$('.modsimg').eq(i).parent('.vehicle').css({display:'none'});
				}
				});
			}
		}		
	})
	
	var storage = window.localStorage;
	//立即订购
	$('.order').click(function(){
		storage.setItem('carimgs',$(this).parent('.vehicle').find('.modsimg').attr('src'));
		$(location).attr('href','./mossettlement.html');//跳转至首页
	})
	
	
})