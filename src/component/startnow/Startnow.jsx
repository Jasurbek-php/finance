import './Startnow.css'
import game from './../../assets/game.png';
import member from './../../assets/member.png'
import phone from './../../assets/phone.png';

function Startnow() {
    return (
        <div className='Startnow'>
            <div className="keyfeatures-right">
                <ul>
                    <li><img src={game} alt="" />
                        <p>Innovative Solutions</p></li>
                    <li><img src={member} alt="" />
                        <p>24/7
                            Support</p></li>
                    <li><img src={phone} alt="" />
                        <p>Professional Team</p></li>
                </ul>
            </div>
            <div className="keyfeatures-left">
                <h3>Start Now</h3>
                <h1>Start Now & Make
                    Your Finances
                    Clear & Organized</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
            </div>
        </div>
    )
}

export default Startnow;