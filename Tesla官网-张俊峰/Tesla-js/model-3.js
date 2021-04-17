$(function(){
	//页面加载事件
	$(document).ready(function(){
			$('.hedtex').animate({top:'130px',opacity:'1'},1200);
			$('.hedull').animate({bottom:'50px',opacity:'1'},1200);
	});
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
	})
	var flage = true;
	//滚动事件
	 $(document).mousewheel(function(even){
		 
		 var mdy = parseInt($('.box').css('top'));
		 var bxht = parseInt($('.box').css('height'));
		console.log(mdy);
		 
		 if(flage){
			 flage=false;
			 
			 //向下滚动
			 if(event.deltaY>0){
			 	if(mdy<=0&&mdy>(-bxht)){
			 		modelxEnd();
					securityStart();
			 	}
			 	if(mdy<=(-bxht)&&mdy>(-bxht*2)){
			 		practicabilityStart();
					securityEnd();
			 	}
			 	if(mdy<=(-bxht*2)&&mdy>(-bxht*3)){
					practicabilityEnd();
			 		mileageStart();
			 	}
			 	if(mdy<=(-bxht*3)&&mdy>(-bxht*4)){
			 		automaticdriStart();
					mileageEnd();
			 	}
				if(mdy<=(-bxht*4)&&mdy>(-bxht*5)){
					automaticdriEnd();
					performanceStart();
				}
				if(mdy<=(-bxht*5)&&mdy>(-bxht*6)){
				iNteriorStart();
				performanceEnd();
				}
				if(mdy<=(-bxht*6)&&mdy>(-bxht*7)){
				specificationStart();
				iNteriorEnd();
				}
				if(mdy<=(-bxht*7)&&mdy>(-bxht*8)){
				specificationEnd();
				orderStart();
				}
				if(mdy<=(-bxht*8)&&mdy>(-bxht*10)){$('.box').animate({top:-bxht*8+'px'},700,function(){flage=true;});}
			 }else{
			 	//向上滚动
				if(mdy<=0&&mdy>(-bxht)){$('.box').animate({top:0+'px'},1,function(){flage=true;});}
			 	if(mdy<=(-bxht)&&mdy>(-bxht*2)){
			 		modelxStart();
					securityEnd();
			 	}
				if(mdy<=(-bxht*2)&&mdy>(-bxht*3)){
					securityStart();
					practicabilityEnd();
				}
				if(mdy<=(-bxht*3)&&mdy>(-bxht*4)){
					practicabilityStart();
					mileageEnd();
				}
				if(mdy<=(-bxht*4)&&mdy>(-bxht*5)){
					mileageStart();
					automaticdriEnd();
				}
				if(mdy<=(-bxht*5)&&mdy>(-bxht*6)){
					automaticdriStart();
					performanceEnd();
				}
				if(mdy<=(-bxht*6)&&mdy>(-bxht*7)){
					performanceStart();
					iNteriorEnd();
				}
				if(mdy<=(-bxht*7)&&mdy>(-bxht*8)){
					iNteriorStart();
					specificationEnd();
				}
				if(mdy<=(-bxht*8)&&mdy>(-bxht*9)){
					specificationStart();
					orderEnd();
				}
			 }//else	 
		 }//flage
	})//mousewheel
	 
	 //左侧侧边栏点击事件
	 $('.leftcolumn>span').click(function(){
		  var bxht = parseInt($('.box').css('height'));
		 var cbdj = $(this).index();
		if(cbdj==1){
			securityEnd();
			practicabilityEnd();
			mileageEnd();
			automaticdriEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			modelxStart();
		}
		if(cbdj==3){
			modelxEnd();
			practicabilityEnd();
			mileageEnd();
			automaticdriEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			securityStart();
		}
		if(cbdj==5){
			securityEnd();
			modelxEnd();
			mileageEnd();
			automaticdriEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			practicabilityStart();
		}
		if(cbdj==7){
			securityEnd();
			modelxEnd();
			practicabilityEnd();
			automaticdriEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			mileageStart();
		}
		if(cbdj==9){
			securityEnd();
			modelxEnd();
			practicabilityEnd();
			mileageEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			automaticdriStart();
		}
		if(cbdj==11){
			securityEnd();
			modelxEnd();
			practicabilityEnd();
			mileageEnd();
			automaticdriEnd();
			iNteriorEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			performanceStart();
		}
		if(cbdj==13){
			securityEnd();
			modelxEnd();
			practicabilityEnd();
			mileageEnd();
			automaticdriEnd();
			performanceEnd();
			specificationEnd();
			specificationEnd();
			orderEnd();
			iNteriorStart();
		}
		if(cbdj==15){
			securityEnd();
			modelxEnd();
			practicabilityEnd();
			mileageEnd();
			automaticdriEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			orderEnd();
			specificationStart();
		}
		if(cbdj==17){
			securityEnd();
			modelxEnd();
			practicabilityEnd();
			mileageEnd();
			automaticdriEnd();
			performanceEnd();
			iNteriorEnd();
			specificationEnd();
			orderEnd();
			orderStart();
		}
	 })
	
	
	// 回到顶部
	$('.up').click(function(){
		modelxStart();
		securityEnd();
		practicabilityEnd();
		mileageEnd();
		automaticdriEnd();
		performanceEnd();
		iNteriorEnd();
		specificationEnd();
		orderEnd();
	});
	
	//第一块开始动画
	function modelxStart(){
		$('.box').animate({top:0+'px'},700,function(){flage=true;$('.hedtex').animate({top:'130px',opacity:'1'},700);$('.hedull').animate({bottom:'70px',opacity:'1'},700);});
		$('.logo').css({position:'relative'}).find('img').attr('src','../picture/tslsvgbai.svg');
		$('.modelx>video').attr({src:'../vidos/modeix.mp4'});
		$('.up').css({display:'none'});
		$('.leftcolumn>div').eq(0).css({outline:'2px solid white',background:'white'}).siblings('div').css({outline:'0px solid white',background:'white'});
		$('.leftcolumn>span').eq(0).css({opacity:'1',color:'white'}).siblings('span').css({opacity:'0',color:'white'});
	};	
	//第一块结束动画
	function modelxEnd(){
		$('.hedtex').animate({top:'230px',opacity:'0'},300);
		$('.hedull').animate({bottom:'-50px',opacity:'0'},300);
		$('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvg.svg');
		$('.modelx>video').attr({src:'../vidos/modeix.mp4'});
	};
	//第二块开始动画
	function securityStart(){
		var bxht = parseInt($('.box').css('height'));
		$('.box').animate({top:-bxht+'px'},700,function(){flage=true;$('.frontimpactprotection').animate({height:'260px',top:'116px'},700);$('.sideimpactprotection').animate({height:'151px',top:'40px'},700);$('.rollover').animate({height:'166px',top:'450px'},700);$('.bannertext').slideDown(700);$('.grade').slideDown(700);$('.testdrive').slideDown(700);});
		$('.up').css({display:'block'}).attr({src:'../picture/uphei.png'});
		$('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvg.svg');
		$('.leftcolumn>div').eq(1).css({outline:'2px solid black',background:'black'}).siblings('div').css({outline:'0px solid white',background:'black'});
		$('.leftcolumn>span').eq(1).css({opacity:'1',color:'black'}).siblings('span').css({opacity:'0',color:'black'});
		
	}
	//第二块结束动画
	function securityEnd(){
		$('.frontimpactprotection').animate({height:'0px',top:'250px'},700);
		$('.sideimpactprotection').animate({height:'0px',top:'110px'},700);
		$('.rollover').animate({height:'0px',top:'510px'},700);
		$('.bannertext').slideUp(700);
		$('.grade').slideUp(700);
		$('.testdrive').slideUp(700);
	};
	//第三块开始
	function practicabilityStart(){
		var bxht = parseInt($('.box').css('height'));
		$('.box').animate({top:-bxht*2+'px'},700,function(){flage=true;
		$('.kongjian').animate({top:'0',opacity:'1'},700);$('.nngli').animate({top:'0',opacity:'1'},1000);$('.yingyim').animate({top:'0',opacity:'1'},1300);$('.spaciousspace').animate({bottom:'60px',opacity:'1'},1000);
		});
		$('.up').css({display:'block'}).attr({src:'../picture/upbai.png'});
		$('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvgbai.svg');
		$('.leftcolumn>div').eq(2).css({outline:'2px solid white',background:'white'}).siblings('div').css({outline:'0px solid white',background:'white'});
		$('.leftcolumn>span').eq(2).css({opacity:'1',color:'white'}).siblings('span').css({opacity:'0',color:'white'});
	};
	//第三块结束
   function practicabilityEnd(){
	   $('.kongjian').animate({top:'80px',opacity:'0'},700);
	   $('.nngli').animate({top:'80px',opacity:'0'},700);
	   $('.yingyim').animate({top:'80px',opacity:'0'},700);
	   $('.spaciousspace').animate({bottom:'0px',opacity:'0'},700);
   }
   //第四块开始
   function mileageStart(){
	   var bxht = parseInt($('.box').css('height'));
	   $('.box').animate({top:-bxht*3+'px'},700,function(){flage=true;
	   $('.kongjianqwe').animate({top:'0',opacity:'1'},700);$('.nngliqwe').animate({top:'0',opacity:'1'},1000);$('.yingyimqwe').animate({top:'0',opacity:'1'},1300);$('.spaciousspaceqwe').animate({bottom:'60px',opacity:'1'},1000);
	   });
	   $('.up').css({display:'block'}).attr({src:'../picture/upbai.png'});
	   $('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvgbai.svg');
	   $('.leftcolumn>div').eq(3).css({outline:'2px solid black',background:'black'}).siblings('div').css({outline:'0px solid black',background:'black'});
	   $('.leftcolumn>span').eq(3).css({opacity:'1',color:'black'}).siblings('span').css({opacity:'0',color:'black'});
   }
   //第四块结束
   function mileageEnd(){
	  $('.kongjianqwe').animate({top:'80px',opacity:'0'},700);
	  $('.nngliqwe').animate({top:'80px',opacity:'0'},700);
	  $('.yingyimqwe').animate({top:'80px',opacity:'0'},700);
	  $('.spaciousspaceqwe').animate({bottom:'0px',opacity:'0'},700);
   }
   //第五块开始
   function automaticdriStart(){
	   var bxht = parseInt($('.box').css('height')); 
	    $('.box').animate({top:-bxht*4+'px'},700,function(){flage=true;$('.autdbot').animate({bottom:'20px',opacity:'1'},700);$('.atplatex').animate({left:'150px',opacity:'1'},700);});
		$('.leftcolumn>div').eq(4).css({outline:'2px solid black',background:'black'}).siblings('div').css({outline:'0px solid black',background:'black'});
		$('.leftcolumn>span').eq(4).css({opacity:'1',color:'black'}).siblings('span').css({opacity:'0',color:'black'});
		$('.up').css({display:'block'}).attr({src:'../picture/uphei.png'});
		 $('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvg.svg');
   }
   //第五块结束动画
   function automaticdriEnd(){
	   $('.autdbot').animate({bottom:'-50px',opacity:'0'},700);
	   $('.atplatex').animate({left:'50px',opacity:'0'},700);
   }
	//第六块开始
	function performanceStart(){
		var bxht = parseInt($('.box').css('height'));
		$('.box').animate({top:-bxht*5+'px'},700,function(){flage=true;
		$('.manim').animate({opacity:'1',bottom:'100px'},700);
		$('.rformtex').animate({opacity:'1'},700);
		});
		 $('.up').css({display:'block'}).attr({src:'../picture/uphei.png'});
		  $('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvg.svg');
		  $('.leftcolumn>div').eq(5).css({outline:'2px solid white',background:'white'}).siblings('div').css({outline:'0px solid white',background:'white'});
		  $('.leftcolumn>span').eq(5).css({opacity:'1',color:'white'}).siblings('span').css({opacity:'0',color:'white'});
	}
   //第六块结束
   function performanceEnd(){
	    $('.manim').animate({opacity:'0',bottom:'0'},700);
	    $('.rformtex').animate({opacity:'0'},700);
   }
   //第七快开始
   function iNteriorStart(){
	   		var bxht = parseInt($('.box').css('height'));
		$('.box').animate({top:-bxht*6+'px'},700,function(){flage=true;$('.teritex>div').animate({bottom:'00px',opacity:'1'},700);$('.teriigrx').animate({right:'50px',opacity:'1'},700);});
		$('.up').css({display:'block'}).attr({src:'../picture/upbai.png'});
		$('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvgbai.svg');
		$('.leftcolumn>div').eq(6).css({outline:'2px solid white',background:'white'}).siblings('div').css({outline:'0px solid white',background:'white'});
		$('.leftcolumn>span').eq(6).css({opacity:'1',color:'white'}).siblings('span').css({opacity:'0',color:'white'});
   }
   //第七快结束
   function iNteriorEnd(){
	  $('.teritex>div').animate({bottom:'-150px',opacity:'0'},700);
	  $('.teriigrx').animate({right:'-150px',opacity:'0'},700); 
   }
   //第8快开始
   function specificationStart(){
	  var bxht = parseInt($('.box').css('height'));
	  $('.box').animate({top:-bxht*7+'px'},700,function(){flage=true;$('.speciimg>img').animate({opacity:'1'},900);$('.spectex').animate({right:'0',opacity:'1'},700);}); 
	  $('.up').css({display:'block'}).attr({src:'../picture/upbai.png'});
	  $('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvgbai.svg');
	  $('.leftcolumn>div').eq(7).css({outline:'2px solid white',background:'white'}).siblings('div').css({outline:'0px solid white',background:'white'});
	  $('.leftcolumn>span').eq(7).css({opacity:'1',color:'white'}).siblings('span').css({opacity:'0',color:'white'});
   }
   //第8快结束
   function specificationEnd(){
	    $('.speciimg>img').animate({opacity:'0'},700);
		$('.spectex').animate({right:'-100px',opacity:'0'},700);
   }
   //第9快开始
   function orderStart(){
	   var bxht = parseInt($('.box').css('height'));
	   $('.box').animate({top:-bxht*8+'px'},700,function(){flage=true;$('.order>img').animate({right:'0',opacity:'1'},700)});
	   $('.logo').css({position:'fixed',top:'0'}).find('img').attr('src','../picture/tslsvgbai.svg');
	   $('.up').css({display:'block'}).attr({src:'../picture/upbai.png'});
	   $('.leftcolumn>div').eq(8).css({outline:'2px solid white',background:'white'}).siblings('div').css({outline:'0px solid white',background:'white'});
	   $('.leftcolumn>span').eq(8).css({opacity:'1',color:'white'}).siblings('span').css({opacity:'0',color:'white'});
   }
   //第9快结束
   function orderEnd(){
	   $('.order>img').animate({right:'-250px',opacity:'0'},700);
   }
   
	//预约试驾
	$('.testdrive').click(function(){yuuesj();})//预约试驾click
	$('.spacleft>div').click(function(){yuuesj();});
	//跳转预约试驾
	function yuuesj(){
		$(location).attr('href','./bookingatestdrive.html');
	};
	
	//第九快点击事件
	$('.ectexhea>div').click(function(){
		$(this).css({borderColor:'white'}).siblings().css({borderColor:'#393C41'});
		console.log($(this).index());
		if(($(this).index())==1){
			$('.ctexjs').html('2.8 秒 0-100 公里/小时');
			$('.ctexgl').html('600 公里');
			$('.ctexqk').html('2,494 kg');
		}else{
			$('.ctexjs').html('4.6 秒 0-100 公里/小时');
			$('.ctexgl').html('605 公里');
			$('.ctexqk').html('2,466 kg');
		}
	});//第九快点击事件
})//jquery

//禁止滚动鼠标控制body
document.documentElement.style.overflow='hidden';
var move=function(e){
e.preventDefault && e.preventDefault();
e.returnValue=false;
e.stopPropagation && e.stopPropagation();
return false;
    }
    var keyFunc=function(e){
if(37<=e.keyCode && e.keyCode<=40){
return move(e);
 }
}