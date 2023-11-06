// pages/github-projects.js
import { App } from "../api/page"; // Importe o componente App do local correto

function GitHubProjectsPage() {
  return (
    <div>
      <h1>Projetos do GitHub</h1>
      <App /> {/* Renderize o componente App aqui para exibir os projetos */}
    </div>
  );
}

export default GitHubProjectsPage;
