# TwinOps Project Context

## Goal

3D Digital Twin based Smart Factory Monitoring Service

## Deadline

2026-11-15
Deployment + CI/CD complete

## Stack

Frontend
- React
- TypeScript
- Vite
- Three.js
- React Three Fiber

Backend
- Java 21
- Spring Boot
- JPA

Database
- PostgreSQL

Infrastructure
- Docker
- Docker Compose
- Nginx
- AWS EC2

CI/CD
- GitHub Actions

## Architecture

Browser
↓
Nginx
↓
React / Spring Boot
↓
PostgreSQL

WebSocket:
Spring Boot → React

## Project Management Rule

- This file is the Source of Truth for project-level decisions.
- Overall goal, deadline, stack, architecture, scope, and task roadmap are managed from the TwinOps project headquarters chat.
- Task-specific chats are for execution, learning, implementation, and code review.
- A Task chat should not silently change the overall project plan.
- If a Task chat proposes a project-level change, confirm it in the project headquarters chat first.

## Current Progress

진행 현황 갱신: 2026-11-14 (Asia/Seoul)

- Task 01~04: 완료 — 기존 프로젝트 기록 및 사용자 보고 기준.
- Task 05: 완료 — 사용자 완료 보고 기준. GLB/GLTF 모델 로딩, OrbitControls, GLB Material 색상 변경 학습 및 필수 완료 조건 달성.
- Task 05 GitHub PR의 `main` 병합 완료 — 사용자 보고 기준.
- Task 06: 3D equipment selection 구현 완료 및 원격 Push, PR 생성, `main` Merge 완료 — 사용자 보고 기준.
- 전체 21개 Task 중 Task 01~06 완료 (6/21). 다음 작업: Task 07 — Spring Boot.
- 실제 소스 코드, 브라우저 동작, 빌드/테스트 결과와 원격 Git 기록을 직접 검증한 것은 아님.

### Task 01 — React Basics + EquipmentCard ✅

Completed:
- JSX
- Component
- useState
- Event
- Conditional rendering
- Array/Object
- map()
- EquipmentCard component
- Basic equipment data rendering

### Task 02 — TypeScript + Props + EquipmentCard 타입화 ✅

Completed:
- Basic TypeScript types
- interface / type
- Equipment data typing
- React Props
- EquipmentCard Props typing
- Passing equipment data from App to EquipmentCard
- Rendering typed equipment data with map()

Important:
- React and TypeScript learning is NOT considered finished.
- These fundamentals are the current foundation.
- Additional React/TypeScript concepts will be learned when they become necessary during actual product development.

### Task 03 — Dashboard UI + CSS ✅

Status: 완료 — 사용자 완료 보고 기준.

- 사용자가 Task 03까지 완료했다고 보고함.
- 사용자가 GitHub 업로드 정상 반영 확인 및 Task 04용 새 브랜치 생성을 보고함.
- main 병합은 이전 대화의 안내를 모두 실행했다는 사용자 보고 및 해당 대화의 정리를 기준으로 기록함. 저장소와 커밋 이력은 직접 검증하지 않음.
- Dashboard 레이아웃, Equipment Card UI, 전체 설비 수, Normal / Warning / Error 상태, 온도 정보, Flexbox / Grid 활용, 컴포넌트 분리 및 브라우저 표시가 Task 03의 계획상 완료 기준이었음.
- 위 세부 항목은 완료 보고 및 계획 기준의 기록이며 실제 코드나 실행 화면으로 개별 검증한 구현 목록이 아님. 정확한 CSS 방식, 컴포넌트 구조, 테스트 결과는 확인되지 않음.
- Task 01~03 개발 기록: `development-log.md`

## Current Task

Task 07 — Spring Boot (다음 작업)

Status basis:
- Task 01~05 완료 내용은 기존 문서 및 사용자 보고 기준이다.
- 사용자가 Task 06 Equipment Selection 완료와 GitHub 원격 Push, PR 생성 및 `main` Merge 완료를 보고했다.
- Task 06 실제 코드·실행 화면·빌드 결과·원격 Git 이력은 직접 검증하지 않았다.
- Task 07 Spring Boot 프로젝트 생성 및 실행 여부는 아직 확인되지 않았다.

### Task 04 — Three.js basics + React Three Fiber ✅

Status: 완료 — 사용자 보고 기준. 아래 목표·계획·체크리스트는 기존 범위를 보존한 것이며 개별 구현 검증 결과가 아니다.
### Task 04 Goal

기존 Dashboard에 첫 번째 3D 화면을 구현하면서 Three.js와 React Three Fiber의 기초를 학습한다.

### Task 04 Planned Work

- Scene, Camera, Light, Mesh 개념 학습
- React Three Fiber 설치 및 Canvas 구성
- Box / Cylinder 등 기본 도형으로 3D 설비 표현
- 카메라와 조명 설정
- 기존 Dashboard와 함께 표시

### Task 04 Completion Criteria — 개별 충족 여부 미검증

- [ ] React 페이지에 3D Canvas 표시
- [ ] 기본 도형 기반 3D 설비 렌더링
- [ ] 카메라와 조명 설정
- [ ] 기존 Dashboard 기능 유지

이전 대화에서 OrbitControls를 이용한 회전·확대·축소도 Task 04 목표로 제안되었으나, 원본 로드맵의 Task 05(GLB/GLTF + OrbitControls) 배정은 유지한다. Task 04에서 미리 다룰 경우 선행 학습으로 기록하며 로드맵 변경으로 간주하지 않는다.

### Task 05 — GLB/GLTF + OrbitControls ✅

Status: 완료 — 2026-11-12 문서 반영, 사용자 완료 보고 기준 (실제 작업 완료일은 미확인).

