import './OurServices.css'
import news from './../../assets/lates-new.png'

function OurServices() {
    return (
        <div className='OurServices'>
            <h2>Our Services</h2>
            <h1>Latest News</h1>
            <div className='flex__div'>
                <div className="post">
                    <div className='post-top'>
                        <img src={news} alt="" />

                    </div>
                    <div className="post-bottom">
                        <span>January 01, 2021</span>
                        <h3>How to Start a Successful in 2020</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><button>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
                <div className="post ">
                    <div className='post-top'>
                        <img src={news} alt="" />

                    </div>
                    <div className="post-bottom">
                        <span>January 01, 2021</span>
                        <h3>How to Start a Successful in 2020</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><button>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
                <div className="post ">
                    <div className='post-top'>
                        <img src={news} alt="" />

                    </div>
                    <div className="post-bottom">
                        <span>January 01, 2021</span>
                        <h3>How to Start a Successful in 2020</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><button>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default OurServices;