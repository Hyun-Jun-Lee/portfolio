import { Navigation } from "./components/Navigation";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { GithubLogo, ArrowUpRight } from "./components/Icons";
import { CopyEmail } from "./components/CopyEmail";

const projects = [
  {
    name: "MMA-Savant",
    period: "2025.09 ~",
    type: "Personal",
    role: "Fullstack",
    description: "MMA 경기 데이터 수집 · 분석 · AI 챗봇 플랫폼",
    highlights: [
      "LangGraph 기반 Supervisor Multi-Agent 아키텍처 설계",
      "  Send() 기반 동적 라우팅 및 에이전트 병렬 실행",
      "  멀티턴 대화 및 히스토리 압축 구현",
      "역할별 AI 에이전트 분리 및 컨텍스트 문서 체계화로 AI-Assisted 개발 프로세스 구축",
      "  코드 컨벤션 및 디자인 시스템 문서화로 AI 코드 생성 정확도 향상",
      "  테스트 코드 · commit · tag · 문서 업데이트 등 전문 에이전트 구성으로 반복 작업 자동화",
      "Prefect 워크플로우 오케스트레이션으로 주간 자동 데이터 수집 파이프라인 구축",
      "Blue/Green 무중단 배포 구성으로 prod 환경 서비스 안정성 확보",
    ],
    website: "https://mma-savant.com/",
    github: "https://github.com/Hyun-Jun-Lee/mma-savant",
    featured: true,
  },
  {
    name: "Signal.AI",
    period: "2025.12 ~ 2026.02",
    type: "Personal",
    role: "Fullstack",
    description: "AI 기반 대화 및 점성술 분석 플랫폼",
    highlights: [
      "이미지 → OCR → 분석 멀티모달 3-Phase AI 파이프라인 및 LLM 비용 최적화",
      "국내/해외 멀티 PG 연동 결제 및 검증 시스템 구현",
      "결제 · 프로모 코드 · 크레딧 통합 Freemium 접근 제어",
    ],
    website: "https://www.teamsignal.online/",
    github: null,
    featured: false,
  },
  {
    name: "AI 응답 블라인드 평가 시스템",
    period: "2025.03 ~ 2025.12",
    type: "Company",
    role: "Fullstack",
    description:
      "AI 응답과 전문가 응답을 블라인드 비교 평가하는 A/B 아레나 시스템",
    highlights: [
      "멀티 LLM 응답 생성 및 블라인드 A/B 평가 시스템 구현",
      "프롬프트 버전별 롤백 기능 및 AI 기반 버전 간 변경사항 비교 분석 요약 제공",
      "DDD 아키텍처 설계로 도메인별 독립 컨텍스트 구성, AI-Assisted 개발 시 컨텍스트 노이즈 제거",
    ],
    website: null,
    github: null,
    featured: false,
  },
  {
    name: "콘텐츠 분류 자동화 파이프라인",
    period: "2024.09 ~ 2025.09",
    type: "Company",
    role: "Backend",
    description:
      "키워드 기반 웹 콘텐츠 자동 수집 · LLM 분류 · 분석 파이프라인 시스템",
    highlights: [
      "지능형 크롤링 및 LLM 기반 자동 태깅 파이프라인 구현",
      "RabbitMQ 기반 멀티 워커 아키텍처 설계로 대용량 처리 구현",
      "그래프 DB 기반 콘텐츠 관계 모델링",
      "BM25 · 의미적 유사도 기반 콘텐츠 그룹핑 구현",
    ],
    website: null,
    github: null,
    featured: false,
  },
  {
    name: "사내 데이터셋 통합 관리 시스템",
    period: "2024.07 ~ 2024.10",
    type: "Company",
    role: "Fullstack",
    description:
      "다양한 포맷의 데이터셋을 저장 및 관리할 수 있는 데이터 관리 시스템",
    highlights: [
      "유연한 데이터 검색 및 검증을 위한 DSL 개발",
      "웹 크롤링 수집 파이프라인과 데이터 버전 관리 및 복원 기능",
      "Clean Architecture 기반 4계층 아키텍처 설계",
    ],
    website: null,
    github: null,
    featured: false,
  },
  {
    name: "BISKIT",
    period: "2023.09 ~ 2024.05",
    type: "Team",
    role: "Backend",
    description: "유학생 소셜링 어플리케이션",
    highlights: [
      "FastAPI 기반의 API 개발 및 DB 모델링, AWS EC2 기반의 Dev-Prod 서버 인프라 구축",
      "캐싱 전략, ORM 쿼리 최적화, Full-Text Search 등을 통해 조회 API 응답 속도 50% 단축",
      "pytest를 활용한 테스트 코드 작성 및 80% 테스트 커버리지 달성",
      "팩토리 패턴 기반 멀티 DB 커넥터 추상화",
    ],
    website: "https://team-biskit.vercel.app/",
    github: "https://github.com/BIS-KIT/BISKIT-Backend",
    featured: false,
  },
  {
    name: "DB 감사 로그 수집 · 분석 솔루션",
    period: "2022.12 ~ 2024.02",
    type: "Company",
    role: "Backend & ETL",
    description: "기업 DB를 모니터링하여 IT 내부 통제 감사를 대응하기 위한 솔루션",
    highlights: [
      "Django Permission 커스터마이징을 통해 담당자별 세분화된 접근 권한 관리 기능 구현",
      "Producer-Consumer 패턴 기반의 DB 로그 ETL 파이프라인 개발",
      "OpenSearch를 활용하여 로그 데이터 검색 및 분석 기능 제공",
      "쿼리 승인 워크플로우 및 고객사별 프로덕트 상태 모니터링 백오피스 구축",
    ],
    website: null,
    github: null,
    featured: false,
  },
];

