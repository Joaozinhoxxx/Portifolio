/* eslint-disable @next/next/no-img-element */

import router from "next/router";



export default function Motivacional() {
  return (
    <>
        <div className="flex justify-between">
          <div className="text-center sm:text-left mt-4 animate-slide-up ml-5">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/portfolio')}
            >Voltar</button>
          </div>
          <div className="bem-vindo ml-24  flex items-center">
            <span className="text-[3rem] motivacao">&quot;Cada linha de código que você escreve, cada problema que você resolve, é um passo em direção a um futuro brilhante na T.I. Continue avançando.&quot;</span>
            <img className='dev' width={600} src="/imagem/dev.png" alt="" />
          </div>
          <div className="text-center sm:text-left mt-4 animate-slide-up mr-5">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/experiencia')}
            >Experiencia</button>
          </div>
        </div>

      
      
    </>
  );
}
