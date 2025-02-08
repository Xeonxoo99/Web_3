/*

	[ 마우스 이벤트 ]
	1. 마우스를 올리면 볼터치가 생기게 해보세요.

	2. 마우스를 내리면 볼터치가 사라지게 해보세요.

	4. mousemove를 이용하여 마우스 움직일때마다 이미지가 따라오게 만드세요.


	[ 키보드 이벤트 ]
	6. 'keydown'을 활용하여 방향키 방향으로 움직이게 해보세요.

	[ 스크롤 이벤트 ]
	7. 'scroll'을 이용하여 이미지가 스크롤시 따라오게 만들어보세요.

	[ 반응형 ]
	8. resize을 이용하여 브라우저의 width값이 700미만 또는 height값이 700미만이면 볼터치가 생기게 해보세요
	
*/

// 1. 마우스를 올리면 볼터치가 생기게 해보세요.
document.querySelector('.facehover').addEventListener('mouseover',()=>{
	// console.log('asd')

	document.querySelector('.face img').style.opacity = '1'
})

// 2. 마우스를 내리면 볼터치가 사라지게 해보세요.
document.querySelector('.facehover').addEventListener('mouseout',()=>{
	// console.log('asd')
	document.querySelector('.face img').style.opacity = '0'
})

// 3. mousemove를 이용하여 마우스 움직일때마다 이미지가 따라오게 만드세요.

document.querySelector('.face').addEventListener('mousemove', (e)=>{
	console.log(e.clientX)
	console.log(e.clientY)

	let x = e.clientX
	let y = e.clientY

	document.querySelector('.face').style.top = `${y}px`
	document.querySelector('.face').style.left = `${x}px`
})

// 4. 'keydown'을 활용하여 방향키 방향으로 움직이게 해보세요.