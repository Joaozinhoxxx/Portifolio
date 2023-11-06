/* eslint-disable @next/next/no-img-element */


import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  return (
     <div className="flex justify-center items-center h-screen bg-black">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold text-black"><i className="fa-solid fa-user"></i> Login</h1>
            
            <div className="mt-3">
                <label className="block text-base mb-2 text-black">Username</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
            </div>
            <div className="mt-3">
                <label  className="block text-base mb-2 text-black">Password</label>
                <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                <button className="text-indigo-800 font-semibold" onClick={() => router.push('/criarconta')}>Não possui conta?</button>
                </div>
                <div>
                    <a href="#" className="text-indigo-800 font-semibold  ">Esqueceu a senha?</a>
                </div>
            </div>
            <div className="mt-5">
                <button onClick={() => router.push('/principal')} type="submit" className="border-2 border-slate-900 bg-slate-600 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
            </div>
        </div>
    </div>
    
      
   
  );
}
