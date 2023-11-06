/* eslint-disable @next/next/no-img-element */
import router from 'next/router';
import 'tailwindcss/tailwind.css';


export default function Criarconta() {
  return (
     <div className="flex justify-center items-center h-screen bg-black">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold text-black"><i className="fa-solid fa-user"></i> Criar conta</h1>
            
            <div className="mt-3">
                <label className="block text-base mb-2 text-black">Username</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black" placeholder="Enter Username..." />
            </div>
            <div className="mt-3">
                <label className="block text-base mb-2 text-black">E-mail</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black" placeholder="Enter Username..." />
            </div>
            <div className="mt-3">
                <label  className="block text-base mb-2 text-black">Password</label>
                <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 text-black" placeholder="Enter Password..." />
            </div>
            
            <div className="mt-5 flex justify-around">
                <button onClick={() => router.push('/login')} type="submit" className="border-2 border-slate-900 bg-slate-600 text-white py-1 w-32 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="zfa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Voltar</button>
                <button onClick={() => router.push('/principal')} type="submit" className="border-2 border-slate-900 bg-slate-600 text-white py-1 w-40 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="zfa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Criar Conta</button>
            </div>
        </div>
    </div>
    
      
   
  );
}
