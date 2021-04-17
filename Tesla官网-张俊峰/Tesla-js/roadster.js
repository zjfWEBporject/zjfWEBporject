$(function(){
	//侧边栏点击事件
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
				  $('.clicksidebar>div').css({background:'white'});
				  $('.clicksidebar').css({position:'absolute'});
			  }else{ 
				  //点击变换
				  $('.clicksidebar').css({position:'fixed'});
				  $('.sidebarcenter').css({opacity:'0',transition:'1s'});
				  $('.sidebartop').css({transform:'rotate(45deg)',top:'7px',transition:'1s'});
				  $('.sidebarbottom').css({transform:'rotate(-45deg)',bottom:'7px',transition:'1s'});
				  $('.greycloth').css({display:'block'});
				  $('.sidebar').css({right:'0',transition:'1s'});
				  $('.clicksidebar>div').css({background:'black'});
			  }
	})
	
	//滚动事件
	 $(document).mousewheel(function(even){
		//车顶玻璃变换
		if(scrollY>2500&&scrollY<3500){
			$('.roofglass').css({background:'url(../picture/top2.jpg)',backgroundPosition:'center'}); 
		}
		if(scrollY>3500&&scrollY<4500){
			$('.roofglass').css({background:'url(../picture/top.jpg)',backgroundPosition:'center'});
		} 
	 })
	
	
	
	
})