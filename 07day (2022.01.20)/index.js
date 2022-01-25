"use strict";
// class
class Person {
    constructor(a) {
        this.name = a;
    }
    // 프로토타입함수 타입지정 가능
    함수(a) {
        console.log('안녕' + a);
    }
}
// Person.prototype.함수 = function(){}
let 사람1 = new Person('kim');
let 사람2 = new Person('park');
console.log(사람1);
사람1.함수('안녕');
// (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
class Car {
    constructor(modal = '소나타', price = 3000) {
        this.model = modal;
        this.price = price;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
class Word {
    // rest parameters : ...param으로 표현되는 것
    constructor(...param) {
        let words = [];
        let numbers = [];
        param.forEach((i) => {
            if (typeof i === 'string') {
                words.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = words;
    }
}
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
