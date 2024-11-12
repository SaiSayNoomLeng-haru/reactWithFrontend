import { Link, NavLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { FaUserLarge } from 'react-icons/fa6';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function Header(){
    const [ navOpen, setNavOpen] = useState(false);

    const getActiveClass = useMemo(() => (
        ({isActive}) => isActive ? 'active' : ''
    ), [])

    const handleNav = (e) => {
        setNavOpen(prevState => !prevState);

    }

    return(
        <header className='header container flex'>
            <Link to='/' className="header-logo">
                <img src="/assets/images/logo-brown.png" alt="Haru Clothing Online Store Logo" aria-label='Haru Clothing Online Store Logo' />
            </Link>

            <button 
             className={`mobile-toggle ${navOpen ? 'navOpen' : ''}`}
             aria-label='mobile toggle button'
             aria-expanded='false'
             onClick={handleNav}
            ><span className='sr-only'>Menu</span>
            </button>

            <nav 
             className={`navbar flex ${navOpen ? 'navOpen' : ''}`}
             role='navigation'>
                <NavLink
                    to='/'
                    end
                    className={getActiveClass}
                    onClick={handleNav}
                >
                    Home
                </NavLink>

                <NavLink
                    to='shop'
                    className={getActiveClass}
                    onClick={handleNav}
                >
                    Shop
                </NavLink>


                <NavLink
                    to='about-us'
                    className={getActiveClass}
                    onClick={handleNav}
                >
                    About Us
                </NavLink>

                <NavLink
                    to='contact-us'
                    className={getActiveClass}
                    onClick={handleNav}
                >
                    Contact Us
                </NavLink>

                <NavLink
                    to='blog'
                    className={getActiveClass}
                    onClick={handleNav}
                >
                    Blog
                </NavLink>
            </nav>

            <form action="" className='form flex'>
                <div className="input-boxes">
                    <HiMagnifyingGlass />
                </div>

                <Link
                 to='wishlist'>
                    <IoIosHeartEmpty />
                </Link>

                <Link
                 to='cart'>
                    <IoCartOutline />
                </Link>

                <Link
                 to='sign-in'>
                    <FaUserLarge />
                </Link>

            </form>

        </header>
    )
}