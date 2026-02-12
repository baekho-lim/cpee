"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />

          <div className="mt-12">
            <Button
              href={SOCIAL_LINKS.facebook}
              variant="primary"
              className="text-lg px-10 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-3 h-5 w-5" />
              {t("email_label")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
