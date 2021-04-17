$(function(){
	 var storage = window.localStorage;
	//登录判断账户密码是否正确
	$('.subdls').click(function(){
		console.log(storage.zhanhu,storage.mima)
		if(($('.dzyoxtex').val()==storage.zhanhu)&&($('#paswd').val()==storage.mima)){
			Popup('登录成功！网页将在2S后跳转');
			setTimeout(function(){
				$(location).attr('href','../index.html');//跳转至首页
			},2000)
		}else{
			Popup('账户或密码错误！');
		}
	});
	$('.subqxs').click(function(){
		history.go(-1);
	});
	$('.subcjzh').click(function(){
		$(location).attr('href','./createanaccount.html');
	});	
	var kjbj =0;
	$('#paswd').focus(function(){
		$('#iesya').animate({opacity:'1'})
	})
	$('#iesya').click(function(){
		kjbj+=1;
		if(kjbj%2==0){
			$('#paswd').attr('type','password');
		}else{
			$('#paswd').attr('type','text');
		}
	})
	
	//弹窗函数
	function Popup(wenben){
		$('.sitis').fadeIn(300).text(wenben).delay(2000).fadeOut();
	}
})
document.querySelector('#form2').addEventListener('submit',function(e){e.preventDefault();},false);

