const API = "https://jsonplaceholder.typicode.com/users"


// const parser = (resp) => (resp).json()
// const logger = (data) => {console.log(data);}
// const catcher =(err) => {console.log("fail-------" + err);} 

// fetch(API).then(parser).then(logger).catch(catcher)


fetch(API)
  .then((resp) => {
    return resp.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("fail-------" + err);
  })


// Promise pending fullfilled rejected