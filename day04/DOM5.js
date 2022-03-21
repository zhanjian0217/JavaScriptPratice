const API = "https://jsonplaceholder.typicode.com/users"




// async / await
async function getUsers() {
  const rawData = await fetch(API)
  const users = await rawData.json()
  
  const ul = document.createElement("ul")
  const body = document.querySelector("body")

  users.forEach((user) => {
    const name = document.createElement("li")

    name.textContent = user.name

    body.appendChild(ul)
    ul.appendChild(name)
  })
}


getUsers()



// fetch(API)
//   .then((resp) => {
//     return resp.json()
//   })Í
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("fail-------" + err);
//   })


// Promise pending fullfilled rejected