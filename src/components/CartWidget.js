import React from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (

      <Link to='/Cart' style={{marginRight: "20px"}}>
      <img src={require("./images/carrito.svg").default} width="30" height="30" alt="logo carrito" />

      <p>{totalProducts() || ''}</p>

    </Link>

  )
}

export default CartWidget
