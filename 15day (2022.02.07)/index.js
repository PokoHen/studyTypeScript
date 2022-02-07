"use strict";
let user = {
    name: 'kim',
    age: 20,
    location: 'seoul',
    // array 형태도 가능하다
    0: 'KIM',
    1: '20',
    2: 'SEOUL'
};
let css = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
let obj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
// object 타입 변환기 만들기
// keyof 키워드
let obj3 = { name: 'kim', age: 20 };
let a = 'age';
let b = 'name';
let a2 = 'age';
let b2 = 'name';
let aa;
let bb;
let aaa;
let bbb;
let ccc;
let age1; // string
let age2; // any
let age3; // string
let age4; // any
let aaaaaaa; // 이러면 number가 이 자리에 남음
let bbbbbbb; // 이러면 string이 이 자리에 남음
