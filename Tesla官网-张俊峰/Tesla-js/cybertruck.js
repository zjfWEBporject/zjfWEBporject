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
	})
	var flage=true;
	//滚顶条滚动事件
	$(document).mousewheel(function(even){
		//向下滑动
		if(event.deltaY>0){
			//吸顶导航
			if(scrollY>=750){
				$('.headnavigationbar').css({position:'fixed',background:'rgba(34,34,34,.9)'})
				$('.model').css({display:'none'})
				$('.cylidg').css({display:'block'});
				$('.onlinestore').css({display:'none'});
				$('.clicksidebar').css({display:'none'});
			}
			
			if(flage){//flage
				flage=false;
				//第一张图片
				if(scrollY>=0&&scrollY<=549){
					$('.cqwaiguge').animate({top:'30px',opacity:'1'},1000,function(){flage=true;});
				}
				//第一段文字
				if(scrollY>=350&&scrollY<950){
					$('.wgugtex').animate({top:'680px',opacity:'1'},1000,function(){flage=true;});	
				}
				//第二张图片
				if(scrollY>=750&&scrollY<1500){
					$('.ledbxg').animate({top:'850px',opacity:'1'},1000,function(){flage=true;});
				}
				//第二段文字
				if(scrollY>=1500&&scrollY<18500){
					$('.stainlesssteel').animate({top:'1500px',opacity:'1'},1000,function(){flage=true});	
				}
				//第三张图片
				if(scrollY>=1850&&scrollY<2750){
					$('.superglass').animate({top:'1600px',opacity:'1'},1000,function(){flage=true});
				}
				//第三段文字
				if(scrollY>=2200&&scrollY<2750){
					$('.glastex').animate({top:'2250px',opacity:'1'},1000,function(){flage=true});
				}
				
			}//flage
		}//向下滚动

		//向上滚动
		if(event.deltaY<0){
			//吸顶导航
			if(scrollY<=749){
				$('.headnavigationbar').css({position:'absolute',background:'transparent'})
				$('.cylidg').css({display:'none'});
				$('.onlinestore').css({display:'block'});
				$('.clicksidebar').css({display:'block'});
				$('.model').css({display:'block'});
			}//吸顶导航
			//第一张图片消失
			if(scrollY<350){
				$('.cqwaiguge').css({top:'130px',opacity:'0'});flage=true;
			}
			//第一断文字消失
			if(scrollY<580){
				$('.wgugtex').css({top:'780px',opacity:'0'});flage=true;
			}
			//第二张图片消失
			if(scrollY<750){
				$('.ledbxg').css({top:'950px',opacity:'0'});flage=true;
			}
			//第二段文字消失
			if(scrollY<1500){
				$('.stainlesssteel').css({top:'1600px',opacity:'0'});flage=true;
			}
			//第三至图片消失
			if(scrollY<1800){
				$('.superglass').css({top:'1700px',opacity:'0'});flage=true;
			}
			//第三段文字消失
			if(scrollY<2300){
				$('.glastex').css({top:'2450px',opacity:'0'});flage=true;
			}
			
			
		}//向上滚动
		
		console.log(scrollY)
	})//滚动事件
	
	//轮播图
	var tslbnm=0;
	var flage=true;
	var time= setInterval(ionalit,3000);
	$('.functionality').mouseover(function(){clearInterval(time)});
	$('.functionality').mouseout(function(){time=setInterval(ionalit,3000)});
	
	
		$('.unctilef').click(function(){
			if(flage){
				flage=false;
				ionalit()
			}
			});
		$('.unctirig').click(function(){
			if(flage){
				flage=false;
				infan()
			}
			})
	
	
	
	function ionalit(){
		tslbnm++;
		$('.ional').animate({left:-1440*tslbnm+'px'},500,function(){
			if(tslbnm>=7){
				tslbnm=1;
				$('.ional').css({left:'-1440px'})
			}flage=true;
		})
	}
	function infan(){
		flage=false;
		tslbnm--;
		$('.ional').animate({left:-1440*tslbnm+'px'},500,function(){
			if(tslbnm<=0){
				tslbnm=7;
				$('.ional').css({left:-1440*6+'px'})
			}flage=true;
		})
	}
	
	
	// 规格 电机切换文字  点击事件
	$('#inglemotor').click(function(){
		$('#inglemotor>div>span').css({background:'white'});
		$('#doublemotor>div>span').css({background:'black'});
		$('#threemotors>div>span').css({background:'black'});
		$('#milesperhour').html('&lt;6.5秒');
		$('#mileage').html('250+ 英里（EPA 预估）');
		$('#power').html('后轮驱动');
		$('#traction').html('7,500+ 磅');
	});
	$('#doublemotor').click(function(){
		$('#inglemotor>div>span').css({background:'black'});
		$('#doublemotor>div>span').css({background:'white'});
		$('#threemotors>div>span').css({background:'black'});
		$('#milesperhour').html('&lt;4.5秒');
		$('#mileage').html('300+ 英里（EPA 预估）');
		$('#power').html('双电机全轮驱动');
		$('#traction').html('10,000+ 磅');
	});
	$('#threemotors').click(function(){
		$('#inglemotor>div>span').css({background:'black'});
		$('#doublemotor>div>span').css({background:'black'});
		$('#threemotors>div>span').css({background:'white'});
		$('#milesperhour').html('&lt;2.9秒');
		$('#mileage').html('500+ 英里（EPA 预估）');
		$('#power').html('三电机全轮驱动');
		$('#traction').html('14,000+ 磅');
	});
	
})