// Object에 타입지정하려면 interface
let 네모 = {
    color: 'red',
    width: 100
};
let 야옹이 = { name: 'kim', age: 3 };
let 학생 = { name: 'kim', score: 22 };
let 선생 = { name: 'kim', age: 20, score: 40 };
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let 장바구니 = [{ product: '청소기', price: 7000, card: false }, { product: '삼다수', price: 800, card: true }];
let calc = {
    plus(a, b) { return (a + b); },
    minus(a, b) { return (a - b); },
};
// rest parameter
// parameter 맨뒤에 적어주어야 한다. 
function 함수(...a) {
    console.log(a);
}
함수(1, 5, 3, 5, 6, 6);
// ... spread operator
// arr를 함쳐주는 역활 -> 기본인 arr를 벗겨주고 나오게 한다.
let arr = [1, 2, 3];
let arr2 = [3, 4];
let arr3 = [...arr, ...arr2];
console.log(arr3);
// destructuring 문법 설명
// 변수를 같게 만들어서 따로 변수를 저장할 수 있음
let [변수1, 변수2] = ['안녕', 100];
console.log(변수1);
// object 같은 경우에는 왼쪽 오른쪽 똑같이 해주어야 한다.
// js 신문법에선 object의 속성과 이름이 같으면 생략이 가능하다
// let {student: student, age: age} = {student: true, age: 20}
let { student, age } = { student: true, age: 20 };
let 오브젝트 = { student: true, age: 20 };
// 함수 파라미터에 destructing 가능
let 함수1 = function ({ student, age }) {
    console.log(student, age);
};
// destructing을 이용하면, 같은 object문법이 들어가서 그냥 값을 나오게 한다.
함수1(오브젝트); // == 함수1(student, age)
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
function MathMax(...numbers) {
    numbers.sort();
    if (numbers[0] < 0)
        return alert('양수만 입력해주세요');
    return numbers[numbers.length - 1];
}
console.log(MathMax(6, 3, 7, -1));
console.log(MathMax(6, 3, 7, 2));
function 최댓값(...x) {
    let result = 0;
    x.forEach(i => {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최댓값(6, 3, 7, 2));
function 함수3({ user, comment, admin }) {
    console.log({ user, comment, admin });
}
함수3({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수4([a, b, c]) {
    console.log(a, b, c);
}
function 함수5([a, b, c]) {
    console.log(a, b, c);
}
함수4([40, 'wine', false]);
함수5([40, 'wine', false]);
