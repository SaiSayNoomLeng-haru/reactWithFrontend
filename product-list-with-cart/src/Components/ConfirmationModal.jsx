import { useContext } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Menu, { MenuContext } from './Menu';

export default function ConfirmationModal(){
    const { cart, isConfirm, newOrder } = useContext(MenuContext);
    const cartItems = Object.entries(cart);
    
    const totalQuantity = cartItems.reduce((acc, [_, item]) => acc + item.quantity, 0);

    const totalCost = cartItems.reduce((acc,[_, item]) => acc + (item.price * item.quantity), 0)

    const deliveryFee  =  5;

    const tax = +(totalCost * 0.25).toFixed(2);

    const grandTotal = totalCost > 12 ? tax + totalCost : tax + totalCost + deliveryFee;

    return(
      <>
       { isConfirm ? (
          <div className='confirm-order-modal'>
            <div className='confirm-caption'>
                <IoMdCheckmarkCircleOutline />
                <h2>Order Confrimed</h2>
                <p>We Hope you enjoy your food!</p>
            </div>
            <div className='confirm-content grid'>
                {cartItems.map(([cartName, item]) => (
                     <div key={cartName} className="confirmed-items grid">
                     <img src={item.image.desktop} alt={`${item.name}'s image`} />
                     <p className="confirmed-name">{item.name}</p>
                     <div>
                         <p className="confirmed-quantity">{item.quantity}x</p>
                         <p className="confirmed-price">@{item.price}</p>
                     </div>
                     <p className='confirmed-item-total'>{`${(item.quantity * item.price).toFixed(2)}`}</p>
                 </div>
                ))}
               
            </div>
            <div className='confirm-order-total'>
                <p>Order Total</p>
                <p>${grandTotal.toFixed(2)}</p>
            </div>
            <button onClick={newOrder}>Start New Order</button>
          </div>
       )
        : null
       }
      </>
           
    )
}