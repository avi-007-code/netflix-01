import { useState } from "react";
import axios from "axios";

export default function AddMovie() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [year, setYear] = useState("");
    const [url, setUrl] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8060/api/admin/addMovie`, {
                title: title,
                desc: desc,
                year: year,
                url: url,
                rating: rating
            });
            alert("Movie added");
            console.log("response", response);
        } catch (error) {
            console.log("catch", error.message);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Vignette overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 100%)' }}></div>
            <form onSubmit={handleSubmit} className="relative z-10 bg-gradient-to-b from-black/80 to-red-900/80 p-8 rounded-lg shadow-lg w-full max-w-lg border border-red-700">
                <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Add Movie</h1>
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-gray-200 mb-1">Genre</label>
                    <select id="genre" className="w-full px-3 py-2 border border-red-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600">
                        <option>Horror</option>
                        <option>Action</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-200 mb-1">Title</label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter movie title"
                        className="w-full px-3 py-2 border border-red-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="desc" className="block text-gray-200 mb-1">Description</label>
                    <input
                        type="text"
                        id="desc"
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter movie description"
                        className="w-full px-3 py-2 border border-red-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="year" className="block text-gray-200 mb-1">Year</label>
                    <input
                        type="text"
                        id="year"
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Enter release year"
                        className="w-full px-3 py-2 border border-red-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="url" className="block text-gray-200 mb-1">URL</label>
                    <input
                        type="text"
                        id="url"
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter movie URL"
                        className="w-full px-3 py-2 border border-red-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-200 mb-1">Rating</label>
                    <input
                        type="text"
                        id="rating"
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Enter movie rating"
                        className="w-full px-3 py-2 border border-red-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 font-semibold shadow-md transition-colors"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
}