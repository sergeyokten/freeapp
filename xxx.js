// console.log('ashgfdgsafdgs');
//
// function calculator() {
//     let result = 0;
//     if (arguments.length === 2) {
//         result = arguments[0] + arguments[1];
//     } else if (arguments.length === 3) {
//         result = arguments[0] + arguments[1] + arguments[2];
//     }
//
//     return result;
//
//
// }
//
// // let result1 = calculator(10, 20);
// // console.log(result1);
// // console.log(calculator(100, 900));
// //
// // console.log(calculator(+prompt('eneter x'), +prompt('eneter y')));
//
// console.log(calculator(10, 20, 30));
// console.log(calculator(1, 2));
//
// function foo(a, b) {
//     let newVar = a + b;
// }
//
//
// function simpleIncrement(a) {
//     a++;
// }
//
// let xxx = 0;
// simpleIncrement(xxx);
// console.log(xxx);
//
// function refIncrement(obj) {
//     obj.name = 'petya';
//     obj.age = obj.age + 1;
// }
//
// let user = {name: 'vasya', age: 30};
//
// refIncrement(user);
// console.log(user);
//
//
// function bar(a) {
//     console.log(a());
// }
//
// bar(function () {
//     return 100
// });
//
//
// function superCalculator(a, b, callback) {
//     console.log(callback(a, b));
// }
//
// superCalculator(10, 20, function (a, b) {
//     return (a + b) / a - b;
// });
//
// superCalculator(123, 12, function (x, y) {
//     return x * x * x * y;
// });


// console.log(document);
// let h1List = document.getElementsByTagName('h1');
// console.log(h1List);
// console.log(h1List[0]);
// console.log(h1List[1]);
//
// h1List[0].style.background = 'red';
// h1List[1].style.height = '70px';
// h1List[1].style.background = 'silver';
//
// let targets = document.getElementsByClassName('target');
// console.log(targets);
//
// for (const target of targets) {
//     console.log(target);
// }


let cElement = document.getElementById('c');
cElement.classList.add('asd');

// cElement.onclick = function () {
//     cElement.style.background = 'silver';
// };

cElement.onmousemove = function (eventObject) {
    console.log(eventObject.pageX, eventObject.pageY);
    let red = eventObject.pageX;
    let green = eventObject.pageY;
    let blue = eventObject.pageX;
    this.style.background = `rgb(${red},${green},${blue})`;

};





















