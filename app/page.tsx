import Image from "next/image";
import { SectionFade } from "./components/SectionFade";
import { GithubLogo, ArrowUpRight } from "./components/Icons";
import { CopyEmail } from "./components/CopyEmail";
import { MoreProjectCard } from "./components/MoreProjectCard";

const projects = [
  {
    name: "SK Hynix · 비정형 문서 Asset Context 생성 AI Agent",
    period: "2026.09.01 ~ 2026.12.15",
    type: "Consulting",
    role: "AI Engineering, 비정형 담당",
    description:
      "기업의 PDF·DOCX·PPTX를 원본 구조와 위치 정보까지 보존해 처리하고, 업무 도메인별 검색에 필요한 원문 근거 기반 컨텍스트를 생성하는 AI 파이프라인",
    highlights: [
      "PDF·DOCX·PPTX의 본문·표·그림을 추출하면서 원본 순서와 페이지·슬라이드 위치를 보존하는 파이프라인 설계·구현",
      "문서 구간을 업무 도메인별로 분류·묶고, 요약·개체·사건을 원문 근거와 연결한 검색 컨텍스트 생성",
      "Temporal 기반 역할별 워커, PDF 페이지 분할 처리, 실패 구간 재시도로 문서 처리 흐름 구성",
      "OCR 품질이 낮은 PDF 페이지만 선별해 보완하고, LLM Agent로 문서 제목·제목 계층의 정규화 결과를 검토",
      "문서 구조를 보존한 Section·Chunk를 생성하고, 도메인 변경·제외 구간·입력 크기를 기준으로 동일 도메인 Unit의 경계를 결정",
      "도메인 프로파일을 생성·버전 관리하고, 이를 활용해 Unit의 요약·개체·사건을 원문 근거와 함께 추출",
    ],
    keywords: [
      "Docling",
      "Temporal",
      "LLM Agent",
      "Domain Classification",
      "Document Chunking",
    ],
    website: null,
    github: null,
    featured: true,
  },
  {
    name: "삼성전자 DS · Oracle DB 운영 분석 AI Agent",
    period: "2026.04.01 ~ 2026.07.31",
    type: "Consulting",
    role: "AI Engineering Consultant",
    description:
      "Oracle DB 운영 환경의 성능 저하와 이상 징후를 분석하는 Agentic AI 기반 SRE 지원 시스템",
    highlights: [
      "사용자 질문을 분석해 필요한 전문 에이전트를 선택·조합하는 Classifier 기반 오케스트레이션 구조 설계",
      "반복적인 초기 원인 분석 케이스 기준, 기존 최소 1시간 이상 걸리던 점검 과정을 평균 3분 이내 응답으로 단축",
      "전문 개발자가 없는 조직에서 LLM 기반 운영 분석 서비스의 문제 정의, 기능 기획, 시스템 구조 설계를 주도",
      "고정 테스트셋, 기대 답변, LLM-as-a-judge를 기반으로 에이전트 응답 품질을 회귀 테스트하고 개선하는 평가 체계 설계",
      "Celery / RabbitMQ 기반 메시지큐 시스템을 도입해 기존 에이전트 실행과 운영 알람 분석을 비동기 처리 구조로 확장",
      "DBA / SRE의 반복적인 장애 초기 점검 절차를 AI 기반 분석 워크플로우로 전환하도록 설계",
    ],
    keywords: [
      "Agentic SRE",
      "Classifier Routing",
      "Plan-and-Execute",
      "LLM-as-a-judge",
      "Celery / RabbitMQ",
      "DBA Workflow",
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
      "자연어 질문을 SQL 조회, 결과 해석, 시각화 데이터 생성까지 연결해 MMA 경기 데이터를 대화형으로 분석할 수 있는 에이전트 구현",
      "LangGraph 기반 Supervisor 패턴으로 질의 분류, 도구 호출, 응답 생성 흐름을 오케스트레이션",
      "역할별 AI 에이전트 분리 및 컨텍스트 문서 체계화로 AI-Assisted 개발 프로세스 구축",
      "경기/선수 데이터를 주기적으로 수집·정제하고, Prefect 기반 워크플로우로 데이터 파이프라인 운영 자동화",
      "Blue/Green 배포와 운영 자동화를 적용해 데이터 갱신부터 AI 응답 제공까지 지속 운영 가능한 프로덕션 환경 구성",
    ],
    keywords: [
      "Text-to-SQL",
      "LangGraph Supervisor",
      "Data Visualization",
      "Prefect Pipeline",
      "AI-Assisted Dev",
      "Blue/Green Deploy",
    ],
    website: "https://mma-savant.com/",
    github: "https://github.com/Hyun-Jun-Lee/mma-savant",
    featured: false,
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
    keywords: [
      "Multimodal OCR",
      "LLM Pipeline",
      "Payment Verification",
      "Credit System",
      "Freemium Billing",
      "Cost Optimization",
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
    keywords: [
      "A/B Arena",
      "Blind Evaluation",
      "Prompt Versioning",
      "Rollback",
      "LLM Experiment Ops",
      "DDD Architecture",
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
    keywords: [
      "Web Crawling",
      "LLM Classification",
      "Auto Tagging",
      "RabbitMQ Workers",
      "Graph DB",
      "Content Intelligence",
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
    keywords: [
      "Dataset Search",
      "Validation DSL",
      "Version Control",
      "RBAC",
      "Approval Workflow",
      "Research Data Ops",
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
    keywords: [
      "FastAPI",
      "AWS EC2",
      "Query Optimization",
      "Full-Text Search",
      "Caching",
      "pytest Coverage",
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
    keywords: [
      "Audit Log ETL",
      "Producer-Consumer",
      "Oracle / MSSQL / MySQL",
      "Access Control",
      "Query Approval",
      "Backoffice Monitoring",
    ],
    website: null,
    github: null,
    featured: false,
  },
];

const experiences = [
  {
    company: "SK Hynix 프로젝트",
    role: "AI Engineering, 비정형 담당",
    period: "2026.09.01 ~ 2026.12.15",
    description: "비정형 문서 Asset Context 생성 AI Agent",
    highlights: [
      "PDF·DOCX·PPTX의 원본 순서와 위치를 보존하는 문서 처리 파이프라인 설계·구현",
      "업무 도메인 분류와 원문 근거 기반 검색 컨텍스트 생성 담당",
      "Temporal 워커, 페이지 분할, 실패 구간 재시도로 처리 흐름 구성",
    ],
  },
  {
    company: "삼성전자 DS 프로젝트",
    role: "AI Engineering Consultant",
    period: "2026.04.01 ~ 2026.07.31",
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
    <h2 className="mb-6 text-2xl font-medium text-white">{title}</h2>
  );
}

type Project = (typeof projects)[number];

function ProjectHighlights({ highlights }: { highlights: string[] }) {
  return (
    <ul className="flex max-w-[76ch] flex-col gap-2">
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="relative pl-4 text-sm leading-relaxed text-near-white before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-silver"
        >
          {highlight}
        </li>
      ))}
    </ul>
  );
}

function ProjectBody({
  project,
  previewCount,
  showLinks = true,
}: {
  project: Project;
  previewCount?: number;
  showLinks?: boolean;
}) {
  const visibleHighlights = previewCount
    ? project.highlights.slice(0, previewCount)
    : project.highlights;
  const extraHighlights = previewCount
    ? project.highlights.slice(previewCount)
    : [];

  return (
    <>
      <ProjectHighlights highlights={visibleHighlights} />
      {extraHighlights.length > 0 && (
        <details className="group mt-4">
          <summary className="w-fit cursor-pointer list-none rounded-sm text-sm text-silver transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">펼치기</span>
            <span className="hidden group-open:inline">접기</span>
          </summary>
          <div className="mt-4">
            <ProjectHighlights highlights={extraHighlights} />
          </div>
        </details>
      )}
      <p className="mt-5 max-w-[76ch] text-[13px] leading-relaxed text-silver">
        {project.keywords.join(" · ")}
      </p>
      {showLinks && (project.website || project.github) && (
        <div className="mt-5 flex gap-5">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-green hover:text-green-active transition-colors duration-150"
            >
              Visit <ArrowUpRight size={14} weight="regular" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-green hover:text-green-active transition-colors duration-150"
            >
              GitHub <ArrowUpRight size={14} weight="regular" />
            </a>
          )}
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <SectionFade>
        <section className="pt-16">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-5 py-16 text-center md:grid md:grid-cols-[minmax(0,1fr)_320px] md:items-center md:gap-x-20 md:px-10 md:py-24 md:text-left">
            <div className="hero-portrait relative h-[270px] w-[260px] overflow-hidden rounded-t-xl sm:h-[290px] sm:w-[280px] md:order-2 md:h-[330px] md:w-[320px] md:justify-self-end">
              <Image
                src="/profile-hero.jpeg"
                alt="이현준"
                fill
                sizes="(min-width: 768px) 320px, (min-width: 640px) 280px, 260px"
                preload
                className="hero-portrait-fade object-cover object-center"
              />
            </div>

            <div className="reveal-on-load max-w-[560px] md:order-1">
              <h1 className="mb-3 text-[clamp(40px,7vw,64px)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
                이현준
              </h1>
              <p className="mb-6 text-[clamp(20px,3vw,32px)] font-normal text-silver">
                Product Engineer
              </p>
              <p className="max-w-[52ch] text-base leading-relaxed text-silver">
                기능을 구현하는 것보다 문제를 해결하는 것에 관심이 있습니다. 여러
                아이디어를 직접 서비스로 만들고 운영해온 경험을 통해,
                좋은 코드보다 좋은 프로덕트를 만드는 엔지니어를 지향합니다.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <CopyEmail email="bhk0827@gmail.com" />
                <a
                  href="https://github.com/Hyun-Jun-Lee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-surface px-6 text-sm font-medium text-white transition-[background-color,border-color,transform] duration-150 hover:border-white/25 hover:bg-surface-mid active:scale-[0.98]"
                >
                  <GithubLogo size={16} weight="regular" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </SectionFade>


      {/* ═══ PROJECTS ═══ */}
      <SectionFade>
        <section id="projects" className="scroll-mt-16 py-12">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Projects" />

            <div className="grid grid-cols-1 gap-4">
              {projects.filter((project) => project.featured).map((project) => (
                <article
                  key={project.name}
                  className="featured-project min-w-0"
                >
                  <div className="featured-project-card h-full rounded-xl border border-white/10 bg-surface p-6 md:p-8">
                    <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-[13px] text-silver">{project.period}</span>
                      <span className="text-sm text-silver">{project.role}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-white">{project.name}</h3>
                      <p className="mb-5 max-w-[76ch] text-sm leading-relaxed text-silver">
                        {project.description}
                      </p>
                      <ProjectBody project={project} previewCount={3} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold text-white">More Projects</h3>
              <p className="text-xs text-silver">좌우로 스크롤해 더 보기</p>
            </div>
            <div
              className="project-rail mt-4 flex snap-x snap-proximity items-start gap-4 overflow-x-auto pb-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              role="region"
              aria-label="그 외 프로젝트, 가로로 스크롤"
              tabIndex={0}
            >
              {projects.filter((project) => !project.featured).map((project) => (
                <MoreProjectCard key={project.name} project={project}>
                  <p className="mb-4 text-sm text-silver">{project.role}</p>
                  <ProjectBody project={project} showLinks={false} />
                </MoreProjectCard>
              ))}
            </div>
          </div>
        </section>
      </SectionFade>

      {/* ═══ EXPERIENCE ═══ */}
      <SectionFade>
        <section id="experience" className="scroll-mt-16 py-12">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Experience" />

            <div className="mt-2" role="list">
              {experiences.map((exp, index) => (
                <article
                  key={exp.company}
                  className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 pb-10 last:pb-0 md:grid-cols-[132px_20px_minmax(0,1fr)] md:gap-x-6"
                  role="listitem"
                >
                  <time className="hidden font-mono text-[13px] leading-5 text-silver md:col-start-1 md:row-start-1 md:block">
                    {exp.period}
                  </time>

                  <div
                    className="relative col-start-1 row-start-1 h-full md:col-start-2"
                    aria-hidden="true"
                  >
                    {index < experiences.length - 1 && (
                      <span className="absolute left-1/2 top-5 bottom-0 w-px -translate-x-1/2 bg-border-gray" />
                    )}
                    <span
                      className={`absolute left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${
                        index === 0
                          ? "border-green bg-green"
                          : "border-silver bg-near-black"
                      }`}
                    />
                  </div>

                  <div className="col-start-2 row-start-1 md:col-start-3">
                    <time className="mb-2 block font-mono text-[13px] leading-5 text-silver md:hidden">
                      {exp.period}
                    </time>
                    <h3 className="text-lg font-medium leading-6 text-white">
                      {exp.company}
                    </h3>
                    <span className="mt-1 block text-sm text-near-white">
                      {exp.role}
                    </span>
                    <p className="mb-4 mt-1 text-[13px] leading-5 text-silver">
                      {exp.description}
                    </p>
                    <ProjectHighlights highlights={exp.highlights} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SectionFade>

      {/* ═══ SKILLS ═══ */}
      <SectionFade>
        <section id="skills" className="scroll-mt-16 py-12">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <SectionHeader title="Skills" />

            <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.title} className="border-t border-white/10 py-5">
                  <span className="text-[13px] text-silver">{skill.label}</span>
                  <h3 className="mb-2 mt-1 text-base font-medium text-white">
                    {skill.title}
                  </h3>
                  <p className="max-w-[55ch] text-sm leading-relaxed text-silver">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFade>

      {/* ═══ CTA BAND ═══ */}
      <SectionFade>
        <section id="contact" className="scroll-mt-16 py-12">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="bg-surface rounded-xl border border-white/10 px-8 py-10 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <h2 className="max-w-[480px] text-2xl font-medium text-white">
                새로운 기회나 협업에 열려 있습니다
              </h2>
              <a
                href="mailto:bhk0827@gmail.com"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-green px-6 text-sm font-semibold text-on-green transition-colors duration-150 hover:bg-green-active shrink-0"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </SectionFade>

      {/* ═══ FOOTER — dark system baseline ═══ */}
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
