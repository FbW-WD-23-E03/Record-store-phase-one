import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const CartItemsList = () => {
  const [cartState] = useState(false);

  return (
    <ul className='cart-items-list'>
      {cartState.items.length > 0 &&
        cartState.items?.map(({ record, quantity }) => {
          const { _id, title, artist, img } = record;

          return (
            <li key={_id} className='cart-item'>
              <h3 className='cart-item__title'>
                {title} by {artist}
              </h3>

              <img src={img} alt='thumbnail' className='cart-item__thumbnail' />

              <div className='cart-item__actions'>
                <div className='cart-item__quantity'>{quantity}</div>

                <MdDelete
                  className='cart-item__remove'
                  onClick={() => console.log("delete from cart handler")}
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default CartItemsList;
