// 套件 函式庫
// package / library
// jQuery

// 框架

// var  function scope

// let / consr  block scope

// var a = 1 

// function hello() {
//   a = 2 // 賦值、給值
//   console.log(a); 
// }

// hello()
// console.log(a);


// 非同步處理
// Event Loop
console.log(0);

setTimeout(function() {
  console.log(123);
},0)


console.log(1);


// stack 最先進來的最後出去


for (var a = 0; a < 3; a++){
  setTimeout(()=> {
    console.log(a);
  }, a * 1000) 
}