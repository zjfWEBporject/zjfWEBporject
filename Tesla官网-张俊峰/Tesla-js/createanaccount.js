$(function(){
	var storage = window.localStorage;
	console.log(storage)
	//聚焦显示边框
	$('#form3>input').focus(function(){
		$(this).css({borderColor:'#171a20'});
	})
	$('#form3>input').blur(function(){
		$(this).css({borderColor:'transparent'});
	})
	//鼠标移入密码提示
	$('#hovss').mousemove(function(){
		$('.hoezy').fadeIn(300).text('请输入有效密码。至少6个字符，至多18个字符');
	})
	$('#hovss').mouseout(function(){
		$('.hoezy').fadeOut(300)
	})
	//更改密码框type类型
	var mikjbj =0;
	$('#crxspaswdma').click(function(){
		mikjbj+=1;
		if(mikjbj%2==0){
			$('#crepaswd').attr('type','password');
		}else{
			$('#crepaswd').attr('type','text');
		}
	})
	
	//登录跳转
	$('.sifnsgs').click(function(){
		$(location).attr('href','./signin.html');
	})
	//验证码随机
	var ncods =0;
	var yzval;
	$('.verificationcode').click(function(){
		ncods++;
		$(this).find('img').attr('src','../picture/c'+ncods+'yzm.svg');
		if(ncods>=4){
			ncods=-1
		}
		switch(ncods){
			case 0:
			yzval='sbs6f'
			break;
			case 1:
			yzval='bhl2ak'
			break;
			case 2:
			yzval='frfdea'
			break;
			case 3:
			yzval='leyuv'
			break;
			case 4:
			yzval='n8ry'
			break;
		}
	})
	//创建账户
	$('.establish').click(function(){
		Namenull();
		SurnameNull();
		HoezyNull();
		PswdNull();
		Chekdnull();
		YanzmNull(yzval);
		if(Adopts){
			storage['zhanhu'] = $('.emodzyx').val();
			storage['mima'] =$('#crepaswd').val();
			//window.localStorage.setItem(zhval,miaval)//传入邮箱和密码到本地缓存
			Popup('创建成功');
			setTimeout(function(){
				$(location).attr('href','./signin.html');//跳转登陆界面
			},2000)
		}
	})
	$('input').change(function(){
		Adopts=true;
	})
	$('#cebxbixs').change(function(){
		Adopts=true;
	})
	//取消按钮
	$('.cancel').click(function(){
		history.go(-1)
	})
	
	var Adopts=true;
	//名字不能为空
	function Namenull(){
		if(Adopts){
			if($('.NameNull').val()==''){
				Popup('名字不能为空');
				Adopts=false;
			}else{
				Adopts=true;
			}	
		}
	}
	//姓氏不能为空
	function SurnameNull(){
		if(Adopts){
			if($('.Surname').val()==''){
				Popup('姓氏不能为空');
				Adopts=false;
			}else{
				Adopts=true;
			}
		}
		
	}
	
	function HoezyNull(){
		//电子邮箱正则表达式
		var emygzs = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
		if(Adopts){
			if(! emygzs.test($('.emodzyx').val())){
				Popup('请输入有效的邮箱账号');
				Adopts=false;
			}else{
				Adopts=true;
			} 

		}
		//邮箱不正确时
	}
	function PswdNull(){
		//6-12位密码字母数字下划线
		var rules = /^[\w]{6,18}$/;
		if(Adopts){
			if(! rules.test($('#crepaswd').val())){//不正确密码格式
			Popup('请输入有效密码。至少6个字符，至多18个字符')
			$('#crxspaswdma').fadeIn(200);
			Adopts=false;
			}else{
			$('#crxspaswdma').fadeOut(200);
			Adopts=true;
		}	
		}
			
	}
	//复选框是否选中
	function Chekdnull(){
		if(Adopts){
			if(! $('#cebxbixs').is(':checked')){
				Popup('请勾选Tesla专有声明和使用条款');
				Adopts=false;
			}else{
				Adopts=true;
			}
		}

	}
	//验证码验证
	function YanzmNull(yzval){
		if(Adopts){
			if(!($('.yanzm').val()==yzval)){
				Popup('输入的验证码有误');
				Adopts=false;
			}else{
				Adopts=true;
			}
		}
		
	}
	//弹窗函数
	function Popup(wenben){
		$('.hoezy').fadeIn(300).text(wenben).delay(2000).fadeOut();
		Adopts=false;
	}
	

})