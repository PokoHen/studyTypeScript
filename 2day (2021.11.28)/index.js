let 회원 = 123;
회원 = '회원';
let 회원들 = [1, '2', 3];
let 오브젝트 = { a: '123' };
let 애니 = 123;
애니 = '123';
let 언노운 = '123';
let test = 애니 - 1;
let 나이;
let user = 'kim';
let age_day2 = undefined;
let married = false;
let 철수 = [user, age_day2, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    return x * 2;
}
;
함수(2);
function 함수보이드(x) {
    1 + 1;
}
함수보이드(2);
function 함수파라미터(x) {
    console.log(x);
}
함수파라미터();
함수파라미터(1);
function 함수유닝온(x) {
}
function 인사(x) {
    if (x) {
        return '안녕하세요 ' + x;
    }
    else {
        return '이름이 없습니다.';
    }
}
function 글자수(x) {
    return x.toString().length;
}
function 결혼가능하냐(x, y, z) {
    let score = x;
    if (y === true)
        score = score + 500;
    if (z === '상')
        score = score + 100;
    if (score >= 600) {
        return "결혼가능";
    }
}
