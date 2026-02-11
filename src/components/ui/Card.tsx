import type { ReactNode } from "react";

interface CardProps {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
