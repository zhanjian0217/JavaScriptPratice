const API = "https://jsonplaceholder.typicode.com/users"




// async / await
async function getUsers() {
  const rawData = await fetch(API)
  const users = await rawData.json()
  
  users.forEach((user) => {
    console.log(user.name);
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