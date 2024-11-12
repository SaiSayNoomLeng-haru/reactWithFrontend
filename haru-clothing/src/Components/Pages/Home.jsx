import { memo, useContext, useMemo, useState } from "react";
import { CiDiscount1 } from 'react-icons/ci'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../Utility/Banner";
import Button from "../Utility/Button";
import { AppContext } from "../../App";
import ProductCard1 from "../Utility/ProductCard1";
import TestimonialCard from "../Utility/TestimonialCard";
import FaqDropdown from "../Utility/FaqDropdown";

const Home = () => {
    const { data } = useContext(AppContext);

    const products = useMemo(()=> (
        Object.keys(data).reduce((acc, category)=> {
            return acc.concat(data[category])
         }, [])
    ), [data]);

    const reviews = useMemo(() => Object.values(data.reviews), []);
    const faq = useMemo(() => Object.values(data.faq), []);
    
    const [ selectedID, setSelectedID ] = useState(null);

    const handleOn = (id) => {
        setSelectedID(prevID => prevID === id ? null : id );
    }

    return(
       <section id="home" className="home flow grid">
        <div className="hero flow">
            <p className="discounted-text">
                <span className="bold-2">
                    <CiDiscount1 />
                    50% OFF &nbsp;
                    </span>
                Summer Super Sale
            </p>

            <h1>Step into Style: Your Ultimate Fashion Destination</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio enim maxime tenetur, eveniet quod!</p>

            <Link to='shop' className="cta bg-brown text-white">Shop Now <FaArrowRight /></Link>
        </div>

        <Banner className='container'/>
        
        <div className="home-links grid container">
            <Link to='shop' className="home-links-woman">
                <div className="content">
                    <p className="bg-orange i-block">
                        <span className="bold-2">2500+ </span>
                        Items
                    </p>
                    <h2>For Women</h2>
                    <ul className="fs-300">
                        <li>Blazers</li>
                        <li>T-shirts & Blouses</li>
                        <li>Dresses</li>
                        <li>Jackets & Coats</li>
                        <li>Jeans</li>
                        <li>Knit</li>
                        <li>Sarees</li>
                    </ul>
                </div>
            </Link>

            <Link to='shop' className="home-links-man">
                <div className="content">
                    <p className="bg-orange i-block">
                        <span className="bold-2">1500+ </span>
                        Items
                    </p>
                    <h2>For Men</h2>
                    <ul className="fs-300">
                        <li>Blazers</li>
                        <li>T-shirts & Shirts</li>
                        <li>Jackets & Coats</li>
                        <li>Jeans</li>
                    </ul>
                </div>
            </Link>

            <Link to='shop' className="home-links-accessories">
                <div className="content">
                    <p className="bg-orange i-block">
                        <span className="bold-2">800+ </span>
                        Items
                    </p>
                    <h2>Accessories</h2>
                    <ul className="fs-300">
                        <li>Handbags</li>
                        <li>Watches</li>
                        <li>Sunglasses</li>
                        <li>Hat</li>
                    </ul>
                </div>
            </Link>
        </div>

        <div className="home-products container">
            <p>Our Products</p>
            <div className="home-products-title flex">
                <h2 className="bold-2">Our Top Seller Products</h2>
                <div className="home-products-btn-groups">
                    <Button>All</Button>
                    <Button>Women</Button>
                    <Button>Men</Button>
                    <Button>Accessories</Button>
                </div>
            </div>
            <div className="home-products-display container">
                {products.filter(item=> item.reviewCount > 4).map(item => (
                    <ProductCard1 
                        key={item.name}
                        {...item} />
                ))}
            </div>
        </div>
        
        <div className="hero-2 bg-accent flex">
            <div>
                <img loading="lazy" src="/assets/images/hero2-img.jpg" alt="" />
            </div>
           <div className="hero-2-content flex">
                <p>Limited Time Offers</p>
                <h2>25% Off All Fashion Favorites - Limited Time!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae fugiat, culpa corporis expedita odit eius est. Soluta, consequatur autem.</p>
                <Link to='shop' className="cta bg-brown text-white">Shop Now <FaArrowRight /></Link>
           </div>
        </div>

        <div className="popular-products container flow">
            <p>Today Deals</p>
            <div className="popular-products-title flex">
                <h2>Deals of the day</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis eveniet quibusdam neque delectus explicabo voluptate iste, similique quod deleniti.</p>
            </div>
            <div className="popular-products-display">
                {products.filter(item => item.discount > 30).map(item => <ProductCard1
                        key={item.id}
                        {...item} />
                )}
            </div>
        </div>

        <div className="home-links-2 flex container">
            <div className="home-links-2-man bg-brown text-white flow">
                <p>Flat 20% discount</p>
                <h2>Men's Latest Collection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas nam adipisci ipsum, voluptatum labore.</p>
                <Link to='shop' className="cta bg-orange text-dark">Shop Now <FaArrowRight /></Link>
            </div>
            <div className="home-links-2-woman bg-orange flow">
                <p>Flat 25% discount</p>
                <h2>Women's Latest Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea numquam animi eaque quas esse.</p>
                <Link to='shop' className="cta bg-brown text-white">Shop Now <FaArrowRight /></Link>
            </div>
        </div>

        <div className="testimonials container flow">
            <p>Testimonials</p>
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container bg-accent">
                {reviews.map(blog => (
                    <TestimonialCard 
                        key={blog.id}
                        {...blog} />
                ))}
            </div>
        </div>
        
        <div className="faq bg-accent padding-1 text-center flow">
            <p>FAQ</p>
            <h3>Questions? Look Here</h3>
            <div className="faq-questions grid padding-1">
                {faq.map(item => (
                    <FaqDropdown 
                        key={item.id}
                        {...item}
                        handleOn={() => handleOn(item.id)}
                        on={selectedID === item.id}/>
                ))}
            </div>
        </div>

        <div className="newsletter flow grid">
            <p className="text-center">Our Newsletter</p>
            <h2 className="text-center">Subscribe to Our Newsletter to Get Updates to Our Latest Collection</h2>
            <p className="fs-300 text-center text-muted">Get 20% off on your first order just by subscribing to our newsletter</p>
            <form action="" className="newsletter-form grid">
                <input type="email" />
                <Button className="bg-brown text-white">Subscribe</Button>
            </form>
        </div>

       </section>
    )
}

export default memo(Home);