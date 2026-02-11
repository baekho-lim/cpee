"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = ["about", "programs", "academy", "impact", "contact"] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScrollSpy([...NAV_ITEMS], 80);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-primary"
          >
            CPEE
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  activeId === item
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:text-primary hover:bg-surface"
                )}
              >
                {t(item)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileOpen(true)}
              className="rounded-lg p-2 text-text-secondary hover:bg-surface md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
