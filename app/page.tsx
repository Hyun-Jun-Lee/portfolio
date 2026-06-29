import Image from "next/image";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { StaggerReveal } from "./components/StaggerReveal";
import { SectionFade } from "./components/SectionFade";
import { GithubLogo, ArrowUpRight } from "./components/Icons";
import { CopyEmail } from "./components/CopyEmail";

const projects = [
  {
    name: "Oracle DB 운영 분석 AI Agent",
    period: "2026.04 ~",
    type: "Consulting",
    role: "AI Engineering Consultant",
    description:
      "Oracle DB 운영 환경의 성능 저하와 이상 징후를 분석하는 Agentic AI 기반 SRE 지원 시스템",
    highlights: [
      "Classifier 기반 라우팅과 Global Health Agent 중심의 Plan-and-Execute Workflow 설계",
      "전문 개발자가 없는 조직에서 LLM 기반 운영 분석 서비스의 문제 정의, 기능 기획, 시스템 구조 설계를 주도",
      "고정 테스트셋, 기대 답변, LLM-as-a-judge를 기반으로 에이전트 응답 품질을 회귀 테스트하고 개선하는 평가 체계 설계",
      "Celery / RabbitMQ 기반 메시지큐 시스템을 도입해 기존 에이전트 실행과 운영 알람 분석을 비동기 처리 구조로 확장",
      "DBA / SRE의 반복적인 장애 초기 점검 절차를 AI 기반 분석 워크플로우로 전환하도록 설계",
    ],
    website: null,
    github: null,
    featured: true,
  },
  {
    name: "MMA-Savant",
    period: "2025.09 ~",
    type: "Personal",
    role: "Fullstack",
    description: "MMA 경기 데이터 수집 / 분석 / AI 챗봇 플랫폼",
    highlights: [
      "자연어 질문을 SQL 조회, 결과 해석, 시각화 응답으로 연결하는 LLM 기반 데이터 분석 에이전트 설계",
      "LangGraph 기반 Supervisor 패턴으로 질의 분류, 도구 호출, 응답 생성 흐름을 오케스트레이션",
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
      "이미지 입력부터 OCR, LLM 분석, 결과 생성까지 이어지는 멀티모달 분석 파이프라인 설계",
      "국내 / 해외 PG 결제 검증, 프로모 코드, 크레딧 차감을 통합한 Freemium 과금 구조 구현",
      "LLM 호출 단계와 분석 흐름을 분리해 비용 효율성과 사용자 경험을 함께 최적화",
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
      "AI 응답과 전문가 응답을 블라인드 비교하는 A/B 평가 아레나 시스템 구현",
      "프롬프트 버전 관리, 롤백, 버전 간 변경사항 요약을 통해 LLM 실험 운영 흐름 구축",
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
      "키워드 기반 수집, LLM 분류, 자동 태깅으로 이어지는 콘텐츠 분석 파이프라인 구축",
      "RabbitMQ 기반 멀티 워커 구조로 크롤링 / 분류 작업을 비동기 처리하도록 설계",
      "사이트 간 연결 관계를 추적 / 분석하기 위한 그래프 DB 기반 콘텐츠 관계 모델링",
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
      "다양한 포맷의 데이터셋을 검색 / 검증 / 관리하기 위한 사내 데이터 관리 시스템 구축",
      "데이터 검색과 검증 조건을 유연하게 정의할 수 있는 DSL 설계",
      "데이터 버전 관리, 복원, RBAC, 요청 / 승인 워크플로우를 통해 연구 데이터 운영 체계화",
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
      "FastAPI 기반 API와 DB 모델을 설계하고, AWS EC2 기반 Dev / Prod 서버 인프라 구축",
      "캐싱, ORM 쿼리 최적화, Full-Text Search로 주요 조회 API 응답 속도 50% 단축",
      "pytest 기반 테스트 체계를 도입해 80% 테스트 커버리지 달성",
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
      "기업 DB 감사 대응을 위한 로그 수집, 검색, 분석 백오피스 기능 개발",
      "Producer-Consumer 패턴 기반 ETL 파이프라인으로 Oracle / MSSQL / MySQL 로그 수집 구조 구축",
      "세분화된 접근 권한, 쿼리 승인 워크플로우, 고객사별 상태 모니터링 기능 구현",
    ],
    website: null,
    github: null,
    featured: false,
  },
];

