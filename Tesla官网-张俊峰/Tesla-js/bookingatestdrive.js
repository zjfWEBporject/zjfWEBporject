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
	
	//聚焦事件
	$('input').focus(function(){
		$(this).css({border:'1px solid #CBB9B9'});$('.bkingalt').css({display:'none'})});
	$('select').focus(function(){$(this).css({border:'1px solid #CBB9B9'});$('.bkingalt').css({display:'none'})});
	//失焦事件
	$('input').blur(function(){
		$('input').css({border:'1px solid transparent'});})
	$('select').blur(function(){$('select').css({border:'1px solid transparent'});
	})
	$('.appointment').click(function(){
		if($('.hqtslxxs').prop('checked')){
			$(location).attr('href','./signin.html');
		}
	});
	//姓氏表单验证
	$('#bkxins').blur(function(){
		if(! $('.xinshi').val()){
			bkalt('姓氏不能为空');
		}
	})
	//名字表单验证
	$('#bknam').blur(function(){
		if(! $('.xinshi').val()){
			bkalt('名字不能为空');
		}
	})
	var emygzs = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
	//电子邮箱正则验证
	$('#boeml').blur(function(){
		if(! emygzs.test($('#boeml').val())){
			bkalt('请输入有效的邮箱');
		}
	})
	var pons = /^1[3456789]\d{9}$/;
	//电话正则验证
	$('#bopon').blur(function(){
		if(!pons.test($('#bopon').val())){
			bkalt('请输入有效的电话号码');
		}
	})
	//弹窗函数
	function bkalt(baoc){
		$('.bkingalt').css({display:'block'}).text(baoc)
	}
})


document.querySelector('#form1').addEventListener('submit',function(e){e.preventDefault();},false);
