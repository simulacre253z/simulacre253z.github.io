/*
1. 변수
- 다시 불러서 쓰기 위해(재사용) 메모리에 값을 저장하는 방법, 혹은 주소를 호출하는 방법
- var, let, const 세 개의 방법으로 메모리에 변수를 저장할 수 있음.
기본 형식은 var a = 1;
- = 대입연산자를 통해 변수명에 값을 대입합니다.
*/

/* 실습
// var a = 1; 현재 자료형
// number로 바꿔보기,
// string으로 바꿔보기,
// boolean으로 바꿔보기
*/

var a = 1; // 선언, 초기화, 할당

console.log(typeof(a));
console.log(Number(a));
console.log(String(a));
console.log(typeof String(a));
console.log(Boolean(a));

var name = '이호찬';

name = String(name); // 스트링
console.log(String(name));
console.log(name, typeof(name));

name = Number(name); // 넘버
console.log(Number(name));
console.log(name, typeof(name));

name = Boolean(name); // 불린
console.log(Boolean(name));
console.log(name, typeof(name));

console.log(a++); // 후위식
console.log(++a); // 전위식

// 논리연산자 - &&(and), ||(or), !(not)

var age = 19;

if (age > 18) {
  console.log('어른입니다.');
} else if (age < 0){
  console.log('나이를 잘못 입력하셨습니다.');
} else {
  console.log('어른이 아닙니다.');
}

/*
if (조건) {
조건이 참일 때 실행문
}
else if (또 다른 조건) {
또 다른 조건이 참일 때 실행문
}
else {
위의 어느 조건도 만족하지 않을 때 실행문
}
*/

console.log(Boolean(age > 0)); // 참
console.log(Boolean(age < 0)); // 거짓

// 중첩 조건문

/*
var kia = Number(prompt('사용 기간을 입력하세요.'))

if (kia >= 0 && kia <= 4) {
  if (confirm('업데이트하시겠습니까?')) {
    console.log('무료로 진행합니다.')
    alert('업데이트합니다.')
  } else {
    console.log('재입력하십시오.')
  }
} else {
  if (kia > 4) {
    if (confirm('유료로 결제하시겠습니까?')) {
      console.log('유료로 결제됐습니다.')
      alert('업데이트합니다.')
    } else {
      console.log('컴퓨터로 진행합니다.')
      alert('USB로 연결합니다.')
    }
  }
}
*/

// <윤년구하기>
// 연도가 4로 나누어 떨어지고,
// 100으로 나누어 떨어지지 않거나,
// 400으로 나누어 떨어지면 윤년이다.

/*
var year = prompt("연도를 입력하세요.");

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log('윤년입니다.')
} else {
  console.log('윤년이 아닙니다.')
}
*/

var year;

// year = prompt("자동차 구입 연도를 입력하십시오")

if (2022 - year >= 4) {
  if (confirm("유료로 업데이트 하시는 건가요?")) {
    confirm("업데이트 시 비용을 지불해야 합니다. 무선으로 지불하시겠습니까?")
  } else {
    alert("USB 연결로 직접 하셔야 합니다")
  }
} else if (0 < (2022 - year) && ((2022 - year) <= 4)) {
  alert("4년이 지나지 않아 무료 업데이트 가능합니다")
} else {
  console.log('잘못된 문자를 입력하였습니다.')
}

// var year = prompt('차를 구매한 지 몇 년 되셨습니까? (정수로만 입력하세요.)');

if (0 < year && year <= 4) {
  console.log('무선 업데이트를 무료로 할 수 있습니다')
} else if (4 < year) {
  if (confirm('유료 무선 업데이트를 하시겠습니까?')) {
    console.log('무선 업데이트를 하기 위해 돈을 지불하세요')
  } else {
    console.log('USB를 꽂아서 업데이트 하세요.')
  }
} else {
  console.log('잘못된 문자를 입력하셨습니다. 다시 입력해주세요.')
}

/*
배열
- 순서대로 값을 저장하는 객체를 의미.
- 문자'열'(줄)
- 순서대로 지정하고 순서대로 값을 꺼낼 수 있음.
- 값을 꺼낼 때는 숫자로 0부터 시작해서 자동으로 정의되는 인덱스를 호출하여 꺼내올 수 있음.
*/

var c = '이호찬'
console.log(c[2])

// 배열을 만드는 방법
// object - 우리가 필요로 하는 방식으로 자료를 담아서 관리하는 자료형

var array1 = []
console.log(typeof array1)

var array2 = Array()
console.log(typeof array2)

var array3 = new Array()
console.log(typeof array3)

var array1 = ['apple', 'banana', 'carrot']
console.log(array1)
console.log(array1[0])

array1[0] = 'apricot' // = 대입연산자
console.log(array1[0])

array1[9] = '사과'
console.log(array1)
console.log(array1[9]) // undefined

var obj = ['banana', 'carrot', 'egg']
console.log(obj)
console.log(obj[0])
console.log(obj[1])
console.log(obj[2])
console.log(obj.length)

obj[3] = 'fig' // 배열 fig 추가.
console.log(obj)

obj.push('garlic') // 배열의 맨 마지막에 값을 추가.
console.log(obj)

obj.unshift('apple') // 배열의 맨 앞에 값을 추가.
console.log(obj)

obj.pop() // 배열의 맨 마지막의 값을 삭제.
console.log(obj)

obj.shift() // 배열의 맨 앞의 값을 삭제.
console.log(obj)

// splice - 배열의 요소를 삭제하거나 추가하는 메소드.
// obj.splice - 기준이 되는 배열의 인덱스 번호, 몇 개의 요소를 제거할지 또는 무엇을 넣을지 결정.

obj.splice(2, 0, 'dessert')
console.log(obj)

// a로 시작하는 음식을 0번 자리에 넣어주시고
// console.log(obj)
// e로 시작하는 음식 2개를 egg 뒤에 넣어주세요 
// console.log(obj)
// egg는 삭제해주세요.
// console.log(obj)
// banana를 bananaCake로 바꿔주세요.
// console.log(obj)

obj.unshift('acorn')
console.log(obj)

obj.splice(5, 0, 'eel', 'emu')
console.log(obj)

obj.splice(4, 1)
console.log(obj)

// obj[1] = 'bananaCake'
obj.splice(1, 1, 'bananaCake')
console.log(obj)

obj[1] = 'zebra'
console.log(obj.sort())

var korean = ['다하', '가하', '라하', '나하']
console.log(korean)
console.log(korean.sort())
console.log(korean) // 파괴적인 함수 (destructive)

var array5 = [1, 2, 2, 3, 3, 4, 5, 5, 6, 7]
var set1 = new Set(array5)
console.log(set1)

var Lee = '이호찬'
console.log(Lee[2])
console.log(korean[2][0])

// 반복문 - 어떤 조건을 만족하는 도안 반복 실행되는 코드.
// for / while

/*
for (초기값; 조건; 증감) {
조건이 참인 경우 반복 실행될 문
}
*/

for (var i = 1; i <= 10; i++) {
  console.log(i)
}

var class1 = ['연지', '아윤', '승철', '다영', '창민', '승호', '민호', '호찬', '진원', '진규']
console.log(class1)
console.log(class1.sort())

for (var i = 0; i < class1.length; i++) {
  console.log(i + 1, class1[i] + ' 님, 안녕하십니까?')
}
