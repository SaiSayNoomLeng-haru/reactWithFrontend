import { useContext, useState } from "react";
import { MenuContext } from "./Menu";
import { IoIosCloseCircle } from 'react-icons/io';
import { FaTree } from 'react-icons/fa';
import ConfirmationModal from "./ConfirmationModal";

export default function Cart() {
    const { cart, isConfirm, handleConfirm } = useContext(MenuContext);
    const cartItems = Object.entries(cart);

    const totalQuantity = cartItems.reduce((acc, [_, item]) => acc + item.quantity, 0);

    const totalCost = cartItems.reduce((acc,[_, item]) => acc + (item.price * item.quantity), 0)

    const deliveryFee  =  5;

    const tax = +(totalCost * 0.25).toFixed(2);

    const grandTotal = totalCost > 12 ? tax + totalCost : tax + totalCost + deliveryFee;

    const displayEl = cartItems.length > 0 ? (
        <div className="cart-container">
            <h1 className="text-red">Your Cart ({totalQuantity} items)</h1>
            <div className="cart-content">
                {cartItems.map(([itemName, item]) => (
                    <div key={itemName} className="each-item">
                        <div>
                        <p className="bold-2">{item.name}</p>
                        <p>
                            <span className="text-red bold-2">{item.quantity}x </span>
                            <span className="text-rose-300">@ ${item.price.toFixed(2)}</span>
                            <span className="text-rose-900 bold-2"> &nbsp;
                                {`$${(item.quantity * item.price).toFixed(2)}`}
                            </span>
                        </p>
                        </div>
                        <button><IoIosCloseCircle /></button>
                    </div>
                ))}
                <div className="total flex">
                   <div className="total-list">
                    <p className="bold-2 text-rose-500">Order Total</p>
                    <p className="bold-2">${totalCost.toFixed(2)}</p>
                   </div>
                   <div className="total-list">
                        <p className="bold-2 text-rose-500">Delivery Fee</p>
                        <p className={`bold-2 ${totalCost > 12 ? 'text-linethrough' : ''}`}>
                            ${deliveryFee}
                        </p>
                   </div>
                   <div className="total-list">
                        <p className="bold-2 text-rose-500">Tax</p>
                        <p className={`bold-2`}>
                            ${tax}
                        </p>
                   </div>
                   <div className="total-list">
                        <p className="bold-2 text-rose-500">Grand Total</p>
                        <p className={`bold-2`}>
                            ${`${grandTotal.toFixed(2)}`}
                        </p>
                   </div>
                </div>
                <div className="eco">
                <p>
                <FaTree />
                This is a <span className="bold-2">carbon-neutral</span> delivery</p>
                <p>Order over <span className="bold-2">$12</span> to get free delivery!</p>
                </div>
                <button 
                onClick={handleConfirm}
                className="confirm-btn"
                >Confirm Order</button>
            </div>
        </div>
    ) : (
        <div className="cart-container">
            <h1 className="text-red">Your Cart (0 items)</h1>
            <img src="./assets/images/illu.svg" alt="Illustration" />
            <p className="text-rose-900 bold-2">Your items will appear here</p>
        </div>
    );

    return <>
        {displayEl}
    </>;
}
