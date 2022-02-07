// object index signature
// object 타입지정 한번에 가능
interface StringOnly {
    age : number,
    [key :string] : string | number,
    // 모든 문자로 된 속성
    // | 을 넣어서 2개 타입을 사용가능
    // 시그니쳐를 쓸 때는 다른 타입도 쓸 수 있게 하게 해서 
    // 단독으로 사용이 가능하다
    // 리터럴 타입도 가능
    // 오브젝트에서 넘버로 적어도 자동적으로 string으로 변환된다
    [key :number] : string
}

let user :StringOnly = {
    name : 'kim',
    age : 20,
    location : 'seoul',
    // array 형태도 가능하다
    0 : 'KIM',
    1 : '20',
    2 : 'SEOUL'
}

let css :MyType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

// recursive 타입
// before
// interface MyType  {
//     'font-size' : {
//         'font-size' : {
//             'font-size' : number
//         }
//     }
// }
// after
interface MyType  {
    // font-size 타입은 MyType 중첩이 가능하다는 뜻이다!
    // 자기를 쓰거나 다른 interface로 쓰면 중첩이 가능하다
    'font-size' : MyType | number
}

// (숙제1) 다음 자료의 타입을 지정해보십시오. 
interface Work01 {
    [key : string] : string | number;
}
let obj :Work01 = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  }

// (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오

interface Work02{
    'font-size' : number,
    [key : string] : Work02 | number,
}

let obj2 :Work02 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }

// object 타입 변환기 만들기
// keyof 키워드
let obj3 = { name : 'kim', age: 20 }
// 오브젝트에 들어 있는 키 값을 배열로 보여줌
// Object.keys(obj);
interface Person {
    age : number,
    name : string
}

// 'age' | 'name'
// 리터럴 타입으로 불러내줌
type PersonKeys = keyof Person;
let a : PersonKeys = 'age';
let b : PersonKeys = 'name';

// 만약 시그니쳐에 keyof를 쓰면?
interface Person2 {
   [key : string] : number
}

// string | number
// 숫자를 넣으면 자동으로 string으로 치환이 되므로 두개가 나온다
type PersonKeys2 = keyof Person2;
let a2 : PersonKeys = 'age';
let b2 : PersonKeys = 'name';

type Car = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

// mapping
type TypeChanger<MyType2> = {
    // key 값에 Mytype에 넣어주세요
    [key in keyof MyType] :string
}

type newType = TypeChanger<Car>

// (숙제1) 다음 타입을 변환기를 돌려보십시오.
type Bus = {
    color : string,
    model : boolean,
    price : number
}

type BusChanger<T> = {
    [key in keyof T] : string | number
}

type newBus = BusChanger<Bus>;

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?
// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오
// 받아오는 값을 두 개로 지정해주면 된다
type CustomChanger<K, T> = {
    [key in keyof K] : T;
}

type Bus2 = CustomChanger<Bus, number>;
type Bus3 = CustomChanger<Bus, string[]>;

// 조건문으로 타입 만들기 & infer
// Type parameter <>
// 등호가 아닌 extends를 사용한다
type Age<T> = T extends string? string : unknown;
let aa : Age<string>;
let bb : Age<number>;

// 퀴즈
// 파라미터로 array 타입을 입력하면 array 첫 자료의 타입을 남김
// array 타입말고 다른거 입력하면 any 남김
type FirstItem<T> = T extends any[]? T[0] : any;
let aaa : FirstItem<[string, number]>
let bbb : FirstItem<string>
let ccc : FirstItem<string[]>

// infer 키워드
// 조건문에서 쓸 수 있는 infer 키워드
type Person3<T> = T extends infer R ? R : unknown;
// 타입을 뽑는 역활 - T를 뽑아주세요 R에 넣어주세요
// 하는 이유 - 가끔 사용한다
type aaaa = Person3<string>;

// 아래와 같이 하는 경우, T의 같은 위치에 있는 부분의 R을 가져올 수0 있다
type 타입추출<T> = T extends (infer R)[]? R : unknown;
type aaaaa = 타입추출<string[]>;

type 함수타입추출<T> = T extends (() => infer R)? R : unknown;
type aaaaaa = 함수타입추출< () => void >;

// 함수 리턴값 타입 알아내기
type bbbbbb = ReturnType<() => void>

// (숙제1) 타입 파라미터로 
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

type Age44<T> = T extends any[]? T[0] extends string? T[0] : any : any
// 배열에 내가 원하는  타입으로 지정이 가능하다
type Age43<T> = T extends [string, ...any]? T[0] : any;

let age1 : Age44<[string, number]> // string
let age2 : Age44<[boolean, number]> // any
let age3 : Age43<[string, number]> // string
let age4 : Age43<[boolean, number]> // any

// (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오.
// 파라미터는 파라미터 값을 같이 넣어주어야 한다
type 타입뽑기<T> = T extends ( (x :infer R) => any )? R : any;

let aaaaaaa : 타입뽑기<(x :number) => void> // 이러면 number가 이 자리에 남음
let bbbbbbb : 타입뽑기<(x :string) => void> // 이러면 string이 이 자리에 남음