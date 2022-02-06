// declare 키워드
// .js 에 있는 변수를 .ts에서 이용하고 싶다
// 일반 html css js 개발시 위에 넣으면 된다
console.log(a + 1);
// 제이쿼리 같은 것을 사용할 때, $ 같은 경우에는 ts에서 사용되지 않으므로 재정의 (declare) 가 필요하다
// ts파일에 ts파일이 들어가면?
// export import를 사용해야한다
// import {c} from './data2';
// ts 파일 같은 경우에는 그냥 적어 놓으면
// ambient module화가 되어서 다른 ts 파일에서도 자동적으로 사용할 수 있게 된다.
// 단 export 가 하나라도 있으면 로컬 모듈이 되면서 전체적으로 글로벌 함수가 되지 않는다
// console.log(d);
// name 같은 경우에도 다른 곳에서 쓰이고 있으므로 사용할 수 없다
// let name = 123;
// ambient module화 된것을 재정의 할 경우?
// 해당되는 곳에 export {}를 하나 만들어서 로컬 모듈을 사용하면 된다
// 만약, 글로벌 변수를 만들고 싶다면
// declare global {
//     type Dog = string;
// }
// 주로 타입이나 interface를 사용한다
let e = 'kim';
// d.ts 파일 활용하기
// import * as ab from "./test";
// let age:ab.Age;
let 이름 = '김';
// type Age = number;
let 나이 = 30;
// d.ts파일은 자동으로 글로벌 모듈이 되는 것이 아니다
// typeRoots 옵션에 파일 명을 넣게 되면 글로벌 모듈이 된다
// 외부라이브러리 쓸 때 타입정의가 되어 있지 않다면?
// 타입 정의를 해야한다
// 대표적인 리포지토리 -> Definitely typed github에서 다운 받아 쓰거나
// 공식 ts 사이트에서 타입 서치로 찾아본다
// @type 파일 안에 찾아보면 타입들이 자동으로 생성된다
// 단, tsconfig에서 typeRoots를 제거하거나 ,를 넣고 @types를 찾게 해주면 된다.
$().append();
class Car {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let 붕붕이 = new Car('morning');
// implements는 타입지정문법이 아닙니다
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻입니다.
// class에 따로 타입 지정을 하지 않으면 any로 받게 된다 즉, 속성이 있는지만 확인하는 것
