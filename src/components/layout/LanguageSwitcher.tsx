"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "ko" as const, label: "한국어", flag: "🇰🇷" },
  { code: "en" as const, label: "English", flag: "🇺🇸" },
  { code: "vi" as const, label: "Tiếng Việt", flag: "🇻🇳" },
];

interface LanguageSwitcherProps {
  readonly variant?: "desktop" | "mobile";
}

export function LanguageSwitcher({
  variant = "desktop",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLocale = LOCALES.find((l) => l.code === locale);

  function handleLocaleChange(newLocale: "ko" | "en" | "vi") {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  }

  if (variant === "mobile") {
    return (
      <div className="flex gap-3">
        {LOCALES.map((l) => (
          <button
            key={l.code}
            onClick={() => handleLocaleChange(l.code)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors",
              locale === l.code
                ? "bg-primary text-white"
                : "bg-surface text-text-secondary hover:bg-gray-200"
            )}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-primary"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLocale?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-white py-2 shadow-lg border border-gray-100 z-50">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLocaleChange(l.code)}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                locale === l.code
                  ? "bg-primary/5 text-primary font-medium"
                  : "text-text-secondary hover:bg-surface"
              )}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
