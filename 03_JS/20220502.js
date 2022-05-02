/*
var year = prompt('올해 연도를 입력하세요.')

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log('윤년입니다.')
} else {
  console.log('윤년이 아닙니다.')
}
*/

/*
반복문 for와 while.

for (초기값; 조건; 증감식) {
조건을 만족할 동안의 실행문
}

배열과 만났을 때 큰 효과를 볼 수 있다.
*/

/*
for (var i = 0; i < 1; i++) {
  console.log(i)
}

var array1 = ['apple', 'banana', 'cat', 'dog', 'eel']
for (var i = 0; i < array1.length; i++) {
  console.log(i, array1[i])
}
*/

// 실습 a~f까지 알파벳으로 시작되는 배열을 만든다.
// 그 배열을 배열의 인덱스번호와 배열의 맨 앞에 2글자만 출력되도록 반복문을 만듭니다. 

/*
var kor = ['가나다', '나다라', '다라마', '라마바', '마바사']
for (var i = 0; i < kor.length; i++) {
  console.log(kor[i][0] + kor[i][1])
}
*/

// 반복문을 우리 방식대로 바꿔보는 법
// 짝수 자리에 있는 애들만 출력하는 법
// 1) 증감식을 바꿔본다.

/*
var kor = ['가나다', '나다라', '다라마', '라마바', '마바사']
for (var i = 1; i < kor.length; i=i+2) {
  console.log(kor[i])
}
*/

// 2) 조건문을 활용한다.
// if문에서 짝수만 출력하려면?

/*
var kor = ['가나다', '나다라', '다라마', '라마바', '마바사']
for (var i = 0; i < kor.length; i++) {
  if (i % 2 != 0)
  console.log(kor[i])
}

var kor = ['가나다', '나다라', '다라마', '라마바', '마바사']
for (var i = 0; i < kor.length; i++) {
  if (i % 2 == 1)
  console.log(kor[i])
}
*/

// 중첩 조건문 for문

/*
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i + ', ' + j)
  }
}

for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    for (var k = 0; k < 2; k++) {
      console.log(i + ', ' + j + ', ' + k)
    }
  }
}
*/

// 구구단

/*
for (var i = 1; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    console.log(i + " * " + j + " = " + (i * j))
  }
}
*/

/*
1.
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    console.log('*')
  }
  console.log('\n')
}
*/

/*
2.
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= (i * 2); j++) {
    console.log('*')
  }
  console.log('\n')
}
*/

/*
3.
for (var i = 0; i < 5; i++) {
  for (var j = 5; j > i; j--) {
    console.log('*')
  }
  console.log('\n')
}
*/

/*
4.
for(var i = 0; i < 5; i++) {
  for(var j = 4; j > i; j--) {
    console.log(' ')
  }
  for(var j = 0; j <= i; j++) {
    console.log('*')
  }
  for(var j = 1; j <= i; j++) {
    console.log('*')
  }
  console.log('\n')
}

or

for(var i = 0; i < 5; i++) {
  for(var j = 4; j > i; j--) {
    console.log(' ')
  }
  for(var k = 0; k <= (i * 2); k++) {
    console.log('*')
  }
  console.log('\n')
}

*/

/*
그 외
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    console.log('*')
  }
  console.log('\n')
}
*/

/*
console.log('*')
console.log('**')
console.log('***')
console.log('****')
console.log('*****')
*/

/*
console.log('    *    ')
console.log('   ***   ')
console.log('  *****  ')
console.log(' ******* ')
console.log('*********')
*/

/*
var star = ''
for (var i = 0; i <= 5; i++) {
    for (var j = 0; j < i; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star)
*/

/*
var star = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star)
*/

/*
var star = ''

for (var i = 0; i < 5; i++) {
  star = star + '\n'
  for (var j = 4; j > i; j--) {
    star = star + ' '
  }
  for (var k = 0; k <= (i * 2); k++) {
    star = star + '*'
  }
}
*/

// while문

/*
var i = 0
while (true) {
  console.log(i++)
  if (i == 10) break;
}
*/

/*
for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i)
}
*/

/*
for (var i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i)
}
*/

/*
for (var i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    break;
  }
  console.log(i)
}
*/

/*
var i = 0;

while (i <= 10) {
  if(i % 2 == 0) {
    console.log(i)
   }
  i++;
}
*/

/*
var i = 0;

while (i <= 10) {
  i++
  if (i % 2 == 0) {
    break;
  }
}
console.log(i)
*/

var num = prompt('숫자를 입력하세요.')
var sum = 0;
for (var i = 0; i <= num; i++) {
  sum = sum + i
}
