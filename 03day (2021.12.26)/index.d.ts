declare type Animal = string | number | undefined;
declare type AnimalObject = {
    name: string;
    age: number;
};
declare let 동물: AnimalObject;
declare const 출생지역: {
    region: string;
};
declare const 여친: {
    name: string;
};
declare type Girlfriend = {
    readonly name?: string;
};
declare const myGF: Girlfriend;
declare const xGF: Girlfriend;
declare type Name = string;
declare type Age = number;
declare type Person = Name | Age;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    y: number;
};
declare type Position = PositionX & PositionY;
declare let position: Position;
declare type Position3D = PositionX & PositionY & PositionX;
declare type MyType = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let mytype: MyType;
declare type User = {
    name: string;
    phene: number;
    email: string;
};
declare type IsAdult = {
    isadult: boolean;
};
declare type Adultuser = User & IsAdult;
declare let user1: Adultuser;
