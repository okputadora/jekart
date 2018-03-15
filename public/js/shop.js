$(document).ready(function(){
  // shop main page
  $("#shop").on("click", ".add-to-cart", function(){
    var id = this.id
    if (sessionStorage.cart){
      var currentCart = sessionStorage.cart
      // check for duplicates
      var cartArr = currentCart.split(",")
      console.log(cartArr)
      var addAnyway = true
      var duplicate = false
      cartArr.forEach(function(elem){
        if (elem == id){
          duplicate = true
          return
        }
      })
      if (duplicate){
        addAnyway = confirm("this item is already in your cart, would you like to add it again?")
      }
      if (addAnyway){
        sessionStorage.cart = currentCart + "," + id
        console.log(sessionStorage)
        return
      }
      return
    }
    sessionStorage.cart = id
    console.log(sessionStorage)
  })

  // individual item
  $("#addItem").on("click", function(){
    var value = $("#itemCount").val()
    if (value < 3)
    value++
    $("#itemCount").val(value)
  })
  $("#removeItem").on("click", function(){
    var value = $("#itemCount").val()
    if (value > 1){
      value--
    }
    $("#itemCount").val(value)
  })
  $("#shop-item-cart").on("click", function(e){
    e.preventDefault()
    var value = $("#itemCount").val()
    if (value > 1){
      for (i = 1; i <= value; i++){

      }
    }

  })
})
