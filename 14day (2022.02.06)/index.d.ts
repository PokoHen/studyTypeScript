declare let a: number;
declare let e: Dog;
declare let 이름: string;
declare let 나이: Age;
interface CarType {
    model: string;
    price: number;
}
declare class Car implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이: Car;
