"use strict";
// import export
// namespace == module
// 이전 import export를 사용하지 않을 때 사용하던 namespace
// namespace 네임스페이스 {
//      export type Name2 = string | number;
// }
// 위와 같이 사용하며, object처럼 사용된다
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {변수명} from '경로'
// 전체적으로 불러올 때는 as 를 사용해서 별칭을 만들어 주어야 사용가능하다
const a = __importStar(require("./a"));
console.log(a.이름);
let 변수 = 'park';
let 빠방이 = { wheel: 4, model: 'Sonaata' };
// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
// 아무것도 return 해주지 않아야합니다. 
// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
// 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
let myFunction = function (a) {
    console.log(a);
};
myFunction({ a: 'stop' });
var InterfaceDog;
(function (InterfaceDog) {
    ;
})(InterfaceDog || (InterfaceDog = {}));
let dog1 = 'bark';
let dog2 = { name: 'paw' };
