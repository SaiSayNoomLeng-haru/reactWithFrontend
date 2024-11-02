import { memo } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return(
       <section id="home" className="home grid">
        <div className="home-content text-center flow">
            <p className="text-uppercase ff-condensed letter-spacing-2">So, you want to travel to <span className="d-block fs-900 ff-serif">space</span></p>
            <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>

        <div className="home-button">
            <Link className="explore-btn text-uppercase bg-white text-dark fs-500 ff-serif" to='destinations'>explore</Link>
        </div>
       </section>
    )
}

export default memo(Home);