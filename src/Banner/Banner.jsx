import banner from "../assets/images/banner.jpg";

const Banner = () => {
    return (
        <div className="flex items-center justify-between rounded-lg bg-rose-100 p-6">

            <div className="text-center flex flex-col gap-2">
                <h3 className="font-extrabold text-4xl text-rose-500">Unlock a World of  Stories</h3>

                <h4 className="font-semibold text-2xl text-gray-400"> Find Your Next Favorite Book at -</h4>

                <h2 className="font-semibold text-5xl text-rose-400 uppercase">Simple Book Shop</h2>

                <button className="btn bg-rose-400 text-2xl text-white">Buy Books</button>
            </div>

            <div className="w-1/2">
                <img className="rounded-lg" src={banner}></img>
            </div>
        </div>
    );
};

export default Banner;