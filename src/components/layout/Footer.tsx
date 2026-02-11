import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xl font-bold text-primary">CPEE</span>
          <p className="text-sm text-text-secondary">{t("org_name")}</p>
          <p className="text-xs text-text-tertiary">{t("nonprofit")}</p>
          <div className="mt-4 h-px w-16 bg-gray-200" />
          <p className="text-xs text-text-tertiary">
            {t("copyright", { year: String(year) })}
          </p>
        </div>
      </div>
    </footer>
  );
}
