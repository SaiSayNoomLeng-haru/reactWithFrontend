
import { FaCartArrowDown } from 'react-icons/fa6'


export default function Card({image, name, category, price, handleClick}){
    return(
        <div className="menu-card-container">
            <div className="card-img-container">
                <img src={image.mobile} alt={`${name}'s product photo`} />
                <button 
                    className="add-btn"
                    onClick={handleClick}>
                    <FaCartArrowDown  className="text-red"/>
                    Add to Cart
                </button>
            </div>
            <div className="card-content">
                <p className="text-rose-500">{category}</p>
                <h4>{name}</h4>
                <p className="text-red bold-2">${price.toFixed(2)}</p>
            </div>
        </div>
    )
}