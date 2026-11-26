const items = []
let displayArea2 = document.getElementById("itemList")
let emptyState = document.getElementById("emptyState")
let itemCount = document.getElementById("itemCount")
let budget = 0


function setBudget() {
  let budgetInput = document.getElementById("budgetInput").value
  let displayArea = document.getElementById("totalBudget")
  if (items.length > 0) {
    alert("You already have items in your shopping list. Clear your list before setting a new budget.")
    document.getElementById("budgetInput").value = ""

  } else {
    if (budgetInput == "") {
      alert("Set budget!")
    } else {
      displayArea.innerHTML = `₦${budgetInput}`
      document.getElementById("budgetInput").value = ""
      budget = Number(budgetInput)
    }
  }

}

function calculateProgress() {
  let percentSpent = `${((priceTotal / budget) * 100).toFixed(0)}`
  console.log(percentSpent);
  
}


function calculateRemaining() {
  let remaining = budget - priceTotal
  let remainingAmount = document.getElementById("remainingAmount")
  remainingAmount.innerHTML = `₦${remaining}`
  if (remaining < 0) {
    remainingCard.classList.add("over")
  } else {
    remainingCard.classList.remove("over")
  }
  // show()
  // calculateTotal()
}

function addItem() {
  let itemName = document.getElementById("itemName").value
  let itemPrice = document.getElementById("itemPrice").value

  let itemInput = {
    name: itemName,
    price: Number(itemPrice)
  }

  if (budget == "") {
    alert("Set a budget!")
    document.getElementById("itemName").value = ""
    document.getElementById("itemPrice").value = ""
  } else {
    if (itemName == "" || itemPrice == "") {
      alert("Input item")
    } else {
      document.getElementById("itemName").value = ""
      document.getElementById("itemPrice").value = ""
      items.push(itemInput)
      console.log(items);
      show()
      calculateTotal()
      calculateRemaining()
      calculateProgress()
      // itemNum()
    }
  }

  // displayArea2.innerHTML = itemInput
}

function itemNum() {

}

function show() {
  displayArea2.innerHTML = ""
  for (let index = 0; index < items.length; index++) {
    displayArea2.innerHTML += `<div class="item-row"><p class="item-name">${index + 1}. ${items[index].name}</p><p>₦${items[index].price}</p><button class="delete-btn" type="button" onclick="removeItem(${index})">
        <i class="bi bi-trash3"></i>
      </button></div>`
  }
  let itemNum = items.length
  itemCount.innerHTML = `Items(${itemNum})`
  if (items.length === 0) {
    emptyState.classList.remove("hidden")
  } else {
    emptyState.classList.add("hidden")
  }
}

let priceTotal = 0
let remainingCard = document.getElementById("remainingCard")


function calculateTotal() {
  let totalSpent = document.getElementById("totalSpent")

  priceTotal = 0

  for (let index = 0; index < items.length; index++) {
    priceTotal += items[index].price
  }

  totalSpent.innerHTML = `₦${priceTotal}`

}


function removeItem(i) {
  let check = confirm("Are you sure you want to delete item?")
  if (check) {
    items.splice(i, 1)
    calculateTotal()
    calculateRemaining()
    show()
    // itemNum()
  } else {
    show()
  }
}

function clearAll() {
  if (items.length === 0) {
    alert("There is nothing to delete")
  }
  else {
    let check = confirm("Are you sure you want to delete all items?")

    if (check) {
      items.length = 0
      show()
      calculateTotal()
      calculateRemaining()
      show()
      // itemNum()
    }
    else {
      show()
    }
  }
}
