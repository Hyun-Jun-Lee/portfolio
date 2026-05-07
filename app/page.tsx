import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { GithubLogo, ArrowUpRight } from "./components/Icons";
import { CopyEmail } from "./components/CopyEmail";

const projects = [
  {
    name: "MMA-Savant",
    period: "2025.09 ~",
    type: "Personal",
    role: "Fullstack",
    description: "MMA 경기 데이터 수집 / 분석 / AI 챗봇 플랫폼",
    highlights: [
      "LangGraph 기반 Supervisor Multi-Agent 아키텍처 설계",
      "역할별 AI 에이전트 분리 및 컨텍스트 문서 체계화로 AI-Assisted 개발 프로세스 구축",
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
      "결제 / 프로모 코드 / 크레딧 통합 Freemium 접근 제어",
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
      "키워드 기반 웹 콘텐츠 자동 수집 / LLM 분류 / 분석 파이프라인 시스템",
    highlights: [
      "지능형 크롤링 및 LLM 기반 자동 태깅 파이프라인 구현",
      "RabbitMQ 기반 멀티 워커 아키텍처 설계로 대용량 처리 구현",
      "그래프 DB 기반 콘텐츠 관계 모델링",
      "BM25 / 의미적 유사도 기반 콘텐츠 그룹핑 구현",
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
    ],
    website: "https://team-biskit.vercel.app/",
    github: "https://github.com/BIS-KIT/BISKIT-Backend",
    featured: false,
  },
  {
    name: "DB 감사 로그 수집 / 분석 솔루션",
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
    role: "Data Engineer",
    period: "2024.06 ~ 2025.12",
    description: "Series A B2B AI Startup (30명)",
    highlights: [
      "국가 R&D 사업 참여 (계획서 작성, 개발, 시연 및 발표)",
      "사내 데이터 통합 관리 시스템 설계 및 구축",
      "AI 연구 인프라 (데이터, 프롬프트, 모델 학습 관리)",
    ],
  },
  {
    company: "(주)로그스택",
    role: "Backend Developer",
    period: "2022.05 ~ 2024.02",
    description: "Seed B2B Startup (6명)",
    highlights: [
      "Oracle, MSSQL, MySQL 등 다양한 DB 로그 수집 ETL 파이프라인 설계 및 개발",
      "서비스 DB 모델링 및 백엔드 아키텍처, Docker 기반 인프라 구축",
    ],
  },
];

const certificates = [
  { year: "2020", name: "정보처리기사" },
  { year: "2019", name: "ADsP (데이터분석준전문가)" },
  { year: "2017", name: "AFPK (재무설계사)" },
];

const skills = [
  {
    label: "Core",
    title: "Backend & AI",
    description:
      "자연어 처리부터 데이터 파이프라인, API 설계까지. LLM을 활용한 프로덕트를 직접 설계하고 운영합니다.",
    tags: ["FastAPI", "Django", "LangChain", "LangGraph", "Python"],
  },
  {
    label: "Data",
    title: "DB & Pipeline",
    description: "워크플로우 오케스트레이션과 데이터 저장소 설계",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Prefect"],
  },
  {
    label: "Strength",
    title: "Product Ownership",
    description: "기획부터 배포, 운영까지 End-to-End 프로덕트 오너십",
    tags: [],
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <AnimateOnScroll>
      <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
    </AnimateOnScroll>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══ HERO — immersive dark, asymmetric ═══ */}
      <section
        className="min-h-[100dvh] flex items-center pt-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(30, 215, 96, 0.06), transparent), #121212",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full py-10 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="reveal-on-load"
              style={{ animationDelay: "100ms" }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-green tracking-[1.4px] uppercase bg-surface px-3.5 py-1.5 rounded-full w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                Backend & AI Engineer
              </div>
            </div>

            <div
              className="reveal-on-load"
              style={{ animationDelay: "220ms" }}
            >
              <h1 className="text-[clamp(40px,7vw,64px)] font-bold leading-[1.1] tracking-[-1px] text-white mb-2">
                이현준
              </h1>
              <p className="text-[clamp(20px,3vw,32px)] font-normal text-silver mb-7">
                Product Engineer
              </p>
            </div>

            <div
              className="reveal-on-load"
              style={{ animationDelay: "340ms" }}
            >
              <p className="text-base text-silver leading-relaxed max-w-[48ch]">
                기능을 구현하는 것보다 문제를 해결하는 것에 관심이 있습니다.
                여러 아이디어를 직접 서비스로 만들고 운영해온 경험을 통해,
                좋은 코드보다 좋은 프로덕트를 만드는 엔지니어를 지향합니다.
              </p>
            </div>

            <div
              className="reveal-on-load flex flex-wrap items-center gap-3 mt-8"
              style={{ animationDelay: "460ms" }}
            >
              <a
                href="https://github.com/Hyun-Jun-Lee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green text-on-green text-sm font-bold leading-none tracking-[1.4px] uppercase px-8 py-3.5 rounded-[500px] hover:scale-[1.04] active:scale-[0.98] transition-transform duration-100"
              >
                <GithubLogo size={16} weight="bold" />
                GitHub
              </a>
              <CopyEmail email="bhk0827@gmail.com" />
            </div>
          </div>

          {/* Right: Circular photo (desktop only) */}
          <div className="hidden md:flex justify-end">
            <div className="relative w-[280px] h-[280px]">
              <div className="absolute -inset-1 border-2 border-green/30 rounded-full" />
              <img
                src="/profile.jpg"
                alt="이현준"
                className="w-full h-full object-cover rounded-full shadow-[0px_8px_24px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="mx-5 md:mx-10">
        <div className="max-w-[1200px] mx-auto bg-surface rounded-lg py-12 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { number: "3+", label: "Years" },
              { number: "7", label: "Projects" },
              { number: "2", label: "Live Services" },
              { number: "E2E", label: "Ownership" },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 60}>
                <div className="text-center">
                  <div className="font-sans text-[clamp(28px,4vw,40px)] font-bold leading-[1.1] text-green">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-silver uppercase tracking-[1.4px] mt-2">
                    {stat.label}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <SectionHeader title="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <AnimateOnScroll key={skill.title} delay={i * 60}>
                <div className="bg-surface rounded-lg p-6 h-full hover:bg-surface-mid transition-colors duration-150">
                  <span className="text-xs font-bold text-green uppercase tracking-[1.4px]">
                    {skill.label}
                  </span>
                  <h3 className="text-lg font-semibold text-white leading-[1.3] mt-3 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-silver leading-normal">
                    {skill.description}
                  </p>
                  {skill.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-surface-mid text-near-white border border-border-gray"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <SectionHeader title="Projects" />

          <div className="flex flex-col gap-2">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.name} delay={index * 60}>
                <div
                  className={`bg-surface rounded-lg p-5 md:p-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-6 hover:bg-surface-mid transition-colors duration-150${
                    project.featured
                      ? " bg-[linear-gradient(135deg,rgba(30,215,96,0.08)_0%,#181818_40%)] border border-green-border-soft"
                      : ""
                  }`}
                >
                  {/* Meta column */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[13px] text-silver">
                      {project.period}
                    </span>
                  </div>

                  {/* Content column */}
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-silver mb-3">
                      {project.description}
                    </p>

                    <ul className="flex flex-col gap-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-near-white leading-normal pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-green before:opacity-50"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {(project.website || project.github) && (
                      <div className="flex gap-3 mt-3">
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-bold text-green hover:opacity-80 transition-opacity duration-150"
                          >
                            Visit
                            <ArrowUpRight size={14} weight="bold" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-bold text-green hover:opacity-80 transition-opacity duration-150"
                          >
                            GitHub
                            <ArrowUpRight size={14} weight="bold" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <SectionHeader title="Experience" />

          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <AnimateOnScroll key={exp.company} delay={index * 60}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-10 py-5 border-b border-border-gray${
                    index === 0 ? " border-t" : ""
                  }`}
                >
                  <div>
                    <span className="font-mono text-[13px] text-silver">
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-bold text-green">
                      {exp.role}
                    </span>
                    <p className="text-xs text-silver mt-1 mb-2.5">
                      {exp.description}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-near-white leading-normal pl-3.5 relative"
                        >
                          <span className="absolute left-0 text-silver">
                            &#8250;
                          </span>
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

      {/* ═══ CERTIFICATES — pill badges ═══ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <SectionHeader title="Certificate" />

          <div className="flex flex-wrap gap-2.5">
            {certificates.map((cert, i) => (
              <AnimateOnScroll key={cert.name} delay={i * 60}>
                <div className="inline-flex items-center gap-2.5 bg-surface rounded-full px-5 py-2.5 hover:bg-surface-mid transition-colors duration-150">
                  <span className="font-mono text-xs font-bold text-green">
                    {cert.year}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {cert.name}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section id="contact" className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <AnimateOnScroll>
            <div className="bg-surface rounded-lg px-8 py-12 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0px_8px_8px_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-bold text-white max-w-[480px]">
                새로운 기회나 협업에 열려 있습니다
              </h2>
              <a
                href="mailto:bhk0827@gmail.com"
                className="inline-flex items-center gap-2 bg-green text-on-green text-sm font-bold leading-none tracking-[1.4px] uppercase px-8 py-3.5 rounded-[500px] hover:scale-[1.04] active:scale-[0.98] transition-transform duration-100 shrink-0"
              >
                Contact
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ FOOTER — stays dark (Spotify never goes light) ═══ */}
      <footer className="border-t border-border-gray py-12">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-xs text-silver">bhk0827@gmail.com</span>
            <div className="flex gap-5">
              <a
                href="https://github.com/Hyun-Jun-Lee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-silver hover:text-white transition-colors duration-150"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
