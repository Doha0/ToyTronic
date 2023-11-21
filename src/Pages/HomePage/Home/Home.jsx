
import useTitle from "../../../Hook/useTitle";
import Products from "../../Products/products";
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

            <div className="container mx-auto">
                <Products />
                <Gallery></Gallery>
                <SubCategory></SubCategory>
                <Faq></Faq>
            </div>

            <Shop></Shop>

        </div>
    );
};

export default Home;