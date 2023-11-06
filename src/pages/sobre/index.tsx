/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

export default function Sobre() {
  const router = useRouter()
  return (
    
    <div className="principal flex ms-5">
      <div className="bem-vindo mt-16 texto">
        <h1 className="text-[5rem] leading-none nome">Quem é João <br/> Mangini?</h1>
        
        <div className="mt-11">
          <h4 className='sobre'>Eu sou João Mangini, um estudante de 28 anos de Análise e Desenvolvimento de Sistemas na Anhanguera. </h4>
          <h4 className='sobre'> Minha transição da mecânica de aviões para a TI foi motivada por questões de saúde devido à minha deficiência, acondroplasia. A paixão por tecnologia e computadores sempre me impulsionou.</h4>
          <h4 className='sobre'>Além dos estudos, estou envolvido em um projeto para capacitar pessoas com deficiência no campo de TI, promovendo inclusão e diversidade na indústria.</h4>
         
        </div>

        <div className="flex justify-between">
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/principal')}
            >Voltar</button>
          </div>
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/portfolio')}
            >Portfolio</button>
          </div>
        </div>
      </div>
      
      <img className="flex-grow max-h-[40.2rem] fundo background-element" src="/imagem/Design.png" alt="imagem principal" />
      <div className='background-element'></div>
    </div>
  );
}

