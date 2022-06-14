
import React,{createContext,useContext,useState,useEffect} from 'react';

import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext =({children}) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItmes, setcartItmes] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantity, settotalQuantity] = useState();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
      setQty((prevQty) => prevQty + 1 )
  }
  const decreaseQty = () => {
    setQty((decQty) => {
       if(decQty - 1 < 1) return 1;
       
       return decQty -1
    
    } )
}
  return(
      <Context.Provider
       value={{
           showCart,
           cartItmes,
           totalPrice,
           totalQuantity,
           qty,
           increaseQty,
           decreaseQty
       }}
      >
          {children}
      </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);