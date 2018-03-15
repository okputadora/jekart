$(document).ready(function(){

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
})
