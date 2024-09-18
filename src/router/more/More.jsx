import ContactUs from "../../component/contactus/ContactUs";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Startnow from "../../component/startnow/Startnow";

function More() {
    return (
        <div className="More">
            <Navbar />
            <ContactUs />
            <Startnow />
            <Footer />

        </div>
    )
}

export default More;