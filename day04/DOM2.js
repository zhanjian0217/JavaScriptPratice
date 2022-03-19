// 取得兄弟姊妹層 DOM

const lastOne = document.querySelector("ul :last-child")
                    // 上一個 // 下一個
// console.log(lastOne.previousElementSibling);
// console.log(lastOne.nextElementSibling);


// console.log(lastOne.previousSibling);
// console.log(lastOne.nextSibling);


////////////////////////////////////////////////

//特定位置安插 DOM

const list = document.querySelector("#list")

// const newLi = document.createElement("li")
// newLi.textContent = "X"


let msg = "X"
// const newLi = "<li>X</li>"
const newLi = `<li>${msg}</li>`
//純文字


// newLi.classList.add("createClassName")

list.insertAdjacentElement("beforebegin", newLi)
// list.insertAdjacentHTML("afterbegin", newLi)

newLi.addEventListener("click", () =>{
  newLi.textContent = "y"
})

