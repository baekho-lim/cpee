"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { STATS, STAT_KEYS, type StatKey } from "@/lib/constants";

function StatCounter({
  value,
  suffix,
  label,
}: {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-secondary md:text-5xl">
        {count}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-text-secondary md:text-base">{label}</p>
    </div>
  );
}

export function ImpactSection() {
  const t = useTranslations("impact");

  return (
    <section id="impact" className="bg-primary py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
        </div>

        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STAT_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 md:p-8"
            >
              <StatCounter
                value={STATS[key].value}
                suffix={STATS[key].suffix ?? t(`stats.${key}.suffix`)}
                label={t(`stats.${key}.label`)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
