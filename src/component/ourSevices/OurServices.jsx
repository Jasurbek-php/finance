import './OurServices.css'
import wallet from './../../assets/Icon-wallet.svg'
import bgeffectOne from './../../assets/bg-effect-1.png'
function OurServices() {
    return (
        <div className='OurServices'>
            <h2>Our Services</h2>
            <h1>What We Offer</h1>
            <div className='flex__div'>
                <div className="post">
                    <img src={wallet} alt="" />
                    <p>#1</p>
                    <h3>Financial Report</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <img className='bgeffect' src={bgeffectOne} alt="" />
                </div>
                <div className="post ">
                    <img src={wallet} alt="" />
                    <p>#2</p>
                    <h3>Manage Investments</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <img className='bgeffect' src={bgeffectOne} alt="" />
                </div>
                <div className="post ">
                    <img src={wallet} alt="" />
                    <p>#3</p>
                    <h3>Financial Report</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <img className='bgeffect' src={bgeffectOne} alt="" />
                </div>
            </div>

        </div>
    )
}

export default OurServices;