const experiences = [
  {
    company: "(주)인사이터",
    role: "데이터 엔지니어",
    period: "2024.06 ~ 2025.12",
    description: "시리즈 A 단계 B2B AI 스타트업 (30명)",
    highlights: [
      "국가 R&D 사업 참여 (사업 계획서 작성, 개발, 시연 및 발표)",
      "사내 데이터 통합 관리 시스템 설계 및 구축",
      "AI 연구 인프라 (데이터, 프롬프트, 모델 학습 관리 시스템)",
    ],
  },
  {
    company: "(주)로그스택",
    role: "백엔드 개발자",
    period: "2022.05 ~ 2024.02",
    description: "Seed 단계 B2B 스타트업 (6명)",
    highlights: [
      "Oracle, MSSQL, MySQL 등 다양한 DB 로그 수집 ETL 파이프라인 설계 및 개발",
      "서비스 DB 모델링 및 백엔드 아키텍처, Docker 기반 인프라 구축",
    ],
  },
];

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <AnimateOnScroll>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent uppercase tracking-[0.1em]">
          {number}
        </span>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[-0.04em] leading-none">
          {title}
        </h2>
      </div>
      <div className="border-t-2 border-border-subtle mt-4" />
    </AnimateOnScroll>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ═══ HERO ═══ */}
      <section className="min-h-[100dvh] flex items-center relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full pt-16">
          <div className="flex flex-col items-center text-center">
            <div
              className="reveal-on-load relative z-[51]"
              style={{ animationDelay: "100ms" }}
            >
              <div className="border-2 border-border-subtle overflow-hidden w-[240px] md:w-[320px]">
                <img
                  src="/profile.jpg"
                  alt="이현준"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div
              className="reveal-on-load mt-8"
              style={{ animationDelay: "200ms" }}
            >
              <h1 className="flex flex-col items-center gap-4">
                <span className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[-0.04em] leading-[0.9] text-foreground">
                  이현준
                </span>
                <span className="text-[clamp(1.2rem,3vw,2.2rem)] font-normal uppercase tracking-[-0.03em] leading-[0.95] text-accent">
                  PRODUCT ENGINEER
                </span>
              </h1>
            </div>

            <div
              className="reveal-on-load flex flex-col items-center gap-3 mt-8"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="https://github.com/Hyun-Jun-Lee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted font-mono text-lg tracking-[0.02em] hover:text-foreground transition-colors duration-150"
              >
                <GithubLogo size={16} weight="bold" />
                github.com/Hyun-Jun-Lee
              </a>
              <CopyEmail email="bhk0827@gmail.com" />
              <span className="text-base text-dim">
                새로운 기회나 협업에 열려 있습니다. 편하게 연락주세요.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="introduce" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <SectionHeader number="01" title="INTRODUCE" />

          <AnimateOnScroll delay={100}>
            <div className="max-w-[65ch] mt-10">
              <p className="text-base text-muted leading-relaxed">
                저는 기능을 구현하는 것보다 문제를 해결하는 것에 더 관심이
                있습니다.
                <br />
                여러 아이디어를 직접 서비스로 만들고 운영해온 경험을 통해
                <br />
                개발자란 결국 문제를 발견하고 해결하는 사람이라는 걸 알게
                됐습니다.
                <br />
                그래서 지금도 구현 방법보다 &quot;무엇을 만들어야
                하는가&quot;를 먼저 고민합니다.
                <br />
                앞으로도 좋은 코드보다 좋은 프로덕트를 만드는 엔지니어이고
                싶습니다.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <AnimateOnScroll delay={200}>
              <div className="border border-border-subtle bg-[hsl(var(--background))]/60 p-6 h-full">
                <h3 className="text-base font-black tracking-[-0.02em]">
                  Data to Insight
                </h3>
                <p className="text-base text-muted leading-relaxed mt-4">
                  크롤링 · 파이프라인 · LLM 분석 · 시각화까지
                  <br />
                  데이터의 수집부터 사용자 경험까지 설계
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={260}>
              <div className="border border-border-subtle bg-[hsl(var(--background))]/60 p-6 h-full">
                <h3 className="text-base font-black tracking-[-0.02em]">
                  Product Ownership
                </h3>
                <p className="text-base text-muted leading-relaxed mt-4">
                  아이디어 기획부터 배포 · 운영까지
                  <br />
                  혼자 완성한 프로덕션 서비스 다수 보유
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={320}>
              <div className="border border-border-subtle bg-[hsl(var(--background))]/60 p-6 h-full">
                <h3 className="text-base font-black tracking-[-0.02em]">
                  Startup DNA
                </h3>
                <p className="text-base text-muted leading-relaxed mt-4">
                  5인 ~ 30인 규모 스타트업에서
                  <br />
                  기획 · 개발 · 배포 · 운영까지
                  <br />
                  End-to-End 오너십 경험
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <SectionHeader number="02" title="PROJECTS" />

          <div className="grid grid-cols-1 gap-4 mt-10">
            {projects.map((project, index) => (
              <AnimateOnScroll
                key={project.name}
                delay={index * 60}
              >
                <div className="border-2 border-border-subtle p-6 md:p-8 hover:border-foreground transition-colors duration-150 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black uppercase tracking-[-0.02em]">
                        {project.name}
                      </h3>
                      {(project.website || project.github) && (
                        <div className="flex items-center gap-4 mt-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-mono text-sm text-dim uppercase tracking-[0.05em] hover:text-foreground transition-colors duration-150"
                            >
                              <GithubLogo size={14} weight="bold" />
                              GITHUB
                            </a>
                          )}
                          {project.website && (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-mono text-sm text-dim uppercase tracking-[0.05em] hover:text-foreground transition-colors duration-150"
                            >
                              VISIT
                              <ArrowUpRight size={12} weight="bold" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="font-mono text-sm text-dim shrink-0 uppercase tracking-[0.05em]">
                      {project.period}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="border-t border-border-subtle mt-4 pt-4">
                    <p className="text-base text-muted">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-3 space-y-1.5">
                      {project.highlights.map((highlight, i) => {
                        const isSub = highlight.startsWith("  ");
                        const text = isSub ? highlight.trimStart() : highlight;
                        return (
                          <li
                            key={i}
                            className={`text-base text-muted leading-relaxed${isSub ? " pl-5" : ""}`}
                          >
                            <span className="text-accent mr-2">
                              {isSub ? "–" : "\u203A"}
                            </span>
                            {text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <SectionHeader number="03" title="EXPERIENCE" />

          <div className="mt-10">
            {experiences.map((exp, index) => (
              <AnimateOnScroll key={exp.company} delay={index * 100}>
                <div className="border-t-2 border-border-subtle py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
                  {/* Left: Period */}
                  <div>
                    <span className="font-mono text-sm text-dim uppercase tracking-[0.05em]">
                      {exp.period}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-[-0.02em]">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-sm text-accent uppercase tracking-[0.05em]">
                        {exp.role}
                      </span>
                      <span className="text-dim">&mdash;</span>
                      <span className="text-base text-muted">
                        {exp.description}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-base text-muted leading-relaxed"
                        >
                          <span className="text-accent mr-2">&rsaquo;</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}

          </div>
        </div>
      </section>


    </>
  );
}
