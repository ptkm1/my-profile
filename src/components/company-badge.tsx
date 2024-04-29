import React from "react";

interface CompanyBadeProps {
  name?: string;
  logoUrl?: string;
}

export default function CompanyBadge({ name, logoUrl }: CompanyBadeProps) {
  return (
    <div className="flex items-center gap-4">
      <img width={30} src={logoUrl} alt="logo-company" className="rounded" />
      <h1>{name}</h1>
    </div>
  );
}
