import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRecordVinyl } from "react-icons/fa";

import CartIcon from "./cart/CartIcon";
import Form from "./SearchRecord";

const Nav = () => {
  const location = useLocation();

  const GuestLinks = () => (
    <>
      <Link to='/login'>
        <p>Login</p>
      </Link>
      <Link to='/signup' className='button-bg'>
        <p>Register</p>
      </Link>
    </>
  );

  return (
    <motion.nav
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        <Link to='/' className='logo'>
          <FaRecordVinyl />
          Vinyl Destination
        </Link>

        {location.pathname.startsWith("/records") ? (
          <Form />
        ) : (
          <Link to='/records' className='browse-button'>
            Explore Our Collection
          </Link>
        )}

        <div className='items'>
          <GuestLinks />
          <CartIcon />
        </div>
      </ul>
    </motion.nav>
  );
};

export default Nav;
