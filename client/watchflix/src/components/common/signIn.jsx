import axios from 'axios'
import Header from './header'
import SignUp from './signUp'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function setCookie(name,value,days) {
  const expire = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name} = ${value}; expires = ${expire};path=/`;
}   


export default function SignIn({child}) {

const [mail,setMail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("")     
const [message,setMessage] = useState(null)
const navigate = useNavigate()





const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(mail,password)
    try{
        const response = await axios.post(
            `http://localhost:8060/api/${role}/login`,{email:mail,pass:password,role:role}
        )
        console.log("response",response)
        //alert("Login Successful..!!!")
        setMessage(response.data.message)
        console.log(response.data.token)
        setCookie("token",response.data.token,1);
        alert("login successfull..!!")
        navigate(`/${role}/dashboard`)
    }catch(error){
        console.log("catch",error.message)
        setMessage(error.message)
    }
}
    return (
    <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-opacity-70" >

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-8 py-5 shadow-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="pb-3 text-center text-2xl font-bold tracking-tight text-white">
                Sign in to your account
            </h2>
            </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email address
                    </label>
                    <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder="Enter your email"
                        className="block w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                    Password
                    </label>
                    <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="block w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-white">
                    Role
                    </label>
                    <div className="mt-1">
                    <input
                        id="role"
                        name="role"
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Enter your role"
                        className="block w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full rounded-md bg-red-700 px-3 py-2 text-white text-sm font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                    Sign in
                    </button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                Not a member?{' '}
                <Link to="/signup">
                    <span className="font-semibold text-white hover:text-red-300">
                Register
                </span>
                
                </Link>
            </p>
            </div>
            </div>
        </div>

    </>
    );
}
