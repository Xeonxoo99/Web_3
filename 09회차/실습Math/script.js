// Math.random() : 0 ~ 1미만사이의 랜덤한 소수
// Math.floor() : 내림처리해서 정수로 변경

/*
    1. 번호를 담을 배열 타입의 변수 lotto를 생성하세요.
    2. for문을 사용하여 랜덤한 정수 6개를 만드세요.
    3. document에 작성하세요.

    난이도 UP!
    - 만약! 같은 숫자가 나오면 새로운 랜덤한 정수를 넣으세요.

    난이도 UP!
    - Ul 안에 li 요소에 넣어서 클래스를 적용시켜 보세요.

*/


//! for문 사용 시 5개의 수만 나올 때가 있음
// function write(){
//     // 배열 생성
//     let lotto = [];

//     // for문과 if문을 사용하여 각각 다른 번호 배열에 담기?
//     for(let i = 0; i < 6; i++){
//         // 1 ~ 45 랜덤 숫자 생성
//         let randomNum = Math.random() * 45 + 1;
//         let num = parseInt(randomNum);

//         if(lotto.indexOf(num) == -1){
//             lotto.push(num)
//             console.log(lotto)
//         }
//     }
//     lotto.sort((a,b)=>a-b);
//     document.write(lotto)
// }

// write();

//! while문 사용
//? 숫자는 제대로 나오나 li stlye이 제대로 작동하지 않음

// let ul = document.querySelector('#lotto');

// let li = document.createElement("li");


// // 배열 생성
// let lotto = [];

// // while 문을 사용하여 6번까지 계속 실행
// while (lotto.length < 6) {
//     // 랜덤 수 생성
//     let num = Math.floor(Math.random() * 45 + 1);

//     // includes를 사용하여 배열에 수가 없다면 실행문 실행
//     if (!lotto.includes(num)) {
//         lotto.push(num)
//     }
// }

// lotto.sort((a, b) => a - b);
// // console.log(lotto);

// li.textContent = lotto;

// ul.appendChild(li);


//! 다시 for문 사용
//? 숫자가 화면에 하나만 나옴

// let lotto = [];

// let ul = document.querySelector('#lotto');

// let li = document.createElement("li");

// for (let i = 0; i < 6; i++) {
//     let num = Math.floor(Math.random() * 45 + 1);

//     if (!lotto.includes(num)) {
//         lotto.push(num)
//         console.log(num)
        
//     }



//     li.textContent = lotto[i];
//     li.classList.add(`num${num}`);
//     ul.appendChild(li);
//     lotto.sort((a, b) => a - b);
// }


//! gpt 힘을 빌림,,

let lotto = [];

let ul = document.querySelector('#lotto');

while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 45 + 1);

    if (!lotto.includes(num)) {
        lotto.push(num);
    }
}

// 숫자 정렬
lotto.sort((a, b) => a - b);

// HTML에 출력
lotto.forEach(num => {
    let li = document.createElement("li");
    li.textContent = num;
    li.classList.add(`num${num}`);
    ul.appendChild(li);
});
