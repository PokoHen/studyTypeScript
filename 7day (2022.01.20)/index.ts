// class
class Person {
    // class field 값
    // 타입지정 잘하자!
    // data = 0;

    // constructor 를 쓰기 위해선 필드값을 미리 만들자
    // 타입스크립트는 필드값을 무조건 적어주어야 한다
    // constructor 의 파라미터는 타입지정 가능
    // 복제되는게 항상 object라서 return을 타입지정할 이유는 없다.
    // 필드값에서는 let이나 var 키워드를 쓰지 않는다

    name :string;
    constructor(a :string){
        this.name = a;
    }

    // 프로토타입함수 타입지정 가능
    함수(a:string){
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
    model :string;
    price :number;
    constructor(modal :string = '소나타', price :number = 3000){
        this.model = modal;
        this.price = price;
    }

    tax() :number{
        return this.price * 0.1;
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1)
console.log(car1.tax());

// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 

class Word {

    num;
    str;
    // rest parameters : ...param으로 표현되는 것
    // 복습 : 여러 타입이 들어갈 때는 () 소괄호 안에 | (or)로 적기 
    // &(and)를 적게 되면 두개 다 와야함 (필)
    constructor(...param : (string | number)[]){
        let words :string[] = [];
        let numbers :number[] = [];

        param.forEach((i : any) => {
            if(typeof i === 'string'){
                words.push(i);
            }else{
                numbers.push(i);
            }
        });

        this.num = numbers;
        this.str = words;
    }

}

let obj = new Word('kim', 3, 5, 'park')
console.log(obj.num);
console.log(obj.str)