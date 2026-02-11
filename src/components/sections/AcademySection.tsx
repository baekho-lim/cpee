"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbulb, Target, Orbit, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { key: "practice", icon: Lightbulb },
  { key: "answer", icon: Target },
  { key: "orbit", icon: Orbit },
  { key: "together", icon: HandHeart },
] as const;

export function AcademySection() {
  const t = useTranslations("academy");

  return (
    <section id="academy" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <motion.p
          className="mx-auto mb-16 max-w-3xl text-center text-lg text-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("description")}
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2">
          {FEATURES.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-dark">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
