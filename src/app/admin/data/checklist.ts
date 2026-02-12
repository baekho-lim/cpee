export type CheckStatus = "pass" | "fail";
export type Category = "seo" | "aeo" | "geo";

export interface ChecklistItem {
  readonly id: string;
  readonly category: Category;
  readonly label: string;
  readonly description: string;
  readonly status: CheckStatus;
  readonly guide?: string;
}

export const CATEGORY_WEIGHTS: Readonly<Record<Category, number>> = {
  seo: 0.4,
  aeo: 0.3,
  geo: 0.3,
};

export const CATEGORY_LABELS: Readonly<Record<Category, string>> = {
  seo: "SEO",
  aeo: "AEO",
  geo: "GEO",
};

export const checklist: readonly ChecklistItem[] = [
  // === SEO (15 items) ===
  {
    id: "seo-01",
    category: "seo",
    label: "Meta Title",
    description: "페이지별 고유한 meta title 존재",
    status: "pass",
  },
  {
    id: "seo-02",
    category: "seo",
    label: "Meta Description",
    description: "120-160자 meta description 존재",
    status: "pass",
  },
  {
    id: "seo-03",
    category: "seo",
    label: "OG 메타태그",
    description: "Open Graph title, description, image 설정",
    status: "pass",
  },
  {
    id: "seo-04",
    category: "seo",
    label: "Twitter Card",
    description: "Twitter Card 메타태그 설정 (summary_large_image)",
    status: "pass",
  },
  {
    id: "seo-05",
    category: "seo",
    label: "Canonical URL",
    description: "canonical URL 설정으로 중복 콘텐츠 방지",
    status: "pass",
  },
  {
    id: "seo-06",
    category: "seo",
    label: "robots.txt",
    description: "robots.txt 파일 존재 및 올바른 설정",
    status: "pass",
  },
  {
    id: "seo-07",
    category: "seo",
    label: "Sitemap",
    description: "sitemap.xml 생성 및 robots.txt에 연결",
    status: "pass",
  },
  {
    id: "seo-08",
    category: "seo",
    label: "hreflang 태그",
    description: "다국어 페이지 간 hreflang 태그 설정",
    status: "pass",
  },
  {
    id: "seo-09",
    category: "seo",
    label: "x-default hreflang",
    description: "기본 언어 x-default hreflang 설정",
    status: "pass",
  },
  {
    id: "seo-10",
    category: "seo",
    label: "H1 태그",
    description: "페이지당 1개의 H1 태그 존재",
    status: "pass",
  },
  {
    id: "seo-11",
    category: "seo",
    label: "Heading 계층구조",
    description: "H1 → H2 → H3 올바른 계층 구조",
    status: "pass",
  },
  {
    id: "seo-12",
    category: "seo",
    label: "이미지 Alt 텍스트",
    description: "모든 이미지에 설명적인 alt 텍스트 추가",
    status: "fail",
    guide: "로고 SVG 및 아이콘에 alt 속성 추가 필요",
  },
  {
    id: "seo-13",
    category: "seo",
    label: "내부 링크 전략",
    description: "섹션 간 내부 링크 구축",
    status: "fail",
    guide: "Phase 2에서 서브페이지 추가 시 해결 예정",
  },
  {
    id: "seo-14",
    category: "seo",
    label: "모바일 반응형",
    description: "모든 뷰포트에서 반응형 디자인",
    status: "pass",
  },
  {
    id: "seo-15",
    category: "seo",
    label: "Core Web Vitals",
    description: "LCP, FID, CLS 최적화",
    status: "pass",
  },

  // === AEO (10 items) ===
  {
    id: "aeo-01",
    category: "aeo",
    label: "Organization JSON-LD",
    description: "Organization 구조화 데이터 마크업",
    status: "pass",
  },
  {
    id: "aeo-02",
    category: "aeo",
    label: "EducationalOrganization",
    description: "EducationalOrganization 스키마 타입 사용",
    status: "pass",
  },
  {
    id: "aeo-03",
    category: "aeo",
    label: "Course 스키마",
    description: "교육 과정 Course 스키마 마크업",
    status: "pass",
  },
  {
    id: "aeo-04",
    category: "aeo",
    label: "FAQPage 스키마",
    description: "FAQ 구조화 데이터로 AI 답변 노출",
    status: "pass",
  },
  {
    id: "aeo-05",
    category: "aeo",
    label: "BreadcrumbList",
    description: "탐색 경로 BreadcrumbList 스키마",
    status: "pass",
  },
  {
    id: "aeo-06",
    category: "aeo",
    label: "구조화된 콘텐츠",
    description: "명확한 섹션 구분으로 AI 파싱 용이",
    status: "pass",
  },
  {
    id: "aeo-07",
    category: "aeo",
    label: "Q&A 콘텐츠",
    description: "질문-답변 형태의 콘텐츠 포함",
    status: "pass",
  },
  {
    id: "aeo-08",
    category: "aeo",
    label: "E-E-A-T 신호",
    description: "전문성, 경험, 권위성, 신뢰성 신호",
    status: "fail",
    guide: "팀 소개, 자격증, 활동 이력 추가 필요",
  },
  {
    id: "aeo-09",
    category: "aeo",
    label: "인용 가능한 문장",
    description: "고유하고 인용하기 좋은 명확한 문장",
    status: "pass",
  },
  {
    id: "aeo-10",
    category: "aeo",
    label: "다국어 구조화 데이터",
    description: "각 언어별 구조화 데이터 제공",
    status: "pass",
  },

  // === GEO (10 items) ===
  {
    id: "geo-01",
    category: "geo",
    label: "다국어 지원",
    description: "3개 이상 언어 지원 (ko, en, vi)",
    status: "pass",
  },
  {
    id: "geo-02",
    category: "geo",
    label: "지역별 콘텐츠",
    description: "대상 지역에 맞는 콘텐츠 최적화",
    status: "pass",
  },
  {
    id: "geo-03",
    category: "geo",
    label: "Sitemap Alternates",
    description: "sitemap에 다국어 alternate URL 포함",
    status: "pass",
  },
  {
    id: "geo-04",
    category: "geo",
    label: "인용 가능한 통계",
    description: "구체적인 수치와 통계 데이터 제공",
    status: "pass",
  },
  {
    id: "geo-05",
    category: "geo",
    label: "엔티티 정의",
    description: "조직명, 프로그램명 등 명확한 엔티티",
    status: "pass",
  },
  {
    id: "geo-06",
    category: "geo",
    label: "소셜 프로필 (sameAs)",
    description: "소셜 미디어 프로필 JSON-LD 연결",
    status: "pass",
  },
  {
    id: "geo-07",
    category: "geo",
    label: "비영리 상태 명시",
    description: "nonprofitStatus 스키마 속성 설정",
    status: "pass",
  },
  {
    id: "geo-08",
    category: "geo",
    label: "서비스 지역 (areaServed)",
    description: "활동 지역 areaServed 속성 설정",
    status: "pass",
  },
  {
    id: "geo-09",
    category: "geo",
    label: "연락처 구조화",
    description: "ContactPoint 스키마로 연락처 구조화",
    status: "fail",
    guide: "ContactPoint JSON-LD 추가 필요",
  },
  {
    id: "geo-10",
    category: "geo",
    label: "외부 인용/백링크",
    description: "외부 사이트에서의 인용 및 백링크",
    status: "fail",
    guide: "외부 매체 기고, 파트너 사이트 링크 확보 필요",
  },
];

export function getItemsByCategory(category: Category): readonly ChecklistItem[] {
  return checklist.filter((item) => item.category === category);
}

export function getCategoryScore(category: Category): number {
  const items = getItemsByCategory(category);
  const passCount = items.filter((item) => item.status === "pass").length;
  return Math.round((passCount / items.length) * 100);
}

export function getOverallScore(): number {
  const scores = (Object.keys(CATEGORY_WEIGHTS) as Category[]).map(
    (cat) => getCategoryScore(cat) * CATEGORY_WEIGHTS[cat]
  );
  return Math.round(scores.reduce((sum, s) => sum + s, 0));
}
