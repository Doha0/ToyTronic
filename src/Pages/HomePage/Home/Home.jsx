
import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";
import SubCategory from "../SubCategory/SubCategory";



const Home = () => {

    useTitle('Home');

    return (
        <div>

            <Banner></Banner>

            <Gallery></Gallery>
            <SubCategory></SubCategory>

            <Faq></Faq>
            <Shop></Shop>

        </div>
    );
};

export default Home;