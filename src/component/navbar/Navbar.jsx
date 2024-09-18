import './Navbar.css'
import logo from './../../assets/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='Navbar'>
            <img src={logo} alt='Logo' />
            <ul>
                <li>
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