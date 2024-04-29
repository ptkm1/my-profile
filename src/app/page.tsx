import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full pt-11">
      <div className="flex flex-col w-full container border rounded gap-9 p-4 pt-9">
        <div className="flex flex-col items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>Patrick Rocha Moreira</h1>
        </div>
        <p>
          Sou um desenvolvedor fullstack com cinco anos de experiência no
          mercado, apaixonado por criar soluções inovadoras e eficientes. Minha
          jornada profissional me permitiu dominar diversas tecnologias e
          frameworks, tanto no front-end quanto no back-end. Tenho um histórico
          comprovado de entrega de projetos de alta qualidade, desde aplicações
          web responsivas até sistemas robustos de gerenciamento de dados. Minha
          abordagem de trabalho é centrada na resolução de problemas e na
          colaboração eficaz com equipes multidisciplinares. Sou motivado pelo
          desafio de transformar conceitos em realidade funcional, sempre
          buscando a excelência técnica e a satisfação do cliente.
        </p>
      </div>
    </main>
  );
}
