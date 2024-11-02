import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import { useState,useCallback } from "react";

export default function Header(){
    const [ navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(prevState => !prevState);
    }

    const getNavLinkClass = useCallback(({isActive}) => {
        return isActive ? 'active' : '';
    }, [])

    return(
        <header className="header flex container">
            <Link to='/'>
                <img className="logo" src="/assets/images/shared/logo.svg" alt="Space Travel Logo" aria-label="Space Travel Logo" />
            </Link>

            <div className="nav-line"></div>

            <Button 
             className={`mobile-toggle ${navOpen ? 'navOpen' : ''}`} 
             aria-expanded='false'
             onClick={toggleNav}>
                <span className="sr-only">
                menu button
                </span>
                </Button>

            <nav 
             className={`main-nav flex ${navOpen ? 'navOpen' : ''}`}
             role="navigation">
                <NavLink 
                 to='/'
                 className={getNavLinkClass}
                 onClick={toggleNav}
                 >
                    <span className="numbered-title">00</span>Home</NavLink>

                <NavLink 
                 to='destinations'
                 className={getNavLinkClass}
                 onClick={toggleNav}> <span className="numbered-title">01</span>
                    Desitnation
                </NavLink>

                <NavLink 
                 to='technology'
                 className={getNavLinkClass}
                 onClick={toggleNav}>
                     <span className="numbered-title">02</span>
                    Technology
                </NavLink>

                <NavLink 
                 to='crew'
                 className={getNavLinkClass}
                 onClick={toggleNav}>
                     <span className="numbered-title">03</span>
                    Crew
                </NavLink>
            </nav>
        </header>
    )
}