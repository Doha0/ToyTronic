
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";
import SubCategory from "../SubCategory/SubCategory";



const Home = () => {

    return (
        <div>

            <Banner></Banner>

            <Gallery></Gallery>
            <SubCategory></SubCategory>


            <Shop></Shop>
            <Faq></Faq>

        </div>
    );
};

export default Home;