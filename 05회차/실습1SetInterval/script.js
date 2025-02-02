/*
	setInterval을 사용하여
	wally의 키가 계속 크도록 만드세요.

	만약 wally의 키가 210이 된다면 원래대로 되돌아오도록 만드세요.
	키 Default값 160

*/

var key = Number(document.querySelector('#leg').style.height.replace(/[^0-9]/g, ""))
key = 160


console.log(key)


setInterval(() => {
	if(key < 210){
		key += 1;
		console.log(key)
		update()
	}
	else if( key == 210 ){
		return key = 160;
	}
}, 100);


// setInterval(function (){
// 		if(key < 210){
// 			key += i
// 			console.log(key)
// 			update()
// 		}
// 		else if(key == 210){
// 			return key = 160
// 		}
// 	}, 1000);

function update(){
	document.querySelector('#leg').style.height = `${key}px`
	console.log('upadte',key)
}


