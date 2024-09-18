import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import './AboutUs.css'

function AboutUs() {
    return (<div className='Container'>

        <Navbar />
        <div className='SectionTwo'>
            <div className='sectiontwo-left'>
                <h2>Our Film</h2>
                <h1>We are Agile. Constantly
                    Focused on Growth and
                    Being Better</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <button>
                    <p>Read About Us</p>
                </button>
            </div>
            <div className='sectiontwo-right'>
                <div className='box box__first'>
                    <div className='first'>
                        <h1>18</h1>
                        <p>Years Experience</p>
                    </div>
                    <div className='first'>
                        <h1>9.5/10</h1>
                        <p>Average rating</p>
                    </div>

                </div>
                <div className='box'>
                    <div className='second'>
                        <h1>240+</h1>
                        <p>Completed Projects</p>
                    </div>
                    <div className='second'>
                        <h1>150+</h1>
                        <p>Served</p>
                    </div>

                </div>


            </div>

        </div>
        <Footer />
    </div>

    )
};

export default AboutUs;