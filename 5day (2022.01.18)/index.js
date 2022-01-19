let 함수 = function () {
    return 1;
};
function 함수선언식() { }
;
let 회원정보 = {
    name: 'kim',
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { }
};
회원정보.plusOne(1);
function 함수1(a) {
    a();
}
;
function 함수2() {
}
;
함수1(함수2);
let cutZero = function (a) {
    let result = a.replace(/^0+/, "");
    return result;
};
let removeDash = function (a) {
    let result = parseFloat(a.replace(/-/g, ""));
    return result;
};
let phoneNum = function (a, b, c) {
    let result = b(a);
    console.log(c(result));
};
phoneNum('010-1111-2222', cutZero, removeDash);
