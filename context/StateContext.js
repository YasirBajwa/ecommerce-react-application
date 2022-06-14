import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItmes, setCartItmes] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState();
  const [qty, setQty] = useState(1);

  const addCart = (product, quantity) => {
    const checkProduct = cartItmes.find((item) => item._id == product._id);

    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
    setTotalQuantity((prevQty) => prevQty + quantity);

    if (checkProduct) {
      const updateCartItems = cartItmes.map((cartProduct) => {
        if (cartProduct._id == product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItmes(updateCartItems);
    }
     else {
      product.quantity = quantity;
      setCartItmes([...cartItmes, { ...product }]);
     }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    setQty((decQty) => {
      if (decQty - 1 < 1) return 1;

      return decQty - 1;
    });
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItmes,
        totalPrice,
        totalQuantity,
        qty,
        increaseQty,
        decreaseQty,
        addCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
