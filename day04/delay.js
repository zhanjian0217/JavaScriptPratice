let name = "gian"
let age = 18

const cat = {
  name,
  age,
}

console.log(cat);

const dog =  {
  name2:"asd",
  age2 : 10 
}

let name2 = "QQ"

let {name2:petname, age2} = dog

console.log(name2, petname, age2);