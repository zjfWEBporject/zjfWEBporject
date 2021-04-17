$(function(){
	 var storage = window.localStorage;
		if(storage.modnum1>0){
			// 创建标签
			var tsbx =$('<div></div>').addClass('tslmd');
			var tsig =$('<div></div>').addClass('tslimg').css({background:'url('+ storage.modimg1 +') no-repeat center center',backgroundSize:'100%'});
			var carp =$('<p>Model S 1:18 汽车模型</p>').addClass('carmodel');
			var spmy =$('<span>¥ 1,499.00</span>').addClass('carmony');
			var moht =$('<h2>颜色：'+ storage.molcor1 +'</h2>').addClass('modcol');
			var mdhe =$('<h3>大小：无</h3>').addClass('modsiz');
			var mdnm =$('<h4>数量：</h4>').addClass('modnum');
			var mdnp =$('<p>'+storage.modnum1+'</p>').addClass('modnump');
			var care =$('<h5> | </h5>').addClass('carrvme');
			var vmea =$('<a>编辑</a>').attr('href','productdetails.html').addClass('carrvmea');
			var reme =$('<span>移除</span>').addClass('carrvmespan').click(function(){$('.tslmd').remove('div:first');storage.removeItem('modimg1');storage.removeItem('modnum1');storage.removeItem('molcor1');xijisuan();notsp();});
			$('.modcarprice').append(tsbx);
			tsbx.append(tsig);
			tsig.after(carp);
			carp.after(spmy);
			spmy.after(moht);
			moht.after(mdhe);
			mdhe.after(mdnm);
			mdnm.append(mdnp)
			mdnm.after(care);
			care.prepend(vmea);
			care.append(reme);
			//创建标签
		}		
	if(storage.modnum2){
		// 创建标签
		var tsbx =$('<div></div>').addClass('tslmd');
		var tsig =$('<div></div>').addClass('tslimg').css({background:'url('+ storage.modimg2 +') no-repeat center center',backgroundSize:'100%'});
		var carp =$('<p>Model S 1:18 汽车模型</p>').addClass('carmodel');
		var spmy =$('<span>¥ 1,499.00</span>').addClass('carmony');
		var moht =$('<h2>颜色：'+ storage.molcor2 +'</h2>').addClass('modcol');
		var mdhe =$('<h3>大小：无</h3>').addClass('modsiz');
		var mdnm =$('<h4>数量：</h4>').addClass('modnum');
		var mdnp =$('<p>'+storage.modnum2+'</p>').addClass('modnump');
		var care =$('<h5> | </h5>').addClass('carrvme');
		var vmea =$('<a>编辑</a>').attr('href','productdetails.html').addClass('carrvmea');
		var reme =$('<span>移除</span>').addClass('carrvmespan').click(function(){$('.tslmd').remove('div:first');storage.removeItem('modimg2');storage.removeItem('modnum2');storage.removeItem('molcor2');xijisuan();notsp();notsp();});
		$('.modcarprice').append(tsbx);
		tsbx.append(tsig);
		tsig.after(carp);
		carp.after(spmy);
		spmy.after(moht);
		moht.after(mdhe);
		mdhe.after(mdnm);
		mdnm.append(mdnp)
		mdnm.after(care);
		care.prepend(vmea);
		care.append(reme);
		//创建标签
	}	
	if(storage.modnum3){
		// 创建标签
		var tsbx =$('<div></div>').addClass('tslmd');
		var tsig =$('<div></div>').addClass('tslimg').css({background:'url('+ storage.modimg3 +') no-repeat center center',backgroundSize:'100%'});
		var carp =$('<p>Model S 1:18 汽车模型</p>').addClass('carmodel');
		var spmy =$('<span>¥ 1,499.00</span>').addClass('carmony');
		var moht =$('<h2>颜色：'+ storage.molcor3 +'</h2>').addClass('modcol');
		var mdhe =$('<h3>大小：无</h3>').addClass('modsiz');
		var mdnm =$('<h4>数量：</h4>').addClass('modnum');
		var mdnp =$('<p>'+storage.modnum3+'</p>').addClass('modnump');
		var care =$('<h5> | </h5>').addClass('carrvme');
		var vmea =$('<a>编辑</a>').attr('href','productdetails.html').addClass('carrvmea');
		var reme =$('<span>移除</span>').addClass('carrvmespan').click(function(){$('.tslmd').remove('div:first');storage.removeItem('modimg3');storage.removeItem('modnum3');storage.removeItem('molcor3');xijisuan();notsp();});
		$('.modcarprice').append(tsbx);
		tsbx.append(tsig);
		tsig.after(carp);
		carp.after(spmy);
		spmy.after(moht);
		moht.after(mdhe);
		mdhe.after(mdnm);
		mdnm.append(mdnp)
		mdnm.after(care);
		care.prepend(vmea);
		care.append(reme);
		//创建标签
	}	
//小计计算
function xijisuan(){
	$('.xiaoji').text('¥ '+(Number($('.modnump').eq(0).text()) + Number($('.modnump').eq(1).text()))*1499);
	$('.daze>span>p').text($('.xiaoji').text())
};xijisuan();
//商品为0时显示没有商品
function notsp(){
	if($('.tslmd').length<1){
		$('body>div').css({display:'none'});
		$('.nidgwc').text('您的购物车是空的。').append('<a></a>').find('a').text('继续购物').attr('href','./onlinestore.html');
		
	}
}

	//购买点击事件
	$('.buttijiao').click(function(){
		sume();tslname();phone();shen();cens();dizis();dizistwo();
	})
	
	$('#surname').blur(function(){sume()});
	//姓氏判断
	function sume(){
		if(!$('#surname').val()){
			$('#surname').next('span').css({display:'block'});
		}else{
			$('#surname').next('span').css({display:'none'});
		}
	}
	$('#tslname').blur(function(){tslname()});
	//名字判断
	function tslname(){
		if(!$('#tslname').val()){
			$('#tslname').next('span').css({display:'block'});
		}else{
			$('#tslname').next('span').css({display:'none'});
		}
	}
	$('#provlevel').blur(function(){shen()});
	//省份判断
	function shen(){
		if(!$('#provlevel').val()){
			$('#provlevel').next('span').css({display:'block'});
		}else{
			$('#provlevel').next('span').css({display:'none'});
		}
	}
	$('#citylevel').blur(function(){cens()});
	//城市判断
	function cens(){
		if(!$('#citylevel').val()){
			$('#citylevel').next('span').css({display:'block'});
		}else{
			$('#citylevel').next('span').css({display:'none'});
		}
	}
	$('#dizhi').blur(function(){dizis()});
	//地址验证
	function dizis(){
		if(!$('#dizhi').val()){
			$('#dizhi').next('span').css({display:'block'});
		}else{
			$('#dizhi').next('span').css({display:'none'});
		}
	}
	$('#dizhitwo').blur(function(){dizistwo()});
	function dizistwo(){
		if(!$('#dizhitwo').val()){
			$('#dizhitwo').next('span').css({display:'block'});
		}else{
			$('#dizhitwo').next('span').css({display:'none'});
		}
	}
	$('#telephones').blur(function(){phone()});
	//电话号码验证
	function phone(){
		var pons = /^1[3456789]\d{9}$/;
		if(!pons.test($('#telephones').val())){
			$('#telephones').next('span').css({display:'block'});
		}else{
			$('#telephones').next('span').css({display:'none'});
		}
	}
})