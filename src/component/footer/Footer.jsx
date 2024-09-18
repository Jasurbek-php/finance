import './Footer.css'
import { Link } from "react-router-dom";
import logo from './../../assets/blacklogo.png';

function Footer() {
    return (
        <div className='Footer'>
            <ul>
                <img src={logo} alt="" />
                <p>WeFinance is the highest rated expert team in the world</p>
                <p>©2021 WeFinance</p>
            </ul>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/aboutUs'}>About us</Link>
                </li>
                <li>
                    <Link to={'/howItWorks'}>How It Works</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'/ourServices'}>Our Services</Link>
                </li>
                <li>
                    <Link>
                        Contact US
                    </Link>
                </li>
                <li><Link>FAQ
                </Link></li>
            </ul>
            <ul>
                <li>
                    <Link>Our Team</Link>
                </li>
                <li>
                    <Link>Careers</Link>
                </li>
            </ul>

        </div >
    )
}

export default Footer;