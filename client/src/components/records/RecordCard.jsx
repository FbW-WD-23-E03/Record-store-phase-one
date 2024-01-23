import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const RecordCard = ({ record, index }) => {
  const { title, img, price, artist, year } = record;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.05 }}
      className='record'
    >
      <div>
        <img className='record-img' src={img} alt='cartoon of record' />
      </div>

      <div className='record-info'>
        <p>{title}</p>
        <p>
          {artist} - {year}
        </p>
      </div>

      <div className='record-footer'>
        <p className='record-footer-price'>{price} €</p>
        <div className='record-footer-icon'>
          <FaShoppingCart
            onClick={() => console.log("Add to cart handler goes here")}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RecordCard;
