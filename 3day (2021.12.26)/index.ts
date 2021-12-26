// type Aliases = 타입 변수!
// object를 만들어서 저장이 가능하다
// 타입변수 같은 경우에는 시작이 대문자로 이루어 진다!

type Animal = string | number | undefined;
type AnimalObject = {name: string, age: number};

let 동물 :AnimalObject = {name: 'kim', age: 20};

// const를 이용한 타입 지정
// const를 해도 object 안에 있는 변수는 변환이 가능하다.
const 출생지역 = { region : 'seoul' };
출생지역.region = 'busan';

const 여친 = {
    name : '엠버',
}

여친.name = '유라';

// 만약 여친의 object안의 변수를 막고싶다면!
// readonly => 오직 읽기위한 것이므로 수정을 막아준다!
// object 속성에도 ?를 선언해서 옵션을 설정 가능하다! -> ? = undefined 까지 포함시킴
type Girlfriend = {
    readonly name? : string,
}

const myGF :Girlfriend = {
    name : '앰버'
}
const xGF :Girlfriend = {};

// myGF.name = '유라';
// 단, 실행을 막아주는 것이 아닌, 에디터 에러를 나타내어 준다.

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number };
type PositionY = { y : number };

// object extend
// &를 적어서 속성 두개를 합쳐줄수 있다!
type Position = PositionX & PositionY;

let position :Position = { x: 10, y: 20 };

// type 변수는 재정의가 불가능하다!

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Position3D = PositionX & PositionY & PositionX;
// let position3d :Position3D = {x: 12, y: 12, x: 12 };
// 타입 선언은 가능하지만 생성하지 못한다 -> 식별자가 중복되어서 불가능!

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다. 

type MyType = {
    color? : string,
    size : number,
    readonly position : number[],
}
let mytype: MyType = {
    size : 12,
    position : [10,11,12],
}

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type User = {
    name : string,
    phene : number,
    email : string,
}

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제3에서 만들어둔  type alias를 재활용해봅시다.

type IsAdult = { isadult : boolean, };
type Adultuser = User & IsAdult;

let user1: Adultuser = {
    name : 'kim',
    phene : 12345678,
    email : 'example@mail.com',
<<<<<<< HEAD
    isadult : true
=======
    isadult : true,
>>>>>>> 71e9368421479c2775896e0303795ce0e29241bb
}