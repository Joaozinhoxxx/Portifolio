/* eslint-disable @next/next/no-img-element */
// import './page.css';

import router from "next/router";

export default function Experiencia() {

  return (
    <div className="principal flex flex-col ">
      <div className="bem-vindo ml-24 mt-16">
       <p className="text-[5rem] minha-exp">Minha experiência</p>
      </div>
      <div className="flex mt-20 flex-col items-end me-80 text-center experiencia">
        <div className="conteudo mb-10 ms-[65%]">
          <div className="flex">
            <img className="branco h-10" src="/imagem/seta.png" alt="seta" />
            <span className='texto ed'>Educação</span>
          </div>
          <ul className='educacao'>
            <li className='texto'>
              <span className="text-2xl">
                Cursando Análise e Desenvolvimento de Sistemas
                <span className="text-2xl">(2º Semestre Faculdade Anhanguera)</span>
              </span>
            </li>
            
          </ul>
       
        </div>
        <div className="conteudo mr-16 mb-10 ms-[65%]">
          <div className="flex">
            <img className="branco h-10" src="/imagem/seta.png" alt="seta" />
            <span className='ed1'><span>Experiência no trabalho</span></span>
          </div>
          <ul className='educacao'>
            <li className='texto'><span className="text-2xl">Atualmente trabalho na G&P PROJETOS E SISTEMAS</span></li>
            <div className="flex justify-between">
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/motivacional')}
            >Voltar</button>
          </div>
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/contato')}
            >Contato</button>
          </div>
        </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
   
