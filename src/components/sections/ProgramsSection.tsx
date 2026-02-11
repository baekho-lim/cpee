"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { BookOpen, Compass, ArrowLeftRight, Network } from "lucide-react";
import { motion } from "framer-motion";

const PROGRAMS = [
  { key: "content", icon: BookOpen },
  { key: "mentoring", icon: Compass },
  { key: "bridge", icon: ArrowLeftRight },
  { key: "alliance", icon: Network },
] as const;

export function ProgramsSection() {
  const t = useTranslations("programs");

  return (
    <section id="programs" className="bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {PROGRAMS.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                icon={<Icon className="h-6 w-6" />}
                title={t(`items.${key}.title`)}
                description={t(`items.${key}.description`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
