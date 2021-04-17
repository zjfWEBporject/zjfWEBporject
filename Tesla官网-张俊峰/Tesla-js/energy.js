$(function(){
	var cbl = 0;
	$('.clicksidebar').click(function(){
			  cbl++;
			  if(cbl%2==0){
				  //点击变换
				  $('.sidebarcenter').css({opacity:'1',transition:'1s',background:'white'});
				  $('.sidebartop').css({transform:'rotate(0deg)',top:'0px',transition:'1s',background:'white'});
				  $('.sidebarbottom').css({transform:'rotate(0deg)',bottom:'1px',transition:'1s',background:'white'});
				  $('.greycloth').css({display:'none'});
				  $('.sidebar').css({right:'-312px',transition:'1s'}); 
				  $('.clicksidebar').css({position:'absolute'});
			  }else{ 
				  //点击变换
				  $('.clicksidebar').css({position:'fixed'});
				  $('.sidebarcenter').css({opacity:'0',transition:'1s',background:'black'});
				  $('.sidebartop').css({transform:'rotate(45deg)',top:'7px',transition:'1s',background:'black'});
				  $('.sidebarbottom').css({transform:'rotate(-45deg)',bottom:'7px',transition:'1s',background:'black'});
				  $('.greycloth').css({display:'block'});
				  $('.sidebar').css({right:'0',transition:'1s'});
			  }
	})//click
	powbannerStart();
	var flage = true;
	//滚顶条滚动事件
	$(document).mousewheel(function(even){
		var boxtop = Math.abs(parseInt($('.powbox').position().top));
		console.log(boxtop);
		var wihei =$(window).height();
		//向下滑动
		if(event.deltaY>0){
			if(flage){
				flage=false;
				if(boxtop<=50&&boxtop>=-50){
					standbypowerStart();
				}
				if(boxtop<=(wihei)+50&&boxtop>=(wihei)-50){
					energysupplyStart();
				}
				if(boxtop<=(wihei*2)+50&&boxtop>=(wihei*2)-50){
					controlsStart();
				}
				if(boxtop<=(wihei*3)+50&&boxtop>=(wihei*3)-50){
					$('.powbox').css({top:'-300vh'});flage=true;
				}
			}//flage
		}//向下滑动
		
		//向上滚动
		if(event.deltaY<0){
			if(flage){
				flage=false;
				if(boxtop<=50&&boxtop>=-50){
					$('.powbox').css({top:'0px'});flage=true;
				}
				if(boxtop<=(wihei)+50&&boxtop>=(wihei)-50){
					powbannerStart();
				}
				if(boxtop<=(wihei*2)+50&&boxtop>=(wihei*2)-50){
					standbypowerStart();
				}
				if(boxtop<=(wihei*3)+50&&boxtop>=(wihei*3)-50){
					energysupplyStart();
				}
			}//flage
		}//向上滚动
	})//mousewheel
	
	// 侧边导航栏点击事件
	$('.powlef>div').click(function(){
		switch($(this).index()){
			case 1:
				powbannerStart();
			break;
			case 3:
				standbypowerStart();
			break;
			case 5:
				energysupplyStart();
			break;
			case 7:
				controlsStart();
			break;			
		}
	})//click
	
	// 回到顶部
	$('.powding').click(function(){
		powbannerStart();
	})//click
	
	
	
	//第一块开始动画
	function powbannerStart(){
		$('.powbox').animate({top:'0vh'},800,function(){flage=true;
		$('.powlef>p').eq(0).css({borderLeft:'4px solid white'}).siblings('p').css({borderLeft:'1px solid white'});
		$('.powlef>div').eq(0).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'white'});
		$('.powbanner>h1').css({top:'160px',opacity:'1'});
		$('.powbanner>span').css({top:'140px',opacity:'1'});
		$('.headnavigationbar').css({display:'block'});
		$('.powding').css({display:'none'});
		$('.fdlogo').css({display:'none'});
		$('.bananie>li').eq(0).animate({opacity:'1'},600).next().delay(400).animate({opacity:'1'},600).next().delay(600).animate({opacity:'1'},600).next().delay(800).animate({opacity:'1'},600);
		});
		standbypowerEnd();
		energysupplyEnd();
		controlsEnd();
	}
	//第一块结束动画
	function powbannerEnd(){
		$('.powbanner>h1').css({top:'220px',opacity:'0'});
		$('.powbanner>span').css({top:'220px',opacity:'0'});
		$('.bananie>li').css({opacity:'0'});
	}
	//第二块开始动画
	function standbypowerStart(){
		$('.powbox').animate({top:'-100vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtpbai.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvgbai.svg');
		$('.powlef>p').eq(1).css({borderLeft:'4px solid white'}).siblings('p').css({borderLeft:'1px solid white'});
		$('.powlef>div').eq(1).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'white'});
		$('.abtlef').animate({opacity:'1'},600);
		$('.abrig').delay(600).animate({opacity:'1'},600);
		});
		powbannerEnd();
		energysupplyEnd();
		controlsEnd();
	}
	//第二块结束动画
	function standbypowerEnd(){
		$('.sabowimg>div>p').css({opacity:'0'});
		$('.abtlef').css({opacity:'0'});
		$('.abrig').css({opacity:'0'});
	}
	//第三块开始动画
	function energysupplyStart(){
		$('.powbox').animate({top:'-200vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtpbai.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvgbai.svg');
		$('.powlef>p').eq(2).css({borderLeft:'4px solid white'}).siblings('p').css({borderLeft:'1px solid white'});
		$('.powlef>div').eq(2).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'white'});
		$('.enelef').animate({opacity:'1'},600);
		$('.enerig').delay(600).animate({opacity:'1'},600);
		})
		powbannerEnd();
		standbypowerEnd();
		controlsEnd();
	}
	//第三块结束动画
	function energysupplyEnd(){
		$('.enelef').css({opacity:'0'});
		$('.enerig').css({opacity:'0'});
	}
	//第四块开始动画
	function controlsStart(){
		$('.powbox').animate({top:'-300vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtpbai.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvgbai.svg');
		$('.powlef>p').eq(3).css({borderLeft:'4px solid black'}).siblings('p').css({borderLeft:'1px solid black'});
		$('.powlef>div').eq(3).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'black'});
		$('.rollef').animate({opacity:'1'},600);
		$('.rolrig').delay(600).animate({opacity:'1'},600);
		})
		powbannerEnd();
		standbypowerEnd();
		energysupplyEnd();
	}
	//第四块结束动画
	function controlsEnd(){
		$('.rollef').css({opacity:'0'});
		$('.rolrig').css({opacity:'0'});
	}
	
	//logo点击跳转页面
	$('.fdlogo').click(function(){
		$(location).attr('href','../index.html');
	})
	
})//jQuery