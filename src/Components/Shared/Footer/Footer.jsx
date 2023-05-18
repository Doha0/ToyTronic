import logo from "../../../assets/logo.png"
import { SiYoutubegaming } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { SiTwitter } from 'react-icons/si';

const Footer = () => {
    return (
        <div className=" mt-36">
            <footer className="footer p-10 md:pl-36 bg-sky-200 text-black">
                <div>
                    <span className="text-2xl font-bold text-sky-500">
                        Toy Tronic
                    </span>
                    <p className="text-lg">
                        Get your favorite electronic toys from Toy Tronic.
                    </p>
                    <div className="mt-4 md:place-self-center md:justify-self-start cursor-pointer">
                        <div className="grid grid-flow-col gap-4 text-info">
                            <SiTwitter size={24}></SiTwitter>
                            <SiYoutubegaming size={24}></SiYoutubegaming>
                            <ImFacebook size={24}></ImFacebook>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-lg font-semibold text-sky-600">Toys</span>
                    <a className="link link-hover">SkyFlyer X300</a>
                    <a className="link link-hover">AeroMax Pro</a>
                    <a className="link link-hover">NitroSpeed GT</a>
                    <a className="link link-hover">AstroBot X500</a>
                </div>
                <div>
                    <span className="text-lg font-semibold text-sky-600">Social</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </div>
                <div>
                    <span className="text-lg font-semibold text-sky-600">About</span>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Contact Us</a>
                </div>



            </footer>
            <div className="footer px-10 py-4 md:px-36  bg-sky-200 text-black">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <p>
                        <span className="text-xl font-semibold text-sky-500">Toy Tronic</span> <br />
                        Providing reliable services since 2010
                    </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <p>
                        © 2023 ToyTronic Inc. All Rights Reserved.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;