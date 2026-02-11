import { getLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ContactSection } from "@/components/sections/ContactSection";

const BASE_URL = "https://cpee.vercel.app";

async function JsonLd() {
  const locale = await getLocale();
  const t = await getTranslations("metadata");
  const faq = await getTranslations("faq");

  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CPEE",
    alternateName: "Center for Practical Entrepreneurship Education",
    url: BASE_URL,
    logo: `${BASE_URL}/${locale}/opengraph-image`,
    description: t("description"),
    foundingDate: "2025",
    nonprofitStatus: "Nonprofit",
    areaServed: ["KR", "VN"],
    knowsLanguage: ["ko", "en", "vi"],
    sameAs: ["https://www.facebook.com/groups/252991477087456"],
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: faq("academy_name"),
    description: faq("academy_description"),
    provider: {
      "@type": "Organization",
      name: "CPEE",
      url: BASE_URL,
    },
    isAccessibleForFree: true,
    inLanguage: ["ko", "en", "vi"],
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
        name: "CPEE",
        item: `${BASE_URL}/${locale}`,
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
