

const Banner = () => {
    return (

        <section className="w-full bg-center bg-cover bg-no-repeat h-[56rem]" style={{ backgroundImage: "url('https://i.ibb.co/ZdkqRq1/Drone-Banner.jpg')" }}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/30">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white lg:text-4xl">Toy Tronic <span className="text-sky-400">Ignite</span> Your Playtime</h1>
                    <p className="my-4 font-medium text-slate-200 text-lg">Welcome to ToyTronic, where imagination meets innovation!  Explore a world of <br /> electrifying  play with our incredible selection of electronic toys. Unleash the excitement.</p>
                    <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-sky-600 rounded-md lg:w-auto hover:bg-sky-500 focus:outline-none focus:bg-sky-500">Get Started</button>
                </div>
            </div>
        </section>


    );
};

export default Banner;