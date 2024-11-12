import { FaStar } from "react-icons/fa";

export default function TestimonialCard({image, name, rating, blogPostDesc, role}){
    return(
        <div className="testimonial-card flex">
            <div className="testimonial-card-img">
              <img loading="lazy" src={image} alt={`${name}'s image`} aria-label="blog post's picture" />
            </div>
            <div className="testimonial-card-content flow">
                <p className="bold-2"><FaStar className="text-orange"/> {`${rating.toFixed(1)}`}</p>
                <p className="text-muted fs-300">{blogPostDesc}</p>
                <div>
                    <p className="bold-1">{name}</p>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    )
}