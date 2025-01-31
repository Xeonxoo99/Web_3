var level1 = document.getElementById('level1')
var lv_num1 = parseInt(level1.innerHTML)
console.log(lv_num1)
var level2 = document.getElementById('level2')
var lv_num2 = parseInt(level2.innerHTML)
console.log(lv_num2)
var level3 = document.getElementById('level3')
var lv_num3 = parseInt(level3.innerHTML)
console.log(lv_num3)


function lv1(){
	if(lv_num1 < 10){
		document.getElementById('cha1').src = 'icon01.png'
		document.getElementById('name1').innerHTML = '이상해씨'
	}
	else if(lv_num1 > 10 && lv_num1 < 20){
		document.getElementById('cha1').src = 'icon01_2.png'
		document.getElementById('name1').innerHTML = '이상해풀'
	}
	else if(lv_num1 >= 20){
		document.getElementById('cha1').src = 'icon01_3.png'
		document.getElementById('name1').innerHTML = '이상해꽃'
	}
}

function lv2(){
	if(lv_num2 < 10){
		document.getElementById('cha2').src = 'icon02.png'
		document.getElementById('name2').innerHTML = '파이리'
	}
	else if(lv_num2 > 10 && lv_num2 < 20){
		document.getElementById('cha2').src = 'icon02_2.png'
		document.getElementById('name2').innerHTML = '리자드'
	}
	else if(lv_num2 >= 20){
		document.getElementById('cha2').src = 'icon02_3.png'
		document.getElementById('name2').innerHTML = '리자몽'
	}
}


function lv3(){ 
	if(lv_num3 < 10){
		document.getElementById('cha3').src = 'icon03.png'
		document.getElementById('name3').innerHTML = '꼬부기'
	}
	else if(lv_num3 > 10 && lv_num3 < 20){
		document.getElementById('cha3').src = 'icon03_2.png'
		document.getElementById('name3').innerHTML = '어니부기'
	}
	else if(lv_num3 >= 20){
		document.getElementById('cha3').src = 'icon03_3.png'
		document.getElementById('name3').innerHTML = '거북왕'
	}
}


lv1() 
lv2() 
lv3() 