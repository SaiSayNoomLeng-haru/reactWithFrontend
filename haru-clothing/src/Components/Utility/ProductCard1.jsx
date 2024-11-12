import { CiHeart } from "react-icons/ci";
import { FaShoppingBag, FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';

export default function ProductCard1({images,name,price,discount,category, reviewCount}){
    const image = images.find(item => item.img1)
    
    return(
        <div className="product-card-1">
            <div className="product-card-1-img">
                <img loading="lazy" src={image.img1} alt={`${name}'s image`} />
                <p className="product-discount fs-300 bg-orange">{discount}% off</p>
                <div className="product-links flex text-dark bg-orange">
                    <CiHeart />
                    <FaExpandArrowsAlt />
                    <FaShoppingBag />
                </div>
            </div>
            <div className="product-card-1-content grid">
                <div className="product-type">
                    <p className="fs-300 text-muted ">{category}</p>
                    <p className="bold-1">{name}</p>
                </div>
                <div className="product-card-reviews">
                    <FaStar />
                    {reviewCount}
                </div>
                <div className="product-card-price flex">
                    <p>{`$${price * (discount / 100)}`}</p>
                    <p className="text-line-through">${price}</p>
                </div>
            </div>
        </div>
    )
}