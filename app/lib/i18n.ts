export type Language = "ko" | "en";

const english: Record<string, string> = {
  "SK Hynix · 비정형 문서 Asset Context 생성 AI Agent":
    "SK hynix · AI Agent for Unstructured Document Asset Context",
  "AI Engineering, 비정형 담당": "AI Engineering, Unstructured Data",
  "기업의 PDF·DOCX·PPTX를 원본 구조와 위치 정보까지 보존해 처리하고, 업무 도메인별 검색에 필요한 원문 근거 기반 컨텍스트를 생성하는 AI 파이프라인":
    "An AI pipeline that processes enterprise PDFs, DOCX, and PPTX files while preserving their source structure and positional data, then builds source-grounded context for domain-specific retrieval.",
  "PDF·DOCX·PPTX의 본문·표·그림을 추출하면서 원본 순서와 페이지·슬라이드 위치를 보존하는 파이프라인 설계·구현":
    "Designed and built a pipeline that extracts text, tables, and images from PDF, DOCX, and PPTX files while retaining source order and page or slide positions.",
  "문서 구간을 업무 도메인별로 분류·묶고, 요약·개체·사건을 원문 근거와 연결한 검색 컨텍스트 생성":
    "Classified and grouped document segments by business domain, creating retrieval context that ties summaries, entities, and events to their source evidence.",
  "Temporal 기반 역할별 워커, PDF 페이지 분할 처리, 실패 구간 재시도로 문서 처리 흐름 구성":
    "Built a document-processing workflow with role-specific Temporal workers, split PDF-page processing, and retries for failed segments.",
  "OCR 품질이 낮은 PDF 페이지만 선별해 보완하고, LLM Agent로 문서 제목·제목 계층의 정규화 결과를 검토":
    "Targeted only low-quality OCR PDF pages for remediation and used an LLM agent to validate normalized document titles and heading hierarchies.",
  "문서 구조를 보존한 Section·Chunk를 생성하고, 도메인 변경·제외 구간·입력 크기를 기준으로 동일 도메인 Unit의 경계를 결정":
    "Generated structure-preserving sections and chunks, defining same-domain unit boundaries based on domain changes, excluded ranges, and input size.",
  "도메인 프로파일을 생성·버전 관리하고, 이를 활용해 Unit의 요약·개체·사건을 원문 근거와 함께 추출":
    "Created and versioned domain profiles to extract each unit's summaries, entities, and events alongside source evidence.",
  "삼성전자 DS · Oracle DB 운영 분석 AI Agent":
    "Samsung Electronics DS · Oracle DB Operations Analysis AI Agent",
  "Oracle DB 운영 환경의 성능 저하와 이상 징후를 분석하는 Agentic AI 기반 SRE 지원 시스템":
    "An agentic-AI SRE support system that analyzes performance degradation and anomalies in Oracle DB operations.",
  "사용자 질문을 분석해 필요한 전문 에이전트를 선택·조합하는 Classifier 기반 오케스트레이션 구조 설계":
    "Designed a classifier-driven orchestration architecture that selects and combines specialist agents based on a user's question.",
  "반복적인 초기 원인 분석 케이스 기준, 기존 최소 1시간 이상 걸리던 점검 과정을 평균 3분 이내 응답으로 단축":
    "Reduced recurring initial root-cause checks from at least one hour to an average response time under three minutes.",
  "전문 개발자가 없는 조직에서 LLM 기반 운영 분석 서비스의 문제 정의, 기능 기획, 시스템 구조 설계를 주도":
    "Led problem definition, feature planning, and system architecture for an LLM-powered operations-analysis service within a team without specialist developers.",
  "고정 테스트셋, 기대 답변, LLM-as-a-judge를 기반으로 에이전트 응답 품질을 회귀 테스트하고 개선하는 평가 체계 설계":
    "Designed an evaluation system that regression-tests and improves agent response quality using fixed test sets, expected answers, and LLM-as-a-judge.",
  "Celery / RabbitMQ 기반 메시지큐 시스템을 도입해 기존 에이전트 실행과 운영 알람 분석을 비동기 처리 구조로 확장":
    "Introduced a Celery/RabbitMQ message-queue system to extend agent execution and operations-alarm analysis into asynchronous workflows.",
  "DBA / SRE의 반복적인 장애 초기 점검 절차를 AI 기반 분석 워크플로우로 전환하도록 설계":
    "Designed an AI-driven analysis workflow to replace repetitive initial incident checks performed by DBAs and SREs.",
  "MMA 경기 데이터 수집 / 분석 / AI 챗봇 플랫폼":
    "An MMA match data collection, analytics, and AI chatbot platform.",
  "자연어 질문을 SQL 조회, 결과 해석, 시각화 데이터 생성까지 연결해 MMA 경기 데이터를 대화형으로 분석할 수 있는 에이전트 구현":
    "Built an agent that connects natural-language questions to SQL queries, result interpretation, and visualization data for conversational MMA analysis.",
  "LangGraph 기반 Supervisor 패턴으로 질의 분류, 도구 호출, 응답 생성 흐름을 오케스트레이션":
    "Orchestrated query classification, tool calls, and response generation with a LangGraph-based supervisor pattern.",
  "역할별 AI 에이전트 분리 및 컨텍스트 문서 체계화로 AI-Assisted 개발 프로세스 구축":
    "Established an AI-assisted development process through role-specific agents and structured context documentation.",
  "경기/선수 데이터를 주기적으로 수집·정제하고, Prefect 기반 워크플로우로 데이터 파이프라인 운영 자동화":
    "Automated data-pipeline operations with Prefect workflows that regularly collect and refine match and fighter data.",
  "Blue/Green 배포와 운영 자동화를 적용해 데이터 갱신부터 AI 응답 제공까지 지속 운영 가능한 프로덕션 환경 구성":
    "Built a production environment that supports continuous operation from data updates to AI responses through blue/green deployments and automated operations.",
  "AI 기반 대화 및 점성술 분석 플랫폼": "An AI-powered conversation and astrology analysis platform.",
  "이미지 입력부터 OCR, LLM 분석, 결과 생성까지 이어지는 멀티모달 분석 파이프라인 설계":
    "Designed a multimodal analysis pipeline from image input through OCR and LLM analysis to result generation.",
  "국내 / 해외 PG 결제 검증, 프로모 코드, 크레딧 차감을 통합한 Freemium 과금 구조 구현":
    "Implemented a freemium billing model that integrates domestic and international payment verification, promo codes, and credit deductions.",
  "LLM 호출 단계와 분석 흐름을 분리해 비용 효율성과 사용자 경험을 함께 최적화":
    "Separated LLM invocation stages from the analysis flow to optimize both cost efficiency and user experience.",
  "AI 응답 블라인드 평가 시스템": "AI Response Blind Evaluation System",
  "AI 응답과 전문가 응답을 블라인드 비교 평가하는 A/B 아레나 시스템":
    "An A/B arena system for blind comparison of AI and expert responses.",
  "AI 응답과 전문가 응답을 블라인드 비교하는 A/B 평가 아레나 시스템 구현":
    "Built an A/B evaluation arena for blind comparison of AI and expert responses.",
  "프롬프트 버전 관리, 롤백, 버전 간 변경사항 요약을 통해 LLM 실험 운영 흐름 구축":
    "Built an LLM experiment-operations flow with prompt versioning, rollback, and summaries of changes between versions.",
  "DDD 아키텍처 설계로 도메인별 독립 컨텍스트 구성, AI-Assisted 개발 시 컨텍스트 노이즈 제거":
    "Applied DDD architecture to create independent domain contexts and reduce context noise during AI-assisted development.",
  "콘텐츠 분류 자동화 파이프라인": "Content Classification Automation Pipeline",
  "키워드 기반 웹 콘텐츠 자동 수집 / LLM 분류 / 분석 파이프라인 시스템":
    "A pipeline for keyword-based web-content collection, LLM classification, and analysis.",
  "키워드 기반 수집, LLM 분류, 자동 태깅으로 이어지는 콘텐츠 분석 파이프라인 구축":
    "Built a content-analysis pipeline spanning keyword-based collection, LLM classification, and automated tagging.",
  "RabbitMQ 기반 멀티 워커 구조로 크롤링 / 분류 작업을 비동기 처리하도록 설계":
    "Designed a RabbitMQ-based multi-worker architecture for asynchronous crawling and classification.",
  "사이트 간 연결 관계를 추적 / 분석하기 위한 그래프 DB 기반 콘텐츠 관계 모델링":
    "Modeled content relationships in a graph database to trace and analyze connections between websites.",
  "사내 데이터셋 통합 관리 시스템": "Internal Dataset Management System",
  "다양한 포맷의 데이터셋을 저장 및 관리할 수 있는 데이터 관리 시스템":
    "A data management system for storing and managing datasets in diverse formats.",
  "다양한 포맷의 데이터셋을 검색 / 검증 / 관리하기 위한 사내 데이터 관리 시스템 구축":
    "Built an internal data management system for searching, validating, and administering datasets in diverse formats.",
  "데이터 검색과 검증 조건을 유연하게 정의할 수 있는 DSL 설계":
    "Designed a DSL for flexibly defining data-search and validation criteria.",
  "데이터 버전 관리, 복원, RBAC, 요청 / 승인 워크플로우를 통해 연구 데이터 운영 체계화":
    "Systematized research-data operations with versioning, restoration, RBAC, and request/approval workflows.",
  "유학생 소셜링 어플리케이션": "A social networking application for international students.",
  "FastAPI 기반 API와 DB 모델을 설계하고, AWS EC2 기반 Dev / Prod 서버 인프라 구축":
    "Designed FastAPI APIs and database models, then built AWS EC2 infrastructure for development and production environments.",
  "캐싱, ORM 쿼리 최적화, Full-Text Search로 주요 조회 API 응답 속도 50% 단축":
    "Reduced response times for key read APIs by 50% with caching, ORM query optimization, and full-text search.",
  "pytest 기반 테스트 체계를 도입해 80% 테스트 커버리지 달성":
    "Introduced a pytest-based test suite and reached 80% test coverage.",
  "DB 감사 로그 수집 / 분석 솔루션": "DB Audit Log Collection and Analysis Solution",
  "기업 DB를 모니터링하여 IT 내부 통제 감사를 대응하기 위한 솔루션":
    "A solution for monitoring enterprise databases and supporting IT internal-control audits.",
  "기업 DB 감사 대응을 위한 로그 수집, 검색, 분석 백오피스 기능 개발":
    "Developed back-office features for log collection, search, and analysis to support enterprise DB audits.",
  "Producer-Consumer 패턴 기반 ETL 파이프라인으로 Oracle / MSSQL / MySQL 로그 수집 구조 구축":
    "Built an Oracle, MSSQL, and MySQL log-collection architecture using a producer-consumer ETL pipeline.",
  "세분화된 접근 권한, 쿼리 승인 워크플로우, 고객사별 상태 모니터링 기능 구현":
    "Implemented granular access controls, query-approval workflows, and per-customer status monitoring.",
  "SK Hynix 프로젝트": "SK hynix Project",
  "비정형 문서 Asset Context 생성 AI Agent": "AI Agent for Unstructured Document Asset Context",
  "PDF·DOCX·PPTX의 원본 순서와 위치를 보존하는 문서 처리 파이프라인 설계·구현":
    "Designed and built a document-processing pipeline that preserves the source order and positions of PDF, DOCX, and PPTX files.",
  "업무 도메인 분류와 원문 근거 기반 검색 컨텍스트 생성 담당":
    "Owned business-domain classification and the generation of source-grounded retrieval context.",
  "Temporal 워커, 페이지 분할, 실패 구간 재시도로 처리 흐름 구성":
    "Built the processing flow with Temporal workers, page splitting, and failed-segment retries.",
  "삼성전자 DS 프로젝트": "Samsung Electronics DS Project",
  "삼성전자 DS MES 팀 멀티 에이전트 프로젝트 참여":
    "Contributed to a multi-agent project for Samsung Electronics DS's MES team.",
  "비즈니스 요구사항을 제품 구조, 데이터 흐름, AI 활용 전략으로 구체화":
    "Translated business requirements into product architecture, data flows, and an AI adoption strategy.",
  "아이디어 검증부터 시스템 설계, 프로토타입 구현, 운영 단계 까지 End-to-End 지원":
    "Supported the work end to end, from idea validation and system design through prototype delivery and operations.",
  "(주)인사이터": "Insighter Co., Ltd.",
  "Series A B2B AI Startup (30명)": "Series A B2B AI startup (30 people)",
  "국가 R&D 사업 참여 (계획서 작성, 개발, 시연 및 발표)":
    "Contributed to a national R&D program through proposal writing, development, demonstrations, and presentations.",
  "사내 데이터 통합 관리 시스템 설계 및 구축":
    "Designed and built an internal integrated data management system.",
  "AI 연구 인프라 (데이터, 프롬프트, 모델 학습 관리)":
    "Built AI research infrastructure for data, prompt, and model-training management.",
  "(주)로그스택": "LogStack Co., Ltd.",
  "Seed B2B Startup (6명)": "Seed-stage B2B startup (6 people)",
  "Oracle, MSSQL, MySQL 등 다양한 DB 로그 수집 ETL 파이프라인 설계 및 개발":
    "Designed and developed ETL pipelines for collecting logs from Oracle, MSSQL, MySQL, and other databases.",
  "서비스 DB 모델링 및 백엔드 아키텍처, Docker 기반 인프라 구축":
    "Built service database models, backend architecture, and Docker-based infrastructure.",
  "아이디어를 사용 가능한 서비스로 만들고, 요구사항 / 데이터 / 운영 제약을 함께 고려해 제품 단위로 완성합니다.":
    "I turn ideas into usable services, accounting for requirements, data, and operational constraints to deliver complete products.",
  "LLM을 단순 호출이 아니라 의도 분석, 도구 사용, 검증, 후처리 흐름으로 설계해 제품 기능으로 통합합니다.":
    "I design LLMs as product capabilities through intent analysis, tool use, validation, and post-processing—not simple API calls.",
  "수집, 저장, 검색, 배포, 모니터링까지 제품이 지속적으로 동작하기 위한 데이터 / 운영 구조를 설계합니다.":
    "I design the data and operational structures that keep products running—from collection and storage to retrieval, deployment, and monitoring.",
  "기획부터 배포, 운영까지 End-to-End 프로덕트 오너십":
    "End-to-end product ownership from planning through deployment and operations.",
  "기능을 구현하는 것보다 문제를 해결하는 것에 관심이 있습니다.":
    "I care more about solving problems than simply implementing features.",
  "좋은 코드보다 좋은 프로덕트를 만드는 엔지니어를 지향합니다.":
    "I aim to be an engineer who makes better products, not just better code.",
  "새로운 기회나 협업에 열려 있습니다": "Open to new opportunities and collaborations.",
  "좌우로 스크롤해 더 보기": "Scroll horizontally to explore more.",
  "그 외 프로젝트, 가로로 스크롤": "More projects, scroll horizontally.",
  "자세히 보기": "View details",
  "접기": "Show less",
  "펼치기": "Show more",
  "메뉴 닫기": "Close menu",
  "메뉴 열기": "Open menu",
  "이메일 주소 복사됨": "Email address copied",
  "이메일 주소 복사": "Copy email address",
};

export function translate(language: Language, text: string) {
  return language === "en" ? (english[text] ?? text) : text;
}
