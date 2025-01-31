/*
	[진화과정은 다음과 같습니다.]
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. pokeName 변수(배열)를 생성
	2. pokeName 안에 ID값 name1, name2, name3를 가져오세요.
	- document.getElementById("id")를 사용하세요.

	3. pokeLevel 변수(배열)를 생성
	4. pokeLevel 안에 Class값 level1, level2, level3를 가져오세요.
	- document.getElementsByClassName("class")를 사용하세요.

	5. pokeImg변수(배열)를 생성
	6. pokeImg 안에 Class값 cha1, cha2, cha3를 가져오세요.
	- document.getElementsByClassName("class")를 사용하세요.

	7. 만약 레벨이 10이상이면 1번 진화 
	8. 레벨이 20 이상이면 2번 진화하게 만드세요.
	- 7번과 8번을 else if문으로 만들어주세요.

	9. 나머지 캐릭터도 동작하게 만들어주세요.

	10. 포켓몬 이미지를 클릭하면 레벨이 5씩 증가하게 만드세요.

	11. 만약 모두가 최종진화를 했다면 로고를 logo2.png로 바꾸세요.

*/

var name1 = document.getElementById('name1').innerHTML;
var name2 = document.getElementById('name2').innerHTML;
var name3 = document.getElementById('name3').innerHTML;
var pokeName = [name1, name2, name3];

var level1 = Number(document.getElementsByClassName('level1')[0].innerHTML)
var level2 = Number(document.getElementsByClassName('level2')[0].innerHTML)
var level3 = Number(document.getElementsByClassName('level3')[0].innerHTML)
var pokeLevel = [level1, level2, level3];
console.log(pokeLevel)
console.log(pokeLevel[0])

var cha1 = document.getElementsByClassName('cha1')[0]
var cha2 = document.getElementsByClassName('cha2')[0]
var cha3 = document.getElementsByClassName('cha3')[0]
var pokeImg = [cha1, cha2, cha3];

function change_poket() {
	if (pokeLevel[0] < 10) {
		cha1.src = 'icon01.png'
		pokeName[0] = '이상해씨'
		//DOM을 직접 업데이트해야 합니다. pokeName[0]을 변경했더라도, DOM의 내용은 자동으로 업데이트되지 않습니다. 따라서 document.getElementById()로 가져온 innerHTML 값을 수동으로 업데이트해야 합니다.
		document.getElementById('name1').innerHTML = pokeName[0];
	}
	else if (pokeLevel[0] > 10 && pokeLevel[0] < 21) {
		pokeImg[0].src = 'icon01_2.png'
		pokeName[0] = '이상해풀'
		document.getElementById('name1').innerHTML = pokeName[0];
	}
	else if (pokeLevel[0] > 20) {
		pokeImg[0].src = 'icon01_3.png'
		pokeName[0] = '이상해꽃'
		document.getElementById('name1').innerHTML = pokeName[0];
	}
}

function change_poket2() {
	if (pokeLevel[1] < 10) {
		pokeImg[1].src = 'icon02.png'
		pokeName[1] = '파이리'
		document.getElementById('name2').innerHTML = pokeName[1];
	}
	else if (pokeLevel[1] > 10 && pokeLevel[1] < 21) {
		pokeImg[1].src = 'icon02_2.png'
		pokeName[1] = '리자드'
		document.getElementById('name2').innerHTML = pokeName[1];
	}
	else if (pokeLevel[1] > 20) {
		pokeImg[1].src = 'icon02_3.png'
		pokeName[1] = '리자몽'
		document.getElementById('name2').innerHTML = pokeName[1];
	}
}

function change_poket3() {
	if (pokeLevel[2] < 10) {
		pokeImg[2].src = 'icon03.png'
		pokeName[2] = '꼬부기'
		document.getElementById('name3').innerHTML = pokeName[2];
	}
	else if (pokeLevel[2] > 10 && pokeLevel[2] < 21) {
		pokeImg[2].src = 'icon03_2.png'
		pokeName[2] = '어니부기'
		document.getElementById('name3').innerHTML = pokeName[2];
	}
	else if (pokeLevel[2] > 20) {
		pokeImg[2].src = 'icon03_3.png'
		pokeName[2] = '거북왕'
		document.getElementById('name3').innerHTML = pokeName[2];
	}
}

function lvUp1() {
	var lv = pokeLevel[0] += 5;

	document.getElementsByClassName('level1')[0].innerHTML = lv;

	change_poket()
}

function lvUp2() {
	var lv = pokeLevel[1] += 5;

	document.getElementsByClassName('level2')[0].innerHTML = lv;

	change_poket2()
}

function lvUp3() {
	var lv = pokeLevel[2] += 5;

	document.getElementsByClassName('level3')[0].innerHTML = lv;

	change_poket3()
}