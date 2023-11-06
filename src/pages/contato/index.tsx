/* eslint-disable @next/next/no-img-element */

import router from "next/router";


export default function Contato() {
  
  return (
      
    <div className="principal flex flex-col justify-between h-[100vh]">

      <div className="bem-vindo mt-16 ms-20 animate-slide-down">
        <h1 className="text-[5rem]">Entre em contato</h1>
      </div>

      <div className="flex justify-around mb-10 endereco">
        <div className='animate-slide-left-to-right'>
          <h2 className='texto-contato'>Endereço:</h2>
          <span className='texto-contato'>Rua Maria Augusta Ferreira - São Roque SP</span>
        </div>
        <div className='animate-slide-up'>
          <h2 className='texto-contato '>E-mail:</h2>
          <span className='texto-contato'>joao_mangini@hotmail.com</span>
        </div>
        <div className='animate-slide-right-to-left'>
          <h2 className='texto-contato'>Telefone:</h2>
          <span className='texto-contato'>(11)95586-5037</span>
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/contato')}
            >Perfil</button>
          </div>
        </div>
        
      </div>

      

    </div>
      
   
  );
}
