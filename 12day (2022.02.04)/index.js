// Generic 함수
// 함수 타입에도 파라미터로 입력 가능
function 함수(x) {
    return x[0];
}
let a = 함수([4, 2]);
// -> 4
// a 타입은 들어오는 파라미터가 unknown이므로 unknown이다
// console.log(a + 1) -> a 타입이 unknown이라 되지 않는다
// Generic 함수 만들기
// <> 안에 타입이 들어가면서 타입이 지정된다
// <> 안에 임의의 타입을 선언하면 함수내에 같은 타입을 선언할 수 있다
// 타입지정을 하지 않더라도 알아서 찾아서 바꾸어 준다.
function genericFunc(x) {
    return x[0];
}
let b = genericFunc([4, 4, 2]);
let c = genericFunc(['4', '4', '2']);
function minusFunc(x) {
    return x.length;
}
let d = minusFunc(['100']);
function Func1(x) {
    console.log(x.length);
}
Func1('hello');
Func1(['kim', 'park']);
let data = '{"name" : "dog", "age" : 1}';
function Func2(x) {
    return JSON.parse(x);
}
let result = Func2(data);
console.log(result);
// (숙제3) class 를 수정해봅시다.
class Person {
    constructor(a) {
        this.name = a;
    }
}
let e = new Person('어쩌구');
e.name;
