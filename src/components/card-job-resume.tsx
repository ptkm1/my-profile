import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { useTheme } from "next-themes";

interface CardJobResumeProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  link?: Url;
  ratio?: any;
  tags?: string[];
}

export default function CardJobResume({
  imageUrl,
  title,
  description,
  link,
  ratio,
  tags,
}: CardJobResumeProps) {

  const { theme, setTheme } = useTheme();

  return (
    <Link href={link ?? "#"} className="flex gap-4 w-full h-full p-4 rounded max-sm:flex-col hover:bg-accent">
      <div className="border rounded-md overflow-hidden w-96 h-[400px] bg-[#203038] max-sm:w-full">
        <img src={imageUrl} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col w-full justify-between gap-14">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold font-sans">{title}</span>
          <p className="w-full text-sm text-left">{description}</p>
        </div>
        <div className="flex w-full gap-2 flex-wrap">
          {tags && tags.map((tag) => <Badge key={tag} variant={theme == "dark" ? "default" : "outline"}>{tag}</Badge>)}
        </div>
      </div>
    </Link>
  );
}
