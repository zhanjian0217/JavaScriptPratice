// setTimeout

// this
// 誰呼叫 誰就是 this
// 沒人呼叫, this -> 全域
// 箭頭函數沒有自己的 this / arguments
// 是否有使用 call / apply / bind 改變 this 
// 





// 嚴格模式
function hello() {
  "use strict"
  console.log(this);
}

hello()
// undefined


function hey() {
  console.log(this);
}

hey()




// const arguments = 123

// const a =  () => {
//   console.log(arguments);
// }

// a("aa", "bb", "cc")





// const cat = {
//   name: "kitty",
//   age: 18,
//   hello: function(){
//     console.log(this);
//   }
// }

// cat.hello()

// /////////////////////////////////////////////////////////////////////

// function hi() {
//   function hey() {
//     console.log(this);
//   }
//   hey()
// }

// hi()





// const dog = {
//   name: "kk",  
//   age: 18 , 
//   hello: function (){
//     this.age = 20
//   }
// }

const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#btn2")

function changeText() {
  this.textContent = "123" 
}


btn.addEventListener("click" , changeText)
btn2.addEventListener("click" , changeText)
////////////////////////////////////////////////////////////////////////




  
// const cat = {
//   name: "kk",
//   age: 16,
// }

// function hello() {
//   console.log(this);
//   // console.log(a, b, c);
// }


// hello.call(cat, 1, 2, 3)
// hello.apply(cat, [1,2,3])

// const newHello = hello.bind(cat,1, 2, 3) 