- GLB/GLTF 모델을 가져와 React Three Fiber 환경에서 로딩하는 작업을 진행함.
- OrbitControls를 이용한 3D 모델 조작을 학습함.
- GLB 모델 Material 색상을 변경하는 작업을 진행함.
- 사용자가 Task 05의 필수 완료 조건을 모두 달성했다고 보고함.
- Task 05 PR을 GitHub `main` 브랜치에 병합했다고 보고함.
- 이후 `git fetch`와 `git pull`의 차이를 학습하고 이해도 확인 질문에 올바르게 답함.
- 코드 구조, 모델 구성, 빌드/테스트 및 원격 Git 상태는 직접 검증하지 않음.
- 세부 기록은 `development-log.md`를 참고.

### Task 06 — 3D object selection + equipment panel ✅

Planned goal:
- 3D 객체 클릭 시 해당 설비를 선택하도록 구현
- 선택된 설비 ID와 React 상태 연결
- 선택 설비의 정보를 Equipment Panel에 표시
- 기존 Dashboard와 3D 모델 기능 유지

Status: 완료 — 사용자 보고 기준. 위 목록은 원래 계획이며 각 항목의 세부 구현은 직접 검증하지 않았다.

Git: 작업 브랜치를 원격에 Push하고 PR 생성 후 `main`에 Merge했다고 사용자가 확인했다. PR 번호·커밋 해시·자동 테스트 결과는 확인하지 않았다.

### Task 07 — Spring Boot (다음 작업)

- Spring Boot 프로젝트 생성 및 기본 서버 실행
- Controller / Service 역할 이해 및 기본 REST API 작성
- API 응답 확인
- PostgreSQL/JPA 연동은 Task 08 이후 진행
- 위 내용은 계획이며 Task 07 실행 및 완료 여부는 미확인이다.

### React / TypeScript Learning Policy

Do not try to finish all React/TypeScript theory before continuing the project.

Learn concepts just before or while they become necessary in the product.

Concepts expected to be learned later as needed:
- useEffect
- async / await
- API communication
- component design and state placement
- data flow between components
- WebSocket data handling
- additional TypeScript types for API / WebSocket data
- event and callback typing

Target level by project completion:
- Read and understand the project's React/TypeScript code
- Modify existing code safely
- Explain the main component/data flow
- Understand why state, Props, types, and components are used
- Use AI/Codex for repetitive implementation while being able to review and explain the generated code

## Task Roadmap

1. Task 01: React Basics + EquipmentCard ✅ 완료
2. Task 02: TypeScript + Props + EquipmentCard 타입화 ✅ 완료

3. Task 03: Dashboard UI + CSS ✅ 완료
4. Task 04: Three.js basics + React Three Fiber ✅ 완료 — 사용자 보고 기준
5. Task 05: GLB/GLTF + OrbitControls ✅ 완료 — 사용자 보고 기준
6. Task 06: 3D object selection + equipment panel ✅ 완료 — 사용자 보고 기준
7. Task 07: Spring Boot — 다음 작업
8. Task 08: PostgreSQL + JPA
9. Task 09: CRUD API
10. Task 10: React ↔ Spring Boot
11. Task 11: Sensor Simulator
12. Task 12: WebSocket
13. Task 13: Alerts
14. Task 14: Docker
15. Task 15: Nginx
16. Task 16: AWS EC2 Deployment
17. Task 17: GitHub Actions CI
18. Task 18: CD
19. Task 19: Bug Fix + Security
20. Task 20: Portfolio README + Documentation
21. Task 21: Final Interview Rehearsal


## 의사결정 갱신 — 2026-10-31 문서 반영

- 명칭을 Task 01~21로 통일한다. Task는 작업 단위이며 하루 단위 일정이 아니다.
- 사용자 결정에 따라 마감을 2026-11-08에서 2026-11-15로 연장한다. 배포 및 CI/CD 완료 목표는 유지한다.
- 기존 21개 작업의 범위·순서, 기술 스택, 아키텍처 및 React / TypeScript 학습 정책은 유지한다. 개별 작업 날짜를 새로 배정하지 않는다.
- Task 04 완료는 사용자 보고 기준이며 상세 구현 확인을 의미하지 않는다.

## 진행 사항 갱신 — 2026-11-12

- Task 05 완료 및 GitHub PR `main` 병합을 사용자 보고 기준으로 반영했다.
- 현재 진행 대상은 Task 06으로 변경했다.
- Git 학습: `fetch`는 원격 커밋과 객체를 가져와 원격 추적 참조를 갱신하며, `pull`은 가져온 변경 사항을 현재 브랜치에 통합한다는 차이를 학습했다.
- 마감일 2026-11-15, 기존 21개 Task 순서와 기술 스택, 아키텍처는 변경하지 않았다.
- `LEARNING_GUIDE.md`는 ChatGPT TwinOps 프로젝트 전용 학습 운영 문서이며 GitHub 저장소 관리 대상에서 제외한다.

## 진행 사항 갱신 — 2026-11-14

- Task 06 Equipment Selection 완료를 사용자 보고 기준으로 반영했다.
- Task 06 브랜치를 원격 Push하고 PR 생성 및 `main` Merge까지 마쳤다는 최신 사용자 보고를 반영했다.
- 현재 다음 작업은 Task 07 — Spring Boot이다. Task 07은 아직 시작·완료 확인되지 않았다.
- 사용자 보고와 별도로 저장소, 코드, 빌드, PR 번호를 직접 검증한 것은 아니다.
- 기존 21개 Task의 순서/범위, 기술 스택, 아키텍처, 마감일 2026-11-15는 변경하지 않는다.
