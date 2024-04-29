"use client";
import CardJobResume from "@/components/card-job-resume";
import CompanyBadge from "@/components/company-badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const menu_options = [
  { id: "a", label: "Home", link: "#" },
  { id: "b", label: "Cases", link: "#" },
  { id: "c", label: "Contact", link: "#" },
];

export default function New() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="w-full h-full flex flex-col gap-8">
      <div className="flex w-full h-14 bg-background dark:bg-[#121212] z-50 fixed">
        <div className="flex container items-center justify-between">
          <span className="font-black text-lg">Patrick</span>
          <ul className="flex gap-4 items-center">
            {menu_options.map((menu_item) => (
              <li key={menu_item.id}>{menu_item.label}</li>
            ))}
            <Button
              variant="ghost"
              onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            >
              {theme == "dark" ? <MoonIcon size={19} /> : <SunIcon size={19} />}
            </Button>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center container mx-auto h-screen gap-4">
        <span className="text-5xl">Oi.</span>
        <span className="text-5xl">
          Eu sou <strong>Patrick.</strong>
        </span>
        <h1 className="text-2xl w-2/3 ">
          Estou a mais de 5 anos judando empresas a criar produtos digitais
          robustos, modernos e alinhados com o mercado de tecnologia.
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex w-full container mx-auto">
          <span className="text-lg font-semibold">Cases</span>
        </div>
        <ScrollArea className="flex flex-col w-full h-full container mx-auto rounded gap-9 mb-14">
          <div className="flex flex-col gap-14 border rounded p-4">
            <CompanyBadge
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiesQ7thGpxBiFvKl2eG5uitaYmk9oc6Ho8eJkvFqt0A&s"
              name="RD Saúde"
            />
            <div className="gap-12  grid grid-cols-2 max-lg:grid-cols-1">
              <CardJobResume
                imageUrl="/mais_cuidado.png"
                title="Na Rotina"
                description="O programa para acompanhamento de tratamentos de saúde e lembretes de recompra de medicamentos implementado pela CucoHealth e comprado pela RD Saúde"
                tags={[
                  "React Native",
                  "AppCenter",
                  "CI-CD",
                  "GitLab",
                  "GraphQL",
                  "Node JS",
                  "S.O.L.I.D",
                  "iOS",
                  "Android",
                ]}
              />
              <CardJobResume
                imageUrl="/stix.png"
                title="Carteira Stix"
                description="Programa de fidelização do cliente, o intuito do programa é gerar acumulo de pontuação a cada compra em produto nas farmácias DrogaRaia ou Drogasil, podendo usar a carteira stix para trocar por diversos itens em estabelecimentos que aceitam Stix"
                tags={[
                  "React Native",
                  "AppCenter",
                  "CI-CD",
                  "GitLab",
                  "GraphQL",
                  "Node JS",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 border rounded p-4 mt-14">
            <CompanyBadge
              logoUrl="https://media.licdn.com/dms/image/C4D0BAQE78fXojqXnuA/company-logo_200_200/0/1657043774007/gokdigital_logo?e=2147483647&v=beta&t=IwDbP23vcg50hLbEDWD8u3jVa-AkH1PkVBlcRourP2U"
              name="GOK.Digital"
            />
            <div className="gap-12  grid grid-cols-2 max-lg:grid-cols-1">
              <CardJobResume
                imageUrl="/growk.png"
                title="GrowK"
                description="Plataforma de gestão de pessoas, permitindo a gerência de lideres e liderados com funcionalidades de registro de feedbacks e acompanhamento de PDI's."
                tags={["ReactJS"]}
              />
              <CardJobResume
                imageUrl="/ita_frotas.png"
                title="ITA Frotas"
                description="App de aluguel de veículos por assinatura, onde o usuário consegue abrir e acompanhar chamados de corretiva e revisão."
                tags={["React Native", "iOS", "Android", "Firebase Analytics", "Sentry", "Fastify", "NodeJS"]}
              />
              <CardJobResume
                imageUrl="/praks.png"
                title="Praks"
                description="Piloto de uma plataforma de cursos online, com cursos de diversas áreas da tecnologia."
                tags={[
                  "NextJS",
                  "NodeJS",
                  "MongoDB",
                  "Postgres",
                  "Heroku",
                  "Firebase Analytics",
                  "GA4",
                  "Sentry"
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 border rounded p-4 mt-14">
            <CompanyBadge
              logoUrl={
                theme == "dark"
                  ? "https://pbs.twimg.com/profile_images/1204492136189775872/wCKWwi0k_400x400.jpg"
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaXrD216EwMNXB6stto0sRUWQrmLsR9-igR8Z1LNuuQ&s"
              }
              name="Bossa Box"
            />
            <div className="gap-12  grid grid-cols-2 max-lg:grid-cols-1">
              <CardJobResume
                imageUrl="/viagens_promo.png"
                title="Viagens Promo"
                description="Plataforma de oferta de pacote de viagens."
                tags={["ReactJS", "NestJS", "MySQL", "Web", "AWS"]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 border rounded p-4 mt-14">
            <CompanyBadge
              logoUrl="https://cdn.tecconcursos.com.br/figuras/69fa7fdf-9d4d-4518-9a1b-c72ba296ecb0"
              name="DPT-BA - IIPM"
            />
            <div className="gap-12  grid grid-cols-2 max-lg:grid-cols-1">
              <CardJobResume
                imageUrl="/comite.png"
                title="COMITE Web"
                description="Plataforma de oferta de pacote de viagens."
                tags={["ReactJS", "NestJS", "MySQL", "Web", "PM2", "Nginx", "Prisma ORM"]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 border rounded p-4 mt-14">
            <CompanyBadge logoUrl="/uxmob.png" name="UXMOB" />
            <div className="gap-12  grid grid-cols-2 max-lg:grid-cols-1">
              <CardJobResume
                imageUrl="https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/59/8b/49/598b49ae-f073-eb17-8b7b-48b279e2fb7a/296c6c58-2629-4612-878c-eda44b5e3960_AppStore-Screenshot-02-5_U002c5.png/750x750bb.jpeg"
                title="Gurumed"
                description="Plataforma de oferta de pacote de viagens."
                tags={["React Native", "ReactJS", "NodeJS", "Express", "MongoDB", "Styled-Components"]}
              />
              <CardJobResume
                imageUrl="/photoguide.png"
                title="Photoguide"
                description="Plataforma de oferta de pacote de viagens."
                tags={["React Native", "ReactJS", "NodeJS", "Express", "MongoDB", "Styled-Components"]}
              />
            </div>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
