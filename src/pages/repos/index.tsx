import axios from 'axios';
import { GetServerSideProps } from "next";
import router from 'next/router';

interface IProject {
  id: string;
  name: string;
  html_url: string;
}

export default function Page({ projects }: { projects: IProject[] }) {
  console.log("Projetos => ", projects);
  return (
    <div className="flex flex-1 justify-center items-center">
      {!projects ?
        <div>
          <h1>Ah mango jou</h1>
        </div>
        :
        <div>
          <h1>Projetos do GitHub</h1>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  {project.html_url}
                </a>
                
              </li>
              
            ))}
          </ul>
          <div className="text-center sm:text-left mt-4 animate-slide-up">
            <button className="border rounded-lg border-solid border-white p-2 botao" type="button"
            onClick={() => router.push('/principal')}
            >Perfil</button>
          </div>
        </div>
      }
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await axios.get("https://api.github.com/users/Joaozinhoxxx/repos", {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer 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'
    }
  })

  return {
    props: {
      projects: projects.data
    }
  };
};