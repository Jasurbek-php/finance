import './KeyFeatures.css'
import group from './../../assets/Group 115.png'

function KeyFeatures() {
    return (
        <div className='KeyFeatures'>
            <div className="keyfeatures-left">
                <h3>Key Features</h3>
                <h1>Manage Your
                    Finances From
                    one Place</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <button>
                    <p>Check All Fitures</p>
                </button>
            </div>
            <div className="keyfeatures-right">
                <img src={group} alt="" />
            </div>

        </div>
    )
}

export default KeyFeatures;