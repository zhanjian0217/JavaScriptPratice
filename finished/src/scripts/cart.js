import { roundedNumber } from "./calc"

class Cart {
  constructor() {
    this.items = []
    // this.discount = 1
  }

  clear() {
    this.items = []
  }

  // setDiscount(value) {
  //   this.discount = value
  // }

  updateItem(item) {
    const { quantity } = item
    const foundItem = this.foundByItem(item)

    if (foundItem) {
      foundItem.quantity = quantity
    }
  } 

  removeItem(item) {
    const foundItem = this.foundByItem(item)

    if (foundItem) {
      this.items.splice(this.items.indexOf(foundItem), 1)
    }
  }

  get total() {
    let result = roundedNumber(
      this.items.reduce((sum, item) => {
        return sum + item.quantity * item.price
      }, 0)
    )

    // 滿千送百
    if (result >= 1000) {
      result -= 100
    }

    return roundedNumber(result)
  }

  addItem(item) {
    const { title, price } = item

    const foundItem = this.foundByItem(item)

    if (foundItem) {
      foundItem.quantity += 1
    } else {
      this.items.push({ title, price, quantity: 1 })
    }
  }

  foundByItem(item) {
    const { title } = item
    return this.items.find((item) => {
      return item.title === title
    })
  }
}

export { Cart }
