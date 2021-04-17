$(function(){
	powbannerStart();
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
	var flage = true;
	//滚顶条滚动事件
	$(document).mousewheel(function(even){
		var boxtop = Math.abs(parseInt($('.powbox').position().top));
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
					designsStart();
				}
				if(boxtop<=(wihei*4)+50&&boxtop>=(wihei*4)-50){
					specificationsStrat();
				}
				if(boxtop<=(wihei*5)+50&&boxtop>=(wihei*5)-50){
					ordersStrat();
				}
				if(boxtop<=(wihei*6)+50&&boxtop>=(wihei*6)-50){
					$('.powbox').css({top:'-600vh'});flage=true;
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
				if(boxtop<=(wihei*4)+50&&boxtop>=(wihei*4)-50){
					controlsStart();
				}
				if(boxtop<=(wihei*5)+50&&boxtop>=(wihei*5)-50){
					designsStart();
				}
				if(boxtop<=(wihei*6)+50&&boxtop>=(wihei*6)-50){
					specificationsStrat();
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
			case 9:
				designsStart();
			break;
			case 11:
				specificationsStrat();
			break;
			case 13:
				ordersStrat();
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
		$('.powbanner>h1').css({top:'120px',opacity:'1'});
		$('.headnavigationbar').css({display:'block'});
		$('.powding').css({display:'none'});
		$('.fdlogo').css({display:'none'});
		$('.bananie>li').eq(0).animate({opacity:'1'},600).next().delay(400).animate({opacity:'1'},600).next().delay(600).animate({opacity:'1'},600).next().delay(800).animate({opacity:'1'},600);
		});
		standbypowerEnd();
		specificationsEnd();
	}
	//第一块结束动画
	function powbannerEnd(){
		$('.powbanner>h1').css({top:'220px',opacity:'0'});
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
		$('.sabowimg>div>p').eq(0).animate({opacity:'1'},600).next().delay(400).animate({opacity:'1'},600).next().delay(800).animate({opacity:'1'},600);
		$('.abtlef').animate({opacity:'1'},600);
		$('.abrig').delay(600).animate({opacity:'1'},600);
		});
		powbannerEnd();
		specificationsEnd();
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
		})
		powbannerEnd();
		standbypowerEnd();
		specificationsEnd();
	}
	//第四块开始动画
	function controlsStart(){
		$('.powbox').animate({top:'-300vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtpbai.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvgbai.svg');
		$('.powlef>p').eq(3).css({borderLeft:'4px solid white'}).siblings('p').css({borderLeft:'1px solid white'});
		$('.powlef>div').eq(3).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'white'});
		})
		powbannerEnd();
		standbypowerEnd();
		specificationsEnd();
	}
	//第五块开始动画
	function designsStart(){
		$('.powbox').animate({top:'-400vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtphei.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvg.svg');
		$('.powlef>p').eq(4).css({borderLeft:'4px solid black'}).siblings('p').css({borderLeft:'1px solid black'});
		$('.powlef>div').eq(4).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'black'});
		})
		powbannerEnd();
		standbypowerEnd();
		specificationsEnd();
	}
	//第六块开始动画
	function specificationsStrat(){
		$('.powbox').animate({top:'-500vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtpbai.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvgbai.svg');
		$('.powlef>p').eq(5).css({borderLeft:'4px solid white'}).siblings('p').css({borderLeft:'1px solid white'});
		$('.powlef>div').eq(5).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'white'});
		$('.specifications>img').animate({opacity:'1'},600,function(){$('.pecificatex').animate({opacity:'1'},600)});
		})
		powbannerEnd();
		standbypowerEnd();
	}
	//第六块结束动画
	function specificationsEnd(){
		$('.specifications>img').css({opacity:'0'});
		$('.pecificatex').css({opacity:'0'});
	}
	//第七快开始动画
	function ordersStrat(){
		$('.powbox').animate({top:'-600vh'},800,function(){flage=true;
		$('.headnavigationbar').css({display:'none'});
		$('.powding').css({display:'block'}).attr('src','../picture/powtpbai.png');
		$('.fdlogo').css({display:'block'}).attr('src','../picture/tslsvgbai.svg');
		$('.powlef>p').eq(6).css({borderLeft:'4px solid white'}).siblings('p').css({borderLeft:'1px solid white'});
		$('.powlef>div').eq(6).css({opacity:'1'}).siblings('div').css({opacity:'0'});
		$('.powlef>div').css({color:'white'});
		})
		powbannerEnd();
		standbypowerEnd();
		specificationsEnd();
	}
	
	
	var pmwidth = $(document).width();
	$('.ergvdslb>div>video').css({width:pmwidth +'px'});
	//第三块轮播图点击事件
	$('.vdslbbon>div').click(function(){
		var vdtxidx = $(this).index();
		$('.vdslbbon>p').animate({left:(vdtxidx*200)+10 +'px'});
		$('.vdslbbon>div').eq(vdtxidx).css({color:'white'}).siblings('div').css({color:'#7F7F7F'});
		$('.ergvdslb>div').animate({left:-(vdtxidx*pmwidth) +'px'});
	})
	
	//logo点击跳转页面
	$('.fdlogo').click(function(){
		$(location).attr('href','../index.html');
	})
	
})//jQuery