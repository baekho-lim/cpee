# CPEE

> Center for Practical Entrepreneurship Education - 비영리 교육 공동체 홈페이지

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **목적** | CPEE 소개 원페이지 홈페이지 (다국어 지원) |
| **티어** | Standard |

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 스타일링 | Tailwind CSS v4 |
| i18n | next-intl (ko/en/vi) |
| 애니메이션 | Framer Motion |
| 아이콘 | Lucide React |
| 배포 | Vercel (Hobby) |

---

## 폴더 구조

```
cpee/
├── messages/           # 번역 파일 (ko.json, en.json, vi.json)
├── public/images/      # 정적 자산
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind v4 테마
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   └── [locale]/
│   │       ├── layout.tsx        # locale별 레이아웃
│   │       └── page.tsx          # 원페이지 메인
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, MobileMenu, LanguageSwitcher
│   │   ├── sections/             # Hero, About, Programs, Academy, Impact, Contact
│   │   └── ui/                   # Button, Card, SectionHeading
│   ├── hooks/                    # useScrollSpy, useCountUp
│   ├── i18n/                     # routing, request, navigation
│   ├── lib/utils.ts
│   └── middleware.ts
```

---

## 개발 명령어

```bash
npm run dev        # 개발 서버
npm run build      # 빌드
npm run lint       # 린트
```

---

## 디자인 시스템

| 용도 | 컬러 |
|------|------|
| Primary | #1E3A5F (Deep Blue) |
| Secondary | #2A9D8F (Warm Teal) |
| Accent | #E9C46A (Soft Gold) |
| Background | #FAFBFC |
| Surface | #F0F4F8 |

---

## 다국어 라우팅

| URL | 언어 |
|-----|------|
| /ko | 한국어 (기본) |
| /en | 영어 |
| /vi | 베트남어 |

---

## 품질 체크

커밋 전:
- [ ] `npm run build` 성공
- [ ] 3개 언어 라우팅 확인
- [ ] 반응형 확인 (Desktop/Mobile)

---

## Phase 2 확장 계획

커뮤니티 플랫폼 전환:
- Supabase 연동 (Auth + DB)
- 회원 가입/로그인
- 커뮤니티 게시판
- 프로그램 등록

---

## 현재 상태 스냅샷

- **생성일**: 2026-02-12
- **마지막 작업**: 홈페이지 Phase 1 완성

---

*마지막 업데이트: 2026-02-12*
