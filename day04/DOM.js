
//增加 DOM

const box = document.querySelector("#hello")

const h = document.createElement("h1")

box.appendChild(h)


//刪除 DOM

// fn 1
const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=> {
  const u = document.querySelector("#list")
  const lastOne = document.querySelector("#list :last-Child")
  const pa = document.querySelector("ul")
 
 
  ////////////////////////////
  //fn 2
  // if (lastOne) {
  //   u.removeChild(lastOne)
  // }
  
  // /////// 
  // if (lastOne) {
  //   lastOne.remove()
  // }
  
 ////////////////////////////

  // 取得父層 DOM
  // console.log(lastOne.parentElement);
  // console.log(lastOne.parentNode);
  
 ////////////////////////////////////////////////////
  
 // 取得子層 DOM
  console.log(pa.children);
  console.log((pa.childNodes));

  ////////////////////////////

   // 取得兄弟姊妹層 DOM   // DOM2.js




})

//  Element /  Node 的差別
//  Element 也是一種 Node
//  Element 算是繼承自 Node



