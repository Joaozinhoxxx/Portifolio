import Image from 'next/image';
import router from 'next/router';

export default function Portfolio() {
  

  return (
    <div className="principal flex flex-col">
      <div className="bem-vindo ms-5 mt-16">
        <h1 className="text-[5rem] portfolio">Meu Portfolio</h1>
      </div>

      

      <div className="flex justify-around mt-20 mb-2 projetos">
        <div className="flex flex-col items-center">
          <Image
            className="imagem"
            src="/imagem/designer.png" // Substitua pelo caminho correto da sua imagem
            alt="Descrição da imagem"
            width={320}
            height={200}
          />

          <div className="flex items-center mb-2">
            <Image
              className="branco mt-2"
              src="/imagem/seta.png" // Substitua pelo caminho correto da sua imagem
              alt="Descrição da imagem"
              width={20}
              height={200}
            />
            <span className="mt-3 text-xl paragrafo">Finans suas contas</span>
          </div>
          <span className="text-center text-base explicacao">
            Projeto realizado para fins de estudos, usei as <br /> tecnologias de
            front-end HTML CSS nesse projeto <br /> resolvi usar o vanilla pois
            estava com dificuldade ainda
          </span>
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/sobre')}
            >Voltar</button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            className="imagem-1"
            src="/imagem/moda.png" // Substitua pelo caminho correto da sua imagem
            alt="Descrição da imagem"
            width={290}
            height={200}
          />
          <div className="flex items-center mb-2">
            <Image
              className="branco mt-2"
              src="/imagem/seta.png" // Substitua pelo caminho correto da sua imagem
              alt="Descrição da imagem"
              width={20}
              height={200}
            />
            <span className="mt-3 text-xl paragrafo">Moda Masculina</span>
          </div>
          <span className="text-center text-base explicacao">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Sed
            vero, explicabo incidunt ea provident consectetur <br /> doloremque
            fuga quibusdam rerum magnam neque
          </span>
          
        </div>

        <div className="flex flex-col items-center">
          <Image
            className="imagem-1"
            src="/imagem/museu.png" // Substitua pelo caminho correto da sua imagem
            alt="Descrição da imagem"
            width={290}
            height={200}
          />
          <div className="flex items-center mb-2">
            <Image
              className="imagem-1"
              src="/imagem/seta.png" // Substitua pelo caminho correto da sua imagem
              alt="Descrição da imagem"
              width={20}
              height={200}
            />
            <span className="mt-3 text-xl paragrafo">Museu Nacional</span>
          </div>
          <span className="text-center text-base explicacao">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Sed
            vero, explicabo incidunt ea provident consectetur <br /> doloremque
            fuga quibusdam rerum magnam neque
          </span>
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/motivacional')}
            >Motivacional</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
