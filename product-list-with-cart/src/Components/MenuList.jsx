import { useContext, useState } from "react";

import Card from "./Utility/Card";
import { MenuContext } from "./Menu";

export default function MenuList(){
    const { addToCart, menu } = useContext(MenuContext);
    return(
        <div className="menu-list">
            {menu.map(item => (
                <Card 
                    key={item.name}
                    {...item}
                    handleClick={() => addToCart(item) }
                />
            ))}
        </div>
    )
}