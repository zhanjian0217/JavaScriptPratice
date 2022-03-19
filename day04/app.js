const cat = {
  name: "kk",
  age: 18,
} 


// let name = cat.name
// let age = cat.age

let name = "cc"

let { name: petname, age } = cat //解構
// const > let >var

console.log(name,petname, age);

////////////////////////////////////////////////////////
               //解構 直接放在參數  / 做轉換名稱 
function hello( { name, age, ar: address } ){

  console.log(name, age, address);

}

const yyy = {
  name: "aa",
  age : 100,
  ar:"cccccc",
}

hello(yyy)

////////////////////////////////////////////////////

/// 點點點 

// 展開

const a = [1, 2, 3]
const b = [4, 5, 6]

// const c = a.concat(b)
const c = [...a, ...b]

console.log(c);

/////////////////////////////////////////////

function sayHello(x ,y ,z) {
  console.log(x, y, z)
}

sayHello(a) // => [1, 2, 3], undefined, undefined

//splat operator
sayHello(...a) // => 1, 2, 3



/////////////////////////////////////////////

// 功能 2 : 剩下的全收 開一個陣列 剩下全收 
function hi(a, b, ...c) {

  console.log(a);
  console.log(b);
  console.log(c);

}


hi(1, 2, 3, 4, 5) // 1 
                  // 2 
                  // [3, 4, 5]  

hi(1, 2, 3) // => 1, 2, [3]

hi(1, 2) // => 1, 2, []




/////////////////////////////////////////////