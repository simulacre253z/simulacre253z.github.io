function func1(x, y) {
  console.log(x ** y)
}

function add(a, b) {
  return a + b
}

function func2(a) {
  console.log(`결과는 ${a}입니다.`)
}

func1(2, 3)
func2(10)
func2(add(2, 3))

function minus(a, b) {
  return a - b
}
func2(minus(3, 2))

function multyply(a, b) {
  return `${a * b}`
}
func2(multyply(3, 2))

var 이호찬 = {
  성별 : '남성',
  나이 : 25,
  혈액형 : 'B형',
  닉네임 : '253',
  결혼여부 : false
}

console.log(이호찬.성별)
console.log(이호찬.나이)
console.log(이호찬.혈액형)
console.log(이호찬.닉네임)
console.log(이호찬.결혼여부)

// 없는 값을 호출하면 undefined 발생

이호찬['국적'] = 'South Korea'
console.log(이호찬.국적)

delete 이호찬.나이
console.log(이호찬)

var 드림카 = {
  이름 : `메밀카`,
  년도 : `2023 년형`,
  차종 : `중형`,
  가격 : `1억 원`,
  연료 : `장국`,
  연비 : `15.5km/l`,
  출력 : `253hp`,
  배기량 : `1998cc`,
  최고출력 : `300hp`,
  최고속도 : `253km`
}
console.log(드림카)

var mini_cooper = {
 name : 'countryman',
 color : 'sage green',
 company: 'BMW'
}
console.log(mini_cooper)

function Car(name, engine, price, color) {
  this.name = name
  this.engine = engine
  this.price = price
  this.color = color
}

var 메밀카 = new Car('메밀카', 'memil.v1', '1만 원', 'memilic')

console.log(메밀카)

var mini_cooper = {
  name : 'countryman',
  'color is' : 'sage green',
  company : 'BMW',
  start : function start() {
    console.log('출발합니다.')
  }
}
mini_cooper.start()

function Car(name, engine, price, color) {
  this.name = name
  this.engine = engine
  this.price = price
  this.color = color
}
var Car = new Car('뉴카', 'New.v1', '777', 'NewC')
console.log(Car)

function Movie(director, actor, star, review) {
  this.director = director
  this.actor = actor
  this.star = star
  this.review = review
}

var 스파이더맨1 = new Movie('Sam', 'Tobey', '9점', '명작')
var 스파이더맨2 = new Movie('Sam', 'Tobey', '10점', '띵작')
var 스파이더맨3 = new Movie('Sam', 'Tobey', '8점', '주작')

스파이더맨1.name = '스파이더맨1'
console.log(스파이더맨1)
delete 스파이더맨1.name
console.log(스파이더맨1)
스파이더맨1.recommend = '추천'

function Sandwich(bread, ham, egg, tomato) {
  this.bread = bread
  this.ham = ham
  this.egg = egg
  this.tomato = tomato
  this.intro = function () {
    console.log(`샌드위치에 ${bread}, ${ham}, ${egg}, 그리고 ${tomato}가 있습니다.`)
  }
}
var Sandwich = new Sandwich('빵', '햄', '달걀', '토마토')
Sandwich.intro()

console.log(Object.keys(스파이더맨1))
console.log(Object.values(스파이더맨1))

for (a in 스파이더맨1) {
  console.log("key : " + a, "value : " + 스파이더맨1[a])
}

console.log(스파이더맨1['star'])
