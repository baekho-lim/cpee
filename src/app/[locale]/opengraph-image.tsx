import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CPEE - Center for Practical Entrepreneurship Education";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1E3A5F 0%, #152D4A 50%, #1E3A5F 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 32px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.1)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Center for Practical Entrepreneurship Education
          </div>

          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-2px",
            }}
          >
            CPEE
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            {t("description")}
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                background: "#2A9D8F",
              }}
            />
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                background: "#E9C46A",
              }}
            />
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                background: "#2A9D8F",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
