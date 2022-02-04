// Generic 함수
// 함수 타입에도 파라미터로 입력 가능
function 함수(x :unknown[]) {
    return x[0];
}

let a = 함수([4,2]);
// -> 4
// a 타입은 들어오는 파라미터가 unknown이므로 unknown이다

// console.log(a + 1) -> a 타입이 unknown이라 되지 않는다

// Generic 함수 만들기
// <> 안에 타입이 들어가면서 타입이 지정된다
// <> 안에 임의의 타입을 선언하면 함수내에 같은 타입을 선언할 수 있다
// 타입지정을 하지 않더라도 알아서 찾아서 바꾸어 준다.
function genericFunc<MyType>(x :MyType[]) :MyType{
    return x[0]
}

let b = genericFunc<number>([4,4,2]);
let c = genericFunc<string>(['4','4','2']);

// 마이너스가 되는 함수
// 타입 파라미터 제한두기 (constraints)
// extends 를 넣어서 우측에 있는 타입으로 제한을 할 수 있다. -> 타입 체크 가능 narrowing과 비슷
// class를 만들 때도 타입 파리미터 넣을 수 있음
// 확장성이 좋아진다!
interface LengthCheck {
    length : number
}
function minusFunc<MyType extends LengthCheck>(x: MyType) {
    return x.length;
}

let d = minusFunc<string[]>(['100']);

// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
interface checkcheck{
    length : number
}

function Func1<Type extends checkcheck>(x :Type){
    console.log(x.length)
}

Func1<string>('hello');
Func1<string[]>(['kim','park']);

// (숙제2) Animal 이라는 타입이 있습니다.
// JSON
// object 자료형인데 글자로 바꾸려고 전부 따옴표쳐놓은 자료를 JSON 이라고 칭합니다. 
// 서버랑 통신할 때 가끔 사용합니다. 끝
// JSON --> object 이렇게 변환하고 싶으면 직접 따옴표를 제거하든가 아니면  
// JSON.parse() 소괄호 안에 JSON자료를 넣으면 그 자리에 따옴표가 제거된 object가 남습니다. 

interface Animal {
    name : string;
    age : number;
}

let data = '{"name" : "dog", "age" : 1}'

function Func2<myType>(x :string) :myType{
    return JSON.parse(x);
}
let result = Func2<Animal>(data);
console.log(result);

// (숙제3) class 를 수정해봅시다.
class Person<T> {
    name;
    constructor(a :T){
        this.name = a;
    }
}
let e = new Person<string>('어쩌구');
e.name;