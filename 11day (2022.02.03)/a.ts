export var 이름 = 'kim';
export var 나이 = 20;

export type Name = string;

namespace Mynamespace {
    export type Name2 = string | number;
}

let 변수 : Mynamespace.Name2 = '김';

export type ObjFunction = (a? : object) => void