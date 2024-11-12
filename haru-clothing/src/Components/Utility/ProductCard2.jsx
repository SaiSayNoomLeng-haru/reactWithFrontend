export default function ProductCard2({images, name, price, discount, category, brand, reviewCount}){
    const image = images.find(item => item.img1);
    
    return(
        <div className="product-card-2">
            <div className="product-card-2-img">
                <img loading="lazy" src="" alt="" />
                <p className="product-discount fs-300 bg-orange">
                    
                </p>
            </div>
        </div>
    )
}