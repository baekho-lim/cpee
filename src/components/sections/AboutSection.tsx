"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  { key: "trust", icon: Shield },
  { key: "responsibility", icon: Heart },
  { key: "community", icon: Users },
] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          <motion.div className="space-y-6" {...fadeInUp}>
            <blockquote className="border-l-4 border-secondary pl-6 py-2">
              <p className="text-xl font-medium text-primary leading-relaxed whitespace-pre-line italic">
                {t("question")}
              </p>
            </blockquote>

            <p className="text-text-secondary leading-relaxed">
              {t("description_1")}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {t("description_2")}
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary leading-relaxed">
              {t("description_3")}
            </p>

            <div className="mt-8 space-y-4">
              {VALUES.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-start gap-4 rounded-xl bg-surface p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {t(`values.${key}.title`)}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary">
                      {t(`values.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
