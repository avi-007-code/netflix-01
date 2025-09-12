import Header from './components/common/header'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import AdminDash from './components/adminUi/adminDash'
import SignIn from './components/common/signIn'
import UserDash from './components/userUi/userDash'
import SignUp from './components/common/signUp'
import MainContent from './components/common/mainContent'
import AddGenre from './components/adminUi/addGenre'
import AddMovie from './components/adminUi/addMovie'
import MovieDelete from './components/adminUi/deleteMovie'


export default function App(){

    return(
            <div  className='min-h-screen'
                style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg')" }}
            >
                <BrowserRouter>
                <Header />
                <nav className='flex min-h-full flex-row justify-center p-3 bg-black text-white gap-10'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>  
                  <Link to="/signup">Register</Link>  
                </nav> 
                {/* <Header />   */}
                <Routes>
                  <Route path='/' element={<MainContent />} />
                  <Route path='/about' element={<h1>About Page</h1>}/>
                  <Route path='/contact' element={<h1>Contact Page</h1>}/>
                  <Route path='/signin' element={<SignIn/>}/>
                  <Route path='/signup' element={<SignUp/>}/>
                  <Route path='/user/dashboard' element={<UserDash/>}/>
                  <Route path='/admin/dashboard' element={<AdminDash/>}/>
                  <Route path='/admin/add-genre' element={<AddGenre/>}/>
                  <Route path='/admin/add-movie' element={<AddMovie/>}/>
                  <Route path='/admin/delete-movie' element={<MovieDelete/>}/>
                  {/* <Route path='/admin/delete-genre' element={<GenreDelete/>}/> */}

                </Routes>
              </BrowserRouter>
            </div>
    )


}


