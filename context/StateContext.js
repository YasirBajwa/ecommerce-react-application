
import React,{createContext,useContext,useState,useEffect} from 'react';

import { toast } from 'react-hot-toast';

const Context = createContext();

export const stateContext =({children}) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItmes, setcartItmes] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantity, settotalQuantity] = useState();
  const [qty, setQty] = useState(1);


  return(
      <Context.Provider
       value={{
           showCart,
           cartItmes,
           totalPrice,
           totalQuantity,
           qty
       }}
      >
          {children}
      </Context.Provider>
  )
}