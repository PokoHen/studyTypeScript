// Object에 타입지정하려면 interface

// type 선언 하는 것과 다르게 class를 만드는 거와 같다
// ;(세미콜론)을 사용해도 괜찮다

interface Square { 
    color : string, 
    width: number
}

let 네모:Square = {
    color : 'red',
    width : 100
}

// 퀴즈

type Animal = { name : string }
// 교차 타입 intersection type (& 기호)
// 두 타입 전부 만족하는 타입이라는 뜻 - interface도 사용 가능하다

type Cat = { 
    // name: number,
    age: number
} & Animal

let 야옹이 :Cat = { name: 'kim', age: 3}

interface School { name: string, age?: 20 }

interface Student {
    name : string
}

// class 문법이랑 엄청 비슷하게 자손 부여 가능하다.
interface Teacher extends Student {
    // name: number,
    age: number
}

let 학생:Student = { name: 'kim',  score: 22}
let 선생:Teacher = { name: 'kim',  age: 20, score: 40}

// interface 장점
// extends로 복사 가능
// interface와 type의 차이
// interfaces는 유연하고 type 은 엄격하다
// interface은 중복 선언이 가능하다!
interface Student { score: number } 

// extends 쓸 때, 중복 속성을 쓰면 에러가 나타난다 -> name: string 으로 같게 쓰는건 가능, name: number로 다르게 넣어주는 건 불가능
// &를 쓰게 되면 type선언에서 error 가 아닌 변수 선언시 error 가 난다
// 위의 Cat type에 name을 number로 재 선언하게 되면, name은 number와 string 두개의 type을 만족시키는 변수여야 하므로 오류가 난다.

// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface Product { brand: string, serialNumber: number, model: String[] }

let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//(숙제2) array 안에 object 여러개가 필요합니다.
interface BarketItem { product: string, price: number}

// let 장바구니:BarketItem[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

// (숙제3) 위에서 만든 타입을 extends 해봅시다.
interface Card { card : boolean }
interface BarketItem extends Card {}

let 장바구니:BarketItem[] = [ { product : '청소기', price : 7000, card: false }, { product : '삼다수', price : 800, card: true } ] 

// (숙제4) object 안에 함수를 2개 넣고 싶은데요 
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

// 함수 형태는 arrow func으로 만들기
interface MathObj {
    plus : (a: number, b: number) => number,
    minus : (a: number, b: number) => number,
}

let calc:MathObj = {
    plus(a,b){return (a + b);},
    minus(a,b){return (a - b);},
}

// rest parameter
// parameter 맨뒤에 적어주어야 한다. 
function 함수 ( ...a:(string|boolean|number)[] ){
    console.log(a);
}

함수 (1,5,3,5,6,6);

// ... spread operator

// arr를 함쳐주는 역활 -> 기본인 arr를 벗겨주고 나오게 한다.
let arr = [1,2,3];
let arr2 = [3,4];
let arr3 = [...arr, ...arr2]
console.log(arr3)

// destructuring 문법 설명
// 변수를 같게 만들어서 따로 변수를 저장할 수 있음
let [변수1, 변수2] = ['안녕', 100]
console.log(변수1)

// object 같은 경우에는 왼쪽 오른쪽 똑같이 해주어야 한다.
// js 신문법에선 object의 속성과 이름이 같으면 생략이 가능하다
// let {student: student, age: age} = {student: true, age: 20}
let {student, age} = {student: true, age: 20}
let 오브젝트 = {student: true, age: 20}

// 함수 파라미터에 destructing 가능

let 함수1 = function({student, age}:Obj1){
    console.log(student, age)
}

// destructing을 이용하면, 같은 object문법이 들어가서 그냥 값을 나오게 한다.
함수1(오브젝트); // == 함수1(student, age)

// 파라미터 destructuring시엔 타입지정은?
interface Obj1 { student: boolean, age: number}

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 

function MathMax(...numbers:number[]){
    numbers.sort();
    if(numbers[0] < 0) return alert('양수만 입력해주세요');
    return numbers[numbers.length - 1];
}

console.log(MathMax(6,3,7,-1));
console.log(MathMax(6,3,7,2));

function 최댓값(...x : number[]){
    let result = 0;
    x.forEach(i => {
        if( result < i ){
            result = i
        }
    })
    return result;
}

console.log(최댓값(6,3,7,2));

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

type UserType = {user: string , comment: number[], admin: false }
function 함수3({ user, comment, admin}: UserType) :void {
    console.log({user, comment, admin});
}
함수3({ user : 'kim', comment : [3,5,4], admin : false });

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

type UserType2 = [a: number, b: string, c: boolean];
type UserType3 = (number|string|boolean)[];

function 함수4([a,b,c]:UserType2): void{
    console.log(a,b,c)
}

function 함수5([a,b,c]:UserType3){
    console.log(a,b,c)
}

함수4( [40, 'wine', false] );
함수5( [40, 'wine', false] );
