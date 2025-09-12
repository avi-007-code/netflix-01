
import { Link } from 'react-router-dom';

export default function UserDash() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>
            <nav className="mb-6">
                <ul className="space-y-4">
                    <li>
                        <Link to="/user/search" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"><input type='text'/>Search</Link>
                    </li>
                    <li>
                        <Link to="/user/add-movie" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Movie</Link>
                    </li>
                    <li>
                        <Link to="/user/view-movie" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Genre</Link>
                    </li>
                    <li>
                        <Link to="/user/give-rating" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Give Rating</Link>
                    </li>
                    <li>
                        <Link to="/user/view-all" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View all Movies</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}