"use client";

import { useTranslations } from "next-intl";
import { Mail, Facebook, Heart, Globe } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const NAV_ITEMS = ["about", "programs", "academy", "impact", "contact"] as const;

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const year = new Date().getFullYear();

  function handleNavClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Column 1: Identity */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">{SITE_CONFIG.name}</p>
            <p className="mt-2 text-sm text-white/70">{t("org_name")}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {t("tagline")}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium text-white/80">
                {t("nonprofit")}
              </span>
            </div>
            <p className="mt-2 text-xs text-white/50">
              {t("established", { year: SITE_CONFIG.foundingDate })}
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {t("nav_title")}
            </p>
            <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 md:flex-col md:justify-start md:gap-x-0 md:gap-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {navT(item)}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {t("contact_title")}
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 md:justify-start">
              <Globe className="h-4 w-4 text-white/50" />
              <span className="text-xs text-white/50">{t("area_served")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/40 md:flex-row">
          <p>{t("copyright", { year: String(year) })}</p>
          <p>{t("area_served")}</p>
        </div>
      </div>
    </footer>
  );
}
