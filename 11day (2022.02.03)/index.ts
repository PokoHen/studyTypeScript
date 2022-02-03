// import export
// namespace == module
// 이전 import export를 사용하지 않을 때 사용하던 namespace
// namespace 네임스페이스 {
//      export type Name2 = string | number;
// }
// 위와 같이 사용하며, object처럼 사용된다

//import {변수명} from '경로'
// 전체적으로 불러올 때는 as 를 사용해서 별칭을 만들어 주어야 사용가능하다
import * as a from './a';

console.log(a.이름)

let 변수 :a.Name = 'park';

// 이전 import 쓰는 법
///<reference path="./a.ts" />
// let 변수2 :Mynamespace.Name2 = "kim";

//(숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
// type Car = {
//   wheel : number,
//   model : string
// }
// interface Bike {
//   wheel : 2,
//   model : string
// }
import {Car, Bike} from './car'

let 빠방이 :Car = { wheel : 4, model: 'Sonaata'};

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
// 아무것도 return 해주지 않아야합니다. 
// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
// 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
let myFunction :a.ObjFunction = function(a){
    console.log(a);
}

myFunction({a : 'stop'})

// (숙제3) 타입 중복이 너무 많이 발생합니다.

// type Dog = string;
// interface Dog { name : string };

// let dog1 :Dog = 'bark';
// let dog2 :Dog = { name : 'paw' }
namespace TypeDog {
    export type Dog = string;
}
namespace InterfaceDog {
    export interface Dog { name : string };
}

let dog1 :TypeDog.Dog = 'bark';
let dog2 :InterfaceDog.Dog = { name : 'paw' }