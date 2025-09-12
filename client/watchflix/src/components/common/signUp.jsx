import axios from 'axios'
import Header from './header'
import { useState,useEffect  } from 'react'


export default function SignUp() {
const [name,setName] = useState("")
const [mail,setMail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("")
const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(mail,password)
    try{
        const respons = await axios.post(
            `http://localhost:8060/api/${role}/register`,{name:name,email:mail,pass:password,role:role}
        )
        console.log("response",respons)
        alert("Registered Successfully..!!!")
    }catch(error){
        console.log("catch",error.message)
    }
}
    return (
    <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-transparent bg-opacity-70">
           

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-8 py-10 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mb-5 text-center text-2xl font-bold tracking-tight text-white">
                        Register
                        </h2>
                    </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                    Name
                    </label>
                    <div className="mt-1">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        className="block w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    </div>
                </div>
     
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
                    Register
                    </button>
                </div>
                </form>

            </div>
            </div>
        </div>
        
    </>
    );

}
