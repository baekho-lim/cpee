import { getLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

async function JsonLd() {
  const locale = await getLocale();
  const t = await getTranslations("metadata");
  const faq = await getTranslations("faq");

  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.fullName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/${locale}/opengraph-image`,
    description: t("description"),
    foundingDate: SITE_CONFIG.foundingDate,
    nonprofitStatus: "Nonprofit",
    areaServed: SITE_CONFIG.areaServed,
    knowsLanguage: SITE_CONFIG.languages,
    sameAs: [SOCIAL_LINKS.facebook],
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: faq("academy_name"),
    description: faq("academy_description"),
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    isAccessibleForFree: true,
    inLanguage: SITE_CONFIG.languages,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [0, 1, 2].map((i) => ({
      "@type": "Question",
      name: faq(`items.${i}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq(`items.${i}.answer`),
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_CONFIG.name,
        item: `${SITE_CONFIG.url}/${locale}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AcademySection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
