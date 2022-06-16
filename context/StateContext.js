import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const addCart = (product, quantity) => {
    const checkProduct = cartItems.find((item) => item._id == product._id);

    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
    setTotalQuantity((prevQty) => prevQty + quantity);

    if (checkProduct) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id == product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setcartItems(updateCartItems);
    }
     else {
      product.quantity = quantity;
      setcartItems([...cartItems, { ...product }]);
     }
    toast.success(`${qty} ${product.name} added to the cart`);
  };


  const toggleCartItemQunatity = (id,value) => {
       foundProduct = cartItems.find((item) =>item._id === id);
       index =  cartItems.findIndex((product) => product._id === id);

       if(value === 'inc'){
            setcartItems( [...cartItems, {...foundProduct,quantity:foundProduct.quantity+1}])
            foundProduct.quantity += 1;
            setTotalPrice( (prevTotal) => prevTotal + foundProduct.price)
            setTotalQuantity((prevTotalQty) => prevTotalQty + 1)
       }
       else if(value === 'dec'){
                if(foundProduct.quantity > 1){
                  setcartItems( [...cartItems, {...foundProduct,quantity:foundProduct.quantity - 1}])
                  foundProduct.quantity -= 1;
                  setTotalPrice( (prevTotal) => prevTotal - foundProduct.price)
                  setTotalQuantity((prevTotalQty) => prevTotalQty - 1)
                }
       }
  }

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
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        increaseQty,
        decreaseQty,
        addCart,
        setShowCart,
        toggleCartItemQunatity
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
