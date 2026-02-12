"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            {t("badge")}
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t("title")}
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button
            href="#programs"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("programs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("cta_programs")}
          </Button>
          <Button
            href={SOCIAL_LINKS.facebook}
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cta_contact")}
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-white/50" />
      </motion.div>
    </section>
  );
}
