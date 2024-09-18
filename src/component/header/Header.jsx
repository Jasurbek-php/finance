import './Header.css'
import person from './../../assets/person.png'
import Coins from './../../assets/Coins.png'
function Header() {
    return (
        <div className="Header">
            <div className="header-left">
                <h1 >Financial <br />
                    Solutions.</h1>
                <p className='two'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <button>
                    <p>Let's Talk</p>
                </button>
            </div>
            <div className="header-right">
                <img src={person} alt="" />
            </div>
            <div className='header-absolute-img'>
                <img src={Coins} alt="" />

            </div>



        </div>
    );
}

export default Header;
