// 한 줄 주석

/* 멀티
변수 - 메모리에 특정 내용을 저장해서 계속 꺼내 쓸 수 있도록 만들기 위해 사용.
주석 */

let abc = 'ABC';
abc = '가나다';
console.log(abc);

/* 자료형
- 자료에 따라 다른 연산을 해야하기 때문이다.
- 자동 형 변환.
- 자기 맘대로 하므로 강제로 형 변환을 해줘야 할 때가 있음.
*/

var num1 = 5;
console.log(typeof num1);
console.log(String(num1));
console.log(typeof String(num1));
console.log(Boolean(num1));

// number -> string
// 0, null, 빈 값, undefined, NaN일 때는 모두 false로 출력.
// 이외에는 값이 있는 상태이므로 Boolean으로 형 변환하면 true가 됨.

/* 데이터 입출력받기
alert - 출력만 가능
confirm - true / false
prompt - 값을 직접 입력받을 수 있음, 기본적으로 string으로 받아와짐.
*/

/* 식, 문, 토큰 */

/*
var mat, eng, avgScore;
mat = Number(prompt('수학 점수 입력 : '));
eng = Number(prompt('영어 점수 입력 : '));
avgScore = (mat + eng) / 2;
console.log('평균 점수 : ' + avgScore);
*/

/*
mathScore = Number(prompt('수학 점수 : '))
engScore = Number(prompt('영어 점수 : '))
avgScore = (engScore + mathScore) / 2
console.log(avgScore)
*/

var a = 2;
console.log(a);
console.log(++a);
console.log(--a);

// 비교 연산자 - 항과 항을 비교하는 데 사용.

// ==(항등연산자) 같은지 확인 : 타입이 같은지는 고려하지 않는다.

console.log(2 == '2');
console.log(5 == '3');

// ===(완전항등연산자) 같은지 확인 : 타입이 같은지까지 고려하려면.

console.log(253 === '253');

// 논리 연산자 (&&, ||, !)

console.log(true && true)
console.log(true || true)
console.log(true && false)
console.log(true || false)
console.log(false && true)
console.log(false || true)
console.log(false && false)
console.log(false || false)
console.log(!true)
console.log(!false)

/*
var adminId, adminPw, userId, userPw;

adminId = 'admin';
adminPw = '1234';
userId = prompt('아이디를 입력하세요.', '')
userPw = prompt('비밀번호를 입력하세요.', '')

if ((userId == adminId) && (userPw == adminPw)) {
  alert('관리자로 로그인하셨습니다.')
} else {
  alert('재시도하십시오.')
}
*/

/*
조건문

- 조건에 맞는지를 판단하여 결과를 출력하는 문.
- 두 문법은 표현만 다르고 동작은 같습니다.
- 현대 프로그래밍 언어에서는 주로 if문이 있음.
- 파이썬에는 switch문이 아예 없기로 함.

if (조건) {
  조건에 맞는 경우 실행될 문장.
}
*/

var num = 0;

if (num >= 0) {
  console.log('양수입니다.')
} else if (num == 0){
  console.log('0입니다.')
} else {
  console.log('음수입니다.')
}

var num = -1;

if (num >= 2) {
  console.log('2보다 같거나 큰 수입니다.')
} else if (num == 0){
  console.log('0입니다.')
} else if (num == 1){
  console.log('1입니다.')
} else {
  console.log('음수입니다.')
}

/*
var num = Number(prompt('홀짝을 구하시오.'))

if (num % 2 == 0) {
  console.log(num + ', 짝수입니다.')
} else {
  console.log(num + ', 홀수입니다.')
}
*/

/*
var num = Number(prompt('숫자를 입력하시오.'))

if (num % 2 == 0) {
  console.log('2의 배수입니다.')
} else if (num % 3 == 0) {
  console.log('3의 배수입니다.')
} else if (num % 5 == 0) {
  console.log('5의 배수입니다.')
} else {
  console.log('2, 3, 5의 배수는 아닙니다.')
}
*/

/*
var inputId = 'user';
var inputPw = '1234';

userId = prompt('아이디를 입력하세요.')
userPw = prompt('비밀번호를 입력하세요.')

if (inputId == userId) {
  if (inputPw == userPw) {
    alert('로그인 성공')
  } else {
    alert('비밀번호가 틀렸습니다.')
  }
} else {
  alert('아이디가 틀렸습니다.')
}
*/

/*
var userId, userPw, adminId, adminPw;

adminId= 'admin';
adminPw = '1234';

userId = prompt('아이디를 입력하세요')

if (adminId == userId ) {
    userPw = prompt('비밀번호를 입력하세요')
    if (adminPw == userPw) {
        alert('로그인 성공')
    } else {
        alert('비밀번호가 틀렸습니다')
    }
} else {
    alert('없는 ID입니다')
}
*/

/*
switch-case 문

switch (조건) {
case 값1 :
실행문;
case 값2 :
실행문;
case 값3 :
실행문;
default:
위의 어느 케이스에도 속하지 않는 경우 실행문;
}
*/

/*
var num = 1;

switch (num) {
  case 1:
    console.log('짜장면');
    break;
  case 2:
    console.log('짬뽕');
    break;
  case 3:
    console.log('탕수육');
    break;
  default:
    console.log('없음');
}
*/

/*
var num = 1;

switch (num) {
  case 1:
    console.log('짜장면');
    break;
  case 2:
    console.log('짬뽕');
    break;
  default:
    console.log('몰라요');
}
*/

/*
var menu = prompt('메뉴 번호를 고르세요.')

if(menu == '1') {
  console.log('짜장면');
} else if (menu == '2') {
  console.log('짬뽕');
} else {
  console.log('몰라요');
}
*/

/*
1이거나 2이면 짬뽕, 나머지는 몰라요 
switch (num) {
  case 1: case 2:
    console.log('짬뽕');
    break;
  default: // 마지막에 쓰는 게 기본 문법이고요 그러니까 break를 걸어주지 않아도 됩니다
    console.log('몰라요');
}
*/

/*
var menu = prompt('1번과 2번은 짬뽕, 나머지는 없습니다.')

if(menu == 1 || menu == 2) {
  console.log('짬뽕');
} else {
  console.log('몰라요');
}
*/

/*
var age = Number(prompt('나이를 입력하세요.'));

if (age < 18) {
  console.log('우쭈쭈');
} else if (age <= 60) {
  console.log('어른입니다.');
} else if (age > 60) {
  console.log('어른 중에 어른입니다.');
} else {
  console.log('나이를 입력하기 싫으신가요?');
}
*/

var age = Number(prompt('나이를 입력하세요.'));

switch (true) {
  case (age < 18):
    console.log('우쭈쭈');
    break;
  case (age <= 60):
    console.log('어른입니다.');
    break;
  case (age > 60):
    console.log('어른 중에 어른입니다.');
    break;
  default:
    console.log('나이를 입력하기 싫으신가요?');
}
