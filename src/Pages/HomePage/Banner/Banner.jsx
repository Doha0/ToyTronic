import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (

        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content mx-6 grid grid-cols-1 lg:grid-cols-2">
                    <div className='text-white'>
                        <h1 className="mb-5 text-5xl font-bold">Toy Tronic <br /> Ignite Your Playtime</h1>
                        <p className="mb-5 font-medium text-lg">Welcome to ToyTronic, where imagination meets innovation!  Explore a world of electrifying play with our incredible selection   of electronic toys. From interactive robots to cutting-edge gadgets, ToyTronic brings the thrill of technology to your fingertips. Unleash the excitement.</p>
                        <button className="btn bg-slate-900 text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;