const experiences = [
  {
    company: "삼성전자 DS",
    role: "AI Engineering Consultant",
    period: "2026.03 ~",
    description: "Manufacturing Execution System Team",
    highlights: [
      "삼성전자 DS MES 팀 멀티 에이전트 프로젝트 참여",
      "비즈니스 요구사항을 제품 구조, 데이터 흐름, AI 활용 전략으로 구체화",
      "아이디어 검증부터 시스템 설계, 프로토타입 구현, 운영 단계 까지 End-to-End 지원",
    ],
  },
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
    title: "Product Engineering",
    description:
      "아이디어를 사용 가능한 서비스로 만들고, 요구사항 / 데이터 / 운영 제약을 함께 고려해 제품 단위로 완성합니다.",
  },
  {
    label: "AI",
    title: "AI System Design",
    description:
      "LLM을 단순 호출이 아니라 의도 분석, 도구 사용, 검증, 후처리 흐름으로 설계해 제품 기능으로 통합합니다.",
  },
  {
    label: "Operation",
    title: "Data & Operations",
    description:
      "수집, 저장, 검색, 배포, 모니터링까지 제품이 지속적으로 동작하기 위한 데이터 / 운영 구조를 설계합니다.",
  },
  {
    label: "Strength",
    title: "Product Ownership",
    description: "기획부터 배포, 운영까지 End-to-End 프로덕트 오너십",
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
      <SectionFade>
        <section
          className="min-h-[100dvh] flex items-center pt-16"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(30, 215, 96, 0.06), transparent), #121212",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full py-10 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10 md:gap-16 items-center">
            {/* Left: Text */}
            <div>
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
                  <br />
                  여러 아이디어를 직접 서비스로 만들고 운영해온 경험을 통해,
                  <br />
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
              <div className="relative w-[340px] h-[340px]">
                <div className="absolute -inset-1 border-2 border-green/30 rounded-full" />
                <Image
                  src="/profile.jpg"
                  alt="이현준"
                  fill
                  sizes="340px"
                  preload
                  className="object-cover rounded-full shadow-[0px_8px_24px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionFade>


      {/* ═══ SKILLS ═══ */}
      <SectionFade>
        <section id="skills" className="py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Skills" />

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerMs={120}>
              {skills.map((skill) => (
                <div key={skill.title} className="bg-surface rounded-lg p-6 h-full hover:bg-surface-mid transition-colors duration-150">
                  <span className="text-xs font-bold text-green uppercase tracking-[1.4px]">
                    {skill.label}
                  </span>
                  <h3 className="text-lg font-semibold text-white leading-[1.3] mt-3 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-silver leading-normal">
                    {skill.description}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </SectionFade>

      {/* ═══ PROJECTS ═══ */}
      <SectionFade>
        <section id="projects" className="py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Projects" />

            <StaggerReveal className="flex flex-col gap-2" staggerMs={80}>
              {projects.map((project) => (
                <div
                  key={project.name}
                  className={`bg-surface rounded-lg p-5 md:p-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-6 hover:bg-surface-mid hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 ease-out${
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
                    <span className="w-fit rounded-full border border-green-border-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[1px] text-green">
                      {project.role}
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
              ))}
            </StaggerReveal>
          </div>
        </section>
      </SectionFade>

      {/* ═══ EXPERIENCE ═══ */}
      <SectionFade>
        <section id="experience" className="py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Experience" />

            <StaggerReveal className="flex flex-col" staggerMs={120}>
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
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
              ))}
            </StaggerReveal>
          </div>
        </section>
      </SectionFade>

      {/* ═══ CERTIFICATES — pill badges ═══ */}
      <SectionFade>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Certificate" />

            <StaggerReveal className="flex flex-wrap gap-2.5" staggerMs={100}>
              {certificates.map((cert) => (
                <div key={cert.name} className="inline-flex items-center gap-2.5 bg-surface rounded-full px-5 py-2.5 hover:bg-surface-mid transition-colors duration-150">
                  <span className="font-mono text-xs font-bold text-green">
                    {cert.year}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {cert.name}
                  </span>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </SectionFade>

      {/* ═══ CTA BAND ═══ */}
      <SectionFade>
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
      </SectionFade>

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
