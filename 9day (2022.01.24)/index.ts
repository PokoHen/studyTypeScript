// narrowing
// typeof 를 쓸 수 없을 경우 사용하는 narrowing

// && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
// && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.
// falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미합니다.
// 1 && null && 3   // null이 남음
// undefined && '안녕' && 100  // undefined 남음


function 함수(a :string | undefined){
    // 한번에 undefined을 걸러냄
    // undefined == false
    if ( a && typeof a === 'string' ){

    }
}

type Fish = { swim : string }
type Bird = { fly : string }

// typeof는 일반적인 object만 가능하다
// 서로 각각 속성이 다를 때 in을 사용할 수 있다.
// 서로 배타적인 소성을 가지고 있을 때!
// 배타적인 속성을 넣는다
function 함수1(animal : Fish | Bird){
    // swin이라는 속성이 들어있는가 확인
    if ( 'swin' in animal){
        
    }
}

// 오브젝트 instanceof 부모class
// 부모의 class가 있어야 한다

class Parent {
    public first_name;
    last_name;
    constructor(first_name: string, last_name:string){
        this.first_name = first_name;
        this.last_name = last_name
    }
}

class Children extends Parent { 
    
}

function 함수5(person : Children){
    if( person instanceof Parent){

    }
}

let 날짜 = new Date()
if( 날짜 instanceof Date){

}

type Car = {
    wheel : '4개',
    color : string
}

type Bike = {
    wheel : '2개',
    color : string
}

// 비슷한 object타입일 경우
// 복습 : literal type - 무조건 정의된 타입
// literal  type을 강제로 만들어 둔다.
// 무조건 유니크 하게 있는 걸 만들어 준다.
// 특정 지을 수 있으면 narrowing이 가능하다

function 함수2(x : Car | Bike){
    if ( x.wheel === '4개' ){
        console.log('x는 Car타입이에요');
    }
}

// 함수에 사용하는 never 타입도 있긴 하다!
// never 함수 -> void와 비슷 but 크게 다른 점이 있다
// 조건 1 : return 값이 없어야함
// 조건 2 : endpoint 값이 없어야함
function 함수6() : never{
    
    // 강제로 함수를 종료 시키기
    // throw new Error('succes');
    
    // 무한반복문
    while(true){

    }
    // return undefined -> 항상 이 부분은 모든 함수에서 가지고 있다
}

// 실전에서 쓰는 방법
// 리턴하기 싫으면 void를 써야한다
function 이상한함수(parameter : string){
    if ( typeof parameter == 'string' ){
        console.log(parameter);
    } else {
        // 무조건 string이 들어가는 데 else가 있을 수가 없다
        // 여기서 나오는 never는 있을 수 없다
        console.log(parameter);
    }
}

// 함수에 never를 리턴한다라고 나타난다
// never 함수가 나타나면 이상이 있다는 것을 나타낸다.
let 이상한함수2 = function(){
    throw new Error()
}

// tsconfig.json 에서 strict 옵션이 켜져있는경우
// any타입을 지정해주지 않는 경우가 있는데, 이 때 array 등을 타입지정 안하고 만들면
let arr = [];
// any[] 타입이 나타나나 any를 가질수 없어서 never[] 타입이 발견되기도 한다. 