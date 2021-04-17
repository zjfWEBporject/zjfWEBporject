$(function(){
	//图片显示
	var storage = window.localStorage;
	$('.kamlcar').attr('src',storage.carimgs)
	//账户类型切换
	$('.rsons').click(function(){
		$(this).find('p').css({display:'block'}).parent('.rsons').siblings('.rsons').find('p').css({display:'none'});
		if($(this).index()==2){
			$('.gonsi').css({display:'block'});
			$('.persgr').animate({height:'520px'});
		}else{
			$('.gonsi').css({display:'none'});
			$('.persgr').animate({height:'320px'});
		}
	})
	//证件类型切换
	$('.preselt').change(function(){
		if($('.preselt').val()==0){
			$('.zenlei').text('身份证号');
		}else if($('.preselt').val()==1){
			$('.zenlei').text('出入境登记证号');
		}else{
			$('.zenlei').text('护照号');
		}
	});
	//表单聚焦失焦事件
	$('input').focus(function(){
		$(this).css({border:'1px solid #ccc'});
		$('.erroralrt').css({display:'none'});
	})
	$('input').blur(function(){
		$(this).css({border:'1px solid transparent'});
	})
	//名字表单验证
	$('.minname').blur(function(){
		if(! $(this).val()){
			erasd('姓名包含无效字符')
		}
	})
	//姓氏表单验证
	$('.xins').blur(function(){
		if(! $(this).val()){
			erasd('姓氏包含无效字符')
		}
	})
	//电子邮箱表单判断
	$('.emlbd').blur(function(){
		var emygzs = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
		if(! emygzs.test($(this).val())){
			erasd('电子邮件地址无效')
		}
	})
	//电话表单验证
	$('.ponbd').blur(function(){
		var dabds = /^1[3456789]\d{9}$/;
		if(! dabds.test($(this).val())){
			erasd('电话号码格式不正确')
		}
	})
	//证件表单验证
	$('.zhejibd').blur(function(){
		if($('.preselt').val()==0){
			var sfzgz =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		if(! sfzgz.test($(this).val())){
			erasd('证件号码格式不正确')
			}
		}
	})
	
	//错误弹窗
	function erasd(oiuh){
		$('.erroralrt').text(oiuh).css({display:'block'});
	}
	//支付点击事件
	$('.payment>div').click(function(){
		$(this).css({opacity:'1'}).siblings().css({opacity:'0.4'})
	})
	
})