// tuple type
// let 멍멍 :( string | boolean )[] = ['dog', true];
// 만약 염격하게 첫번짼느 무조건 string 두번째는 무조건 boolean 하고 싶다면?
let 멍멍 = ['dog', true, 123];
// 위와 같이  엄격하게 바꾸어 놓는 것
// 중간에만 ?를 붙일 수 없다. 마지막에만
// rest parameter 자리에도 타입이 지정 할 수 있다
function 함수(...x) {
    console.log(x);
}
function 함수2(a, b) {
    console.log([a, b]);
}
함수(1, '2');
let arr = [1, 2, 3];
// spread operator -> 이렇게 array를 합칠 수 있다
// spread operator에서만 rest Arry로 가능하다
let arr2 = [4, 5, ...arr];
// 숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
let work1 = ['동서녹차', 4000, true];
// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
let work2 = ['동서녹차', 4000, true, false, true, true, false, true];
function 함수3(...x) {
}
함수3('보성녹차', true, 4000);
// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 
function func1(...x) {
    // let result :[string[], number[]];
    // let words :string[] = [];
    // let numbers :number[] = [];
    // 한번에 하는 방법
    let result = [[], []];
    x.forEach((a) => {
        if (typeof a == 'string') {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    // result = [words, numbers];
    return result;
}
console.log(func1('b', 5, 6, 8, 'a'));
