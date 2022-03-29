// lexical scope
let a = 1 

function x() {
  let a = 2 
  y()
}

function y() {
  console.log(a);
}

x()


//////////////////////////////////////////////////////////////

// OOP
// 繼承 -> 分類自....
// 封裝


const action = {
  attack: function() {
    console.log("attack!!!");
  },

  eat: function () {
    console.log("yyyyyyummmy");
  },
  abc: 1
}


function herocreator(name, power){
  // const hero = Object.create(action)
  // hero.name = name
  // hero.power = power
  // return hero

  //this -> {}
  this.name = name
  this.power = power
  // retrun this
}

const h1 = new herocreator("aa", 200)


console.log(h1);
console.log(herocreator.prototype);
console.log(h1.__proto__);
console.log(h1.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__);

//prototype chain

// 所有的物件都有 .__proto__


// 所有的 fn 都有 .prototype / .__proto__
// default -> {}




///////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.hello = function (){
  console.log("h1");
}

const list = [1, 2, 3]
list.hello()

const cc = [4, 5, 6]
cc.hello()


////////////////////////////////////////////////////////
function SuperHeroCreator(name, power) {
  this.name = name
  this.power = power
}
console.log(SuperHeroCreator.prototype);
console.log(SuperHeroCreator.__proto__.__proto__);

const actions = {
  attack: function () {
    console.log("attack")
  },
  eat: function () {
    console.log("eat")
  },
}

SuperHeroCreator.prototype.attack = actions.attack

console.log(SuperHeroCreator.prototype);


const h2 = new SuperHeroCreator("gian", 100000000)
h2.attack()

console.log(h2);

////////////////////////////////////////////////////////////

class Actions {
  attack() {
    console.log("attack")
  }

  eat() {
    console.log("eat")  
  }
}

class HeroCreator extends Actions {
  constructor(name, power) {
    super()
    this.name = name
    this.power = power
  }
}

const h3 = new HeroCreator("kk", 100)
h3.attack()
console.log(h3)
