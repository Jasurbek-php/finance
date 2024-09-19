import './Navbar.css'
import logo from './../../assets/logo.png';
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menu toggle funksiyasi
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // ochiq bo'lsa yopadi, yopiq bo'lsa ochadi
    };


    return (
        <div className='Navbar'>
            <img src={logo} alt='Logo' />
            <div className="menu-icon" id='menuIcon' onClick={toggleMenu}>

                <CiMenuBurger className='icons' />
            </div>

            <ul id='menuItems' className={isMenuOpen ? 'active' : ''}>
                <li className='menuItemsOne'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/aboutUs'}>About us</Link>
                </li>
                <li>
                    <Link to={'/howItWorks'}>How It Works</Link>
                </li>
                <li>
                    <Link to={'/ourServices'}>Our Services</Link>
                </li>
                <li>
                    <Link to={'/more'}>More</Link>
                </li>
            </ul>
            <button className='btn'> <p>
                Contact us
            </p> </button>
        </div>
    )
}

export default Navbar;