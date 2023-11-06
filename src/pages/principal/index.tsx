/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import './../../pages';

export default function Principal() {
  const router = useRouter()
  return (
    <div className="principal grid grid-cols-1 sm:grid-cols-2 items-center h-[35rem] ml-14 mr-14 bg-black">
      <div className="bem-vindo text-center sm:text-left mb-8 sm:mb-0 animate-slide-down">
        <span className="text-8xl sm:text-lg md:text-8xl leading-tight bem-vindo">
          Seja bem vindo <br /> ao meu perfil <br /> profissional <br /> online!
        </span>
      </div>

      <div className="grid">
        <img className="object-cover imagem-principal animate-slide-right-to-left" width={500} src="/imagem/foto.png" alt="imagem principal"/>
        <a href="" className="flex items-center mt-4 sm:mt-0 animate-slide-up ">
          <img className="branco ml-2 sm:ml-4" src="/imagem/seta.png" alt="" />
          <span className="ml-2 sm:ml-4 auto">align-self-sm-auto</span>
        </a>
      </div> 

      <div className="text-center sm:text-left mt-4 animate-slide-up">
        <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
        onClick={() => router.push('/repos')}
        >Projetos Github</button>
      </div>
      <div className="text-center sm:text-left mt-4 animate-slide-up">
        <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
        onClick={() => router.push('/sobre')}
        >Front-end/Designer Gráfico</button>
      </div>
      
    </div>
  );
}
