import React, { useState } from "react";
import CartItemsList from "./CartItemsList";
import { motion } from "framer-motion";

const CartContainer = () => {
  const [cartState] = useState(false);

  return (
    <motion.div
      initial={{ y: -1000, x: 100 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cartState.isOpen ? (
        <div
          className='cart-sidebar'
          style={{ height: "100vh", transition: "1s" }}
        >
          <button
            type='button'
            className='close-button'
            onClick={() => console.log("toggle cart")}
          >
            &times;
          </button>
          {cartState.items ? (
            <>
              <p className='cart-price'>Total: € 0</p>
              <div className='cart-body'>
                <CartItemsList />
              </div>
            </>
          ) : (
            <>
              <p className='cart-price'>Total: €0</p>
              <div className='cart-body'>
                <p className='cart-empty'>The silence is deafening here!</p>
              </div>
            </>
          )}
        </div>
      ) : null}
    </motion.div>
  );
};

export default CartContainer;
