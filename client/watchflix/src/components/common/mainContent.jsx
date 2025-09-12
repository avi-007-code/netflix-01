import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./header";

export default function MainContent() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="flex-grow flex items-center justify-center bg-black/50">
                <div className="text-center bg-black bg-opacity-70 p-6 rounded">
                    <h2 className="text-4xl font-bold mb-4">Unlimited movies, TV shows, and more.</h2>
                    <p className="text-lg mb-6">Watch anywhere. Cancel anytime.</p>
                    <Link to="/signin" className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700">Get Started</Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-4 bg-black text-center text-gray-500">
                <p>&copy; 2025 WatchFlix. All rights reserved.</p>
            </footer>
        </div>
    );
}