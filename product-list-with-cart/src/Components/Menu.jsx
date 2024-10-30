import { createContext, useEffect, useState } from "react";
import { getMenu } from "../Api";
const MenuContext = createContext();

export default function Menu({children}){
    const [ menu, setMenu ] = useState([]);
    const [ cart, setCart ] = useState({});
    const [ isConfirm, setIsConfirm ] = useState(false);
  
  
    useEffect(() => {
        async function loadMenu() {
            const data = await getMenu();
            setMenu(data)
        }
        loadMenu();
    },[]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[item.name]) {
                return {
                    ...newCart,
                    [item.name]: {
                        ...newCart[item.name],
                        quantity: newCart[item.name].quantity + 1,
                    },
                };
            } else {
                return {
                    ...newCart,
                    [item.name]: { ...item, quantity: 1 }
                };
            }
           
        });
    };

    const handleConfirm = () => {
        setIsConfirm(true);
    }

    const newOrder = () => {
        setCart({});
        setIsConfirm(false)
    }

  
    return (
        <MenuContext.Provider 
        value={
            {menu,
            cart, 
            addToCart,
            isConfirm,
            handleConfirm,
            newOrder}
            }>
            <h1 className='text-underline'>Desserts</h1>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    );
}

export {MenuContext}