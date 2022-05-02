import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
// 實作寫在這裡！
import { Cart } from "./cart"

const itemList = document.querySelector("#itemList")
const totalPrice = document.querySelector("#totalPrice")
const emptyCartBtn = document.querySelector("#emptyCart")
const discountLink = document.querySelector("#discount")

const cart = new Cart()

function renderCartItem(c) {
  const cartItemString = c.items
    .map((item) => {
      const { title, price, quantity } = item
      return `<tr data-title="${title}">
          <td>${title}</td>
          <td><input type="number" min="1" value="${quantity}" /></td>
          <td>$${price}</td>
          <td>$${quantity * price}</td>
          <td>
            <button class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>`
    })
    .join("")

  itemList.innerHTML = cartItemString
  totalPrice.textContent = cart.total
}

const allCatCards = document.querySelectorAll(".card")
allCatCards.forEach((card) => {
  const buyBtn = card.querySelector("button")
  buyBtn.addEventListener("click", (e) => {
    const price = Number(e.currentTarget.previousElementSibling.textContent.replace("$", ""))
    const title = e.currentTarget.previousElementSibling.previousElementSibling.textContent
    const item = { title, price }

    cart.addItem(item)
    renderCartItem(cart)
    console.log(cart.items);
  })
})

emptyCartBtn.addEventListener("click", () => {
  cart.clear()
  renderCartItem(cart)
})

itemList.addEventListener("click", (e) => {
  if (["I", "BUTTON"].includes(e.target.nodeName)) {
    const item = e.target.closest("tr")
    const obj = { title: item.dataset.title }
    cart.removeItem(obj)
    renderCartItem(cart)
  }
})

itemList.addEventListener("change", (e) => {
  const item = e.target.closest("tr")
  const quantity = Number(e.target.value)
  const obj = { title: item.dataset.title, quantity }
  cart.updateItem(obj)
  renderCartItem(cart)
})

// discountLink.addEventListener("click", (e) => {
//   e.preventDefault()
//   cart.setDiscount(0.8)
//   renderCartItem(cart)
// })
