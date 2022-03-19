// 抓取網路資料 

// RESTFul

// 資料傳輸格式 網路上的東西都是字串
//  XML 
//  CSV : comma separated values
// JSON: JavaScriptObjectNotation


// AJAX


const API = "https://jsonplaceholder.typicode.com/users"


const request = new XMLHttpRequest()

request.addEventListener("load", () => {

  const ul = document.createElement("ul")

  let response = JSON.parse(request.responseText)
  response.forEach((user) => {

    const name = document.createElement("li")
    name.textContent = user.name
    ul.appendChild(name)
        
  })

  document.querySelector("body").appendChild(ul)
  
})



request.open("GET", API)

request.send()