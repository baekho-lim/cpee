"use client";

import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS = ["about", "programs", "academy", "impact", "contact"] as const;

interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");

  if (!isOpen) return null;

  function handleNavClick(id: string) {
    onClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <span className="text-xl font-bold text-primary">CPEE</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="w-full rounded-xl px-4 py-3 text-left text-lg font-medium text-text-primary transition-colors hover:bg-surface hover:text-primary"
                >
                  {t(item)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-100 px-6 py-6">
          <p className="mb-3 text-sm text-text-secondary">Language</p>
          <LanguageSwitcher variant="mobile" />
        </div>
      </div>
    </div>
  );
}
