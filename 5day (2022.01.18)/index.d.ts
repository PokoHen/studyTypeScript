declare type 함수타입 = (a: string) => number;
declare let 함수: 함수타입;
declare function 함수선언식(): void;
declare type ChangeName = (a: string) => {};
declare let 회원정보: {
    name: string;
    plusOne(a: number): number;
    changeName: () => void;
};
declare function 함수1(a: any): void;
declare function 함수2(): void;
declare type member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    chageName: () => void;
};
declare type CutZero = (a: string) => string;
declare type RemoveDash = (a: string) => number;
declare let cutZero: CutZero;
declare let removeDash: RemoveDash;
declare let phoneNum: (a: string, b: CutZero, c: RemoveDash) => void;
