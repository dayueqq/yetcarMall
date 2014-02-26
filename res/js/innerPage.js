//商品选择器鼠标hover效果
function addOutLine(strID_1,strID_2){
	var a = document.getElementById(strID_1);
	a.style.border = "2px solid #e3383b";
	var b = document.getElementById(strID_2);
	b.style.background = "url('../res/img/shortcut-check-22-23.png') no-repeat";
}
function removeOutLine(strID_1,strID_2){
	var a = document.getElementById(strID_1);
	if(!(a.className=="item selected")){
		a.style.border = "2px solid #ccc";
		var b = document.getElementById(strID_2);
		b.style.background = "url('../res/img/shortcut-check-hui-22-23.png') no-repeat";
	}
}
//商品类型选择，模拟单选按钮的效果
function checkItem(strID_1,strID_2,strID_3){
	//取消原有被选中的款式的样式
	var a = document.getElementsByClassName("item selected");
	var b = document.getElementsByClassName("checked");
	var d = document.getElementsByClassName("item_type_checked");
	a[0].style.border = "2px solid #ccc";
	b[0].style.background = "url('../res/img/shortcut-check-hui-22-23.png') no-repeat";
	a[0].className = "item";
	b[0].className = "unchecked";
	d[0].className = "item_type_unchecked";
	//添加点击选择的款式的样式
	var c = document.getElementById(strID_1);
	var d = document.getElementById(strID_2);
	var e = document.getElementById(strID_3);
	c.className = "item selected";
	d.className = "checked";
	e.className = "item_type_checked";
	d.style.background = "url('../res/img/shortcut-check-22-23.png') no-repeat";
}
//商品数量修改
function minus(){
	if($("#num").val() != 1)
	$("#num").val($("#num").val()-1);
	else if($("#num").val() === 1)
	$('#min').attr('disabled',"true");
}
function add(){
	var tmp = parseInt($("#num").val())+1;
	$("#num").val(tmp);
}

//商品缩略图修改
function picOver(strID){
	var a = document.getElementById('pic-preview');
	var b = document.getElementById(strID);
	a.src = "../res/img/test/test-pic-436-377-"+strID+".jpg";
}
//商品缩略图向左移动
function picMoveLeft(){
	var a = document.getElementById("pic-small-list");
	var b = $(a).position().left;
	var e = $(a).width();
	var f = -b;
	var g = e - f;
	if( g > 310){
		var d = b - 61;
		$(a).css({ left:b}).stop().animate({ left:d }, { duration: 400 });
	}
	else{
		$("#picMoveLeft").css("disable","true");
	}
}
//商品缩略图向右移动
function picMoveRight(){
	var a = document.getElementById("pic-small-list");
	var b = $(a).position().left;
	var e = $(a).width();
	var f = e - 310;
	if( b < -30){
		var d = b + 60;
		$(a).css({ left:b}).stop().animate({ left:d }, { duration: 400 });
	}
	else if(b >= -30){
		$("#picMoveRight").attr("disable","true");
	}
}
//商品介绍选项卡切换
function changeTab(strID_1,strID_2){
	var a = $("#mt-nav-list").children().length;
	var b = document.getElementById(strID_1);
	var c = document.getElementById(strID_2);
	for(i = 0; i < a; i++){
		var d = 'mt-nav-'+i;
		var e = 'mt-describe-'+i;
		var tmp1 = document.getElementById(d);
		var tmp2 = document.getElementById(e);
		tmp1.className = "mt_nav_tab_unselected";
		tmp2.className = "mt_describe";
	}
	b.className = "mt_nav_tab_selected";
	c.className = "mt_describe_selected";
}