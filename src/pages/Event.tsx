import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Siderbar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  // criar uma tela onde o usuário não clicou em nenhum link/aula
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Siderbar />
      </main>
    </div>
  );
}
