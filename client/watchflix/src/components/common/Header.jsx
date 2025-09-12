import { Link } from "react-router-dom";


export default function Header({}) {
    return(
        <header className="w-full px-8 py-4 flex justify-between items-center bg-black/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
            <Link to="/" className="text-red-600 text-3xl font-extrabold tracking-wide drop-shadow-lg hover:text-white transition-colors duration-200">
                Watchflix
            </Link>
            <div className="flex items-center gap-4">
                <select className="bg-black/60 text-white border border-red-600 rounded px-3 py-1 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all">
                    <option>English</option>
                    <option>Telugu</option>
                    <option>Hindi</option>
                </select>
                <Link to="/">
                    <button className="text-lg text-white bg-red-600 rounded-lg px-4 py-2 font-semibold shadow hover:bg-red-700 transition-colors duration-200">
                        Dashboard
                    </button>
                </Link>
                <Link to="/signin">
                    <button className="text-lg text-white bg-red-600 rounded-lg px-4 py-2 font-semibold shadow hover:bg-red-700 transition-colors duration-200">
                        Sign In
                    </button>
                </Link>
            </div>
        </header>
    );
}