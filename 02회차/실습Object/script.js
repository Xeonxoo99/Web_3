/*
	[진화과정은 다음과 같습니다.]
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. 이상해씨의 정보를 넣을 poke1 오브젝트 변수를 생성해주세요.
	2. poke1 오브젝트안에 키 값으로 name, level, cha를 만들어 각각에 맞는 HTML요소를 넣으세요.
	3. 만약 레벨이 10이상이면 1번 진화 
	4. 레벨이 20 이상이면 2번 진화하게 만드세요.
	5. 나머지 캐릭터도 동작하게 만들어주세요.
	
	if ( 이 안에 TRUE를 넣으면 중괄호안의 문구들이 발동함 ) {
		- 이미지 소스 변경 자바스크립트
		ID선택.src = '../url/url.png'
		background :url ('../url/url.png')
		
		- 캐릭터 이름도 같이 변경해주세요

	}

	- document.getElementById("id")를 사용하세요.
	- 완성되었다면 html에서 이상해씨, 파이리, 꼬부기 레벨을 바꿔보면서 제대로 작동하는지 확인해보세요.
*/

// 풀타입
var plant_name = document.getElementById('name1')
var plant_lv = parseInt(document.getElementById('level1').innerHTML)
var plant_img = document.getElementById('cha1')
// 불타입
var fire_name = document.getElementById('name2')
var fire_lv = parseInt(document.getElementById('level2').innerHTML)
var fire_img = document.getElementById('cha2')
// 물타입
var water_name = document.getElementById('name3')
var water_lv = parseInt(document.getElementById('level3').innerHTML)
var water_img = document.getElementById('cha3')

// 오브젝트 생성
var plant = {
	name : plant_name,
	lv : plant_lv,
	img : plant_img
}
console.log(plant)
var fire = {
	name : fire_name,
	lv : fire_lv,
	img : fire_img
}
var water = {
	name : water_name,
	lv : water_lv,
	img : water_img
}

function change_poket(){
	if(plant_lv < 10){
		plant.img.src = 'icon01.png'
		plant.name.innerHTML = '이상해씨'
	}
	else if(plant_lv > 10 && plant_lv < 21){
		plant.img.src = 'icon01_2.png'
		plant.name.innerHTML = '이상해풀'
	}
	else if (plant_lv > 20){
		plant.img.src = 'icon01_3.png'
		plant.name.innerHTML = '이상해꽃'
	}
}

function change_poket2(){
	if(fire_lv < 10){
		fire.img.src = 'icon02.png'
		fire.name.innerHTML = '파이리'
	}
	else if(fire_lv > 10 && fire_lv < 21){
		fire.img.src = 'icon02_2.png'
		fire.name.innerHTML = '리자드'
	}
	else if (fire_lv > 20){
		fire.img.src = 'icon02_3.png'
		fire.name.innerHTML = '리자몽'
	}
}

function change_poket3(){
	if(water_lv < 10){
		water.img.src = 'icon03.png'
		water.name.innerHTML = '꼬부기'
	}
	else if(water_lv > 10 && water_lv < 21){
		water.img.src = 'icon03_2.png'
		water.name.innerHTML = '어니부기'
	}
	else if (water_lv > 20){
		water.img.src = 'icon03_3.png'
		water.name.innerHTML = '거북왕'
	}
}

change_poket()
change_poket2()
change_poket3()