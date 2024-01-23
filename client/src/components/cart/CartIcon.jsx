import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContainer from "./CartContainer";

const CartIcon = () => {
  return (
    <div className='cart'>
      <button
        type='button'
        className='btn-cart'
        onClick={() => console.log("toggle cart")}
      >
        <FaShoppingCart />
        <span className='items-amount'>0</span>
      </button>

      <CartContainer />
    </div>
  );
};

export default CartIcon;
