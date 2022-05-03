// var num = prompt('숫자를 입력하세요.')

/*
var sum = 0
for (var i = 0; i <= num; i++) {
  sum = sum + i
}
console.log(sum)
*/

// 2) while

// var num = prompt('숫자를 입력하세요.')

/*
var i, num, sum
sum = 0
i = 1

while (i <= num) {
  sum = sum + i
  i++
}
console.log('i의 값', i, 'sum의 값', sum)
*/

/*
var i, num, sum

num = prompt('값을 입력하세요.')
sum = 0
i = 1

while (true) {
  if (num <= 10) {
    num = prompt('숫자를 입력하세요.')
  } else {
    while (i <= num) {
      sum = sum + i
      i++
      break;
    }
  }
}
console.log(sum)
*/

// var year = prompt('차를 구매한 지 몇 년 되셨습니까? (정수로만 입력하세요)')

/*
while(true) {
  if (0 < year && year <= 4) {
    console.log('무선 업데이트를 무료로 할 수 있습니다')
    break;
  } else if (4 < year) {
    if (confirm('유료 무선 업데이트를 하시겠습니까?')) {
      console.log('무선 업데이트를 하기 위해 돈을 지불하세요')
      break;
    } else {
      console.log('USB를 꽂아서 업데이트 하세요.')
      break;
    }
  } else {
    // var year = prompt('잘못된 문자를 입력하셨습니다. 다시 입력해주세요.')
  }
}
*/

/*
var userId, userPw, adminId, adminPw;

adminId = 'admin';
adminPw = '1234';

userId = prompt('아이디를 입력하세요.')
userPw = prompt('비밀번호를 입력하세요.')

while (true) {
  if (adminId == userId) {
    if (adminPw == userPw) {
      alert('로그인 성공')
      break;
    } else {
      alert('비밀번호가 틀렸습니다.')
      userId = prompt('아이디를 입력하세요.')
      userPw = prompt('비밀번호를 입력하세요.')
    }
  } else {
    alert('없는 ID입니다! 다시 시도하세요.')
    userId = prompt('아이디를 입력하세요')
    userPw = prompt('비밀번호를 입력하세요')
  }
}
*/

// ID 입력받고 - 없는 아이디이면 없는 아이디입니다가 출력되고 adminId와 같으면 비밀번호를 입력받아 비밀번호가 같으면 로그인 성공, 틀리면 비밀번호가 틀렸습니다. 를 출력하는 조건문을 완성해보세요.

var people = ['창민', '진원', '승호', '민호', '호찬', '다영', '진규', '승철', '아윤', '연지']
/*
people.sort()
for (var i = 0; i < people.length; i++) {
  console.log(i + 1, people[i] + ' 님, 입장하셨습니다.')
}
*/

/*

for (var i = 0; i < people.length; i++) {
  if (i == 9) {
    console.log(i + 1, people[i])
    break;
  }
}

*/

/*
for (var i = 0; i < people.length; i++) {
  if (people[i] == '연지') {
    console.log(i + 1, people[i])
    break;
  }
}
*/

/*
var i = 0

while (i < people.length) {
  i++
  if (i == 9) {
    console.log(i + 1, people[i])
    break;
  }
}
*/

/*
var i = 0

while (i < people.length) {
  i++
  if (people[i] == '연지') {
    console.log(i + 1, people[i])
    break;
  }
}
*/

/*
var name = prompt('이름을 입력하세요.')

for (var i = 0; i < people.length; i++) {
  if (people[i] == name) {
    console.log(i + 1, people[i])
    break;
  }
}
*/

function twice(x) {
  console.log(2 * x)
}

twice(2)
twice(5)
twice(3)

console.log('a', 'b', 'c')

function add(x, y) {
  console.log(x + y)
}

add(12, 13)

function min(x, y) {
  console.log(x - y)
}

min(13, 12)

function mul(x, y) {
  console.log(x * y)
}

mul(2, 5)

function div(x, y) {
  console.log(x / y)
}

div(10, 2)

/*
1. 만들 때
function 함수명 (받을 값) {
  실행문
}

2. 호출할 때
function 함수명 (넣을 값) {
  실행문
}
*/

/*
function add1(x, y) {
  return x + y
}

function add2(x, y) {
  console.log(x + y)
}
*/

/*
1. 인풋이 없는 함수 -> 출력이 안됨
2. 인풋이 없고 아웃풋도 없는 함수 -> 펑션 함수 실행됨
3. 인풋이 있고 아웃풋은 없는 함수 -> 콘솔로만 출력됨
4. 인풋이 있고 아웃풋도 있는 함수 -> 함수, 리턴 값 출력됨
*/

function add1(x, y) {
  return x + y
}
a = add1(2, 3)
console.log(a)

function minus1(x, y) {
  return x - y
}
b = minus1(5, 3)
console.log(b)

function multiply1(x, y) {
  return x * y
}
c = multiply1(2, 5)
console.log(c)

function divide1(x, y) {
  return x / y
}
d = divide1(10, 2)
console.log(d)

var people = ['창민', '진원', '승호',
              '연지', '민호', '호찬', '다영', '진규', '승철', '아윤']

function hello(x) {
  for (var i = 0; i < x.length; i++)
  console.log(x[i] + ' 님, 안녕하세요.')
}
hello(people)

// var name = prompt('이름을 입력하세요.')

function search(y) {
  for (var i = 0; i < y.length; i++)
    if (y[i] == name) {
      console.log(i + 1, '번 입니다.')
    }
}
search(people)

/*
family = ['아빠', '엄마', '형', '누나', '나', '남동생', '여동생']

// var nick = prompt('가족 호칭을 입력하세요.')

var i = 0

function fam(f) {
  while (i < f.length) {
    i++
    if (f[i] == nick) {
      console.log(i + 1, family[i], '(이)라는 역할이 부여됩니다.')
      break;
    }
  }
}
fam(family)
*/

var food = ['돈까스', '파스타', '햄버거', '오믈렛', '바베큐']

function menu(m) {
  // var name = prompt('이름을 입력하세요.')
  i = Math.floor(Math.random() * m.length)
  console.log(name + ' 님, 오늘 ' + m[i] + '는 어떠세요?')
}
menu(food)
