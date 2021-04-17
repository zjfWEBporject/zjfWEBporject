$(function(){
	var flage=true;
	  // 侧边栏点击事件
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
		  }else{ 
			  //点击变换
			  $('.sidebarcenter').css({opacity:'0',transition:'1s'});
			  $('.sidebartop').css({transform:'rotate(45deg)',top:'7px',transition:'1s'});
			  $('.sidebarbottom').css({transform:'rotate(-45deg)',bottom:'7px',transition:'1s'});
			  $('.greycloth').css({display:'block'});
			  $('.sidebar').css({right:'0',transition:'1s'});
		  }
	  })
	  
	  //滚动条滚动事件
	 $(document).mousewheel(function(even){
		 var mdy = parseInt($('.inboex').css('top'));
		 var bxht = parseInt($('.inboex').css('height'));
	   if(flage){	
		   //解决点击重复
			flage=false;
			if(event.deltaY>0){
				if(mdy<=0&&mdy>(-bxht)){
					modb();
				}
				if(mdy<=(-bxht)&&mdy>(-bxht*2)){
					modc();
				}
				if(mdy<=(-bxht*2)&&mdy>(-bxht*3)){
					modd();
				}
				if(mdy<=(-bxht*3)&&mdy>(-bxht*4)){
					mode();
				}
				if(mdy<=(-bxht*4)&&mdy>(-bxht*5)){
					modf();
				}
				if(mdy<=(-bxht*5)&&mdy>(-bxht*6)){
					$('.inboex').animate({top:-bxht*5+'px'},100,function(){flage=true;});
				}
			}
		if(event.deltaY<0){
			if(mdy<=0&&mdy>(-bxht)){
				$('.inboex').animate({top:'0px'},100,function(){flage=true;});
			}
			if(mdy<=(-bxht)&&mdy>(-bxht*2)){
				moda();
			}
			if(mdy<=(-bxht*2)&&mdy>(-bxht*3)){
				modb();
			}
			if(mdy<=(-bxht*3)&&mdy>(-bxht*4)){
				modc();
			}
			if(mdy<=(-bxht*4)&&mdy>(-bxht*5)){
				modd();
			}
			if(mdy<=(-bxht*5)&&mdy>(-bxht*6)){
				mode();
			}
		}
		 }
		 
		 
	  })	
	//第一块
	function moda(){
		var bxht = parseInt($('.inboex').css('height'));
		$('.inboex').animate({top:'0px'},700,function(){flage=true;});
		$('.platetitletext').animate({opacity:'0'},400,function(){$('.platetitletext').animate({opacity:'1'},400).text('Model 3')});
		$('.platebottom').animate({opacity:'0'},400,function(){$('.platebottom').animate({opacity:'1'})});
		$('.customized').text('定制我的 Model 3');
		$('.understand').text('了解 Model 3');
	}
		
	//第二块开始
	function modb(){
		var bxht = parseInt($('.inboex').css('height'));
		$('.inboex').animate({top:-bxht+'px'},700,function(){flage=true;});
		//切换文字
		$('.platetitletext').animate({opacity:'0'},400,function(){$('.platetitletext').animate({opacity:'1'},400).text('Model S')});
		$('.platebottom').animate({opacity:'0'},400,function(){$('.platebottom').animate({opacity:'1'})});
		$('.customized').text('定制我的 Model S');
		$('.understand').text('了解 Model S');
	}
	//第三块
	function modc(){
		var bxht = parseInt($('.inboex').css('height'));
		$('.inboex').animate({top:-bxht*2+'px'},700,function(){flage=true;});
		$('.platetitletext').animate({opacity:'0'},400,function(){$('.platetitletext').animate({opacity:'1'},400).text('Model X')});
		$('.platebottom').animate({opacity:'0'},400,function(){$('.platebottom').animate({opacity:'1'})});
		$('.customized').text('定制我的 Model X');
		$('.understand').text('了解 Model X');
	}
	//第四块
	function modd(){
		var bxht = parseInt($('.inboex').css('height'));
		$('.inboex').animate({top:-bxht*3+'px'},700,function(){flage=true;});
		$('.platetitletext').animate({opacity:'0'},400,function(){$('.platetitletext').animate({opacity:'1'},400).text('Model Y')});
		$('.platebottom').animate({opacity:'0'},400,function(){$('.platebottom').animate({opacity:'1'})});
		$('.customized').text('定制我的 Model Y');
		$('.understand').text('了解 Model Y');
	}
	//第5快
	function mode(){
		var bxht = parseInt($('.inboex').css('height'));
		$('.inboex').animate({top:-bxht*4+'px'},700,function(){flage=true;});
		$('.platetitletext').animate({opacity:'0'},400,function(){$('.platetitletext').animate({opacity:'1'},400).text('太阳能设备和 Powerwall').css({width:'500px',left:'calc(50% - 250px)'})});
		$('.understand').animate({opacity:'0'});
		$('.platebottom').animate({opacity:'0'},400,function(){$('.platebottom').animate({opacity:'1'},400).css({left:'calc(50% - 125px)'}).find('.customized').text('了解更多')});
		$('.bookingatestdrive').text('全方位能源供应').css({borderBottom:'0',cursor:'default',width:'100px',left:'calc(50% - 50px)'});
	}
	//6快
	function modf(){
		var bxht = parseInt($('.inboex').css('height'));
		$('.inboex').animate({top:-bxht*5+'px'},700,function(){flage=true;});
		$('.platetitletext').animate({opacity:'0'},400,function(){$('.platetitletext').animate({opacity:'1'},400).text('充电产品和精品配件').css({width:'400px',left:'calc(50% - 200px)'})});
		$('.understand').animate({opacity:'0'});
		$('.platebottom').animate({opacity:'0'},400,function(){$('.platebottom').animate({opacity:'1'},400).css({left:'calc(50% - 135px)'}).find('.customized').text('立即购买')});
		$('.keeponrecord').animate({opacity:'1'},1200).css({cursor:'pointer'});
		$('.bookingatestdrive').animate({opacity:'0'},600);
	}
})