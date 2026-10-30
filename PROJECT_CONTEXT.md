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

진행 현황 갱신: 2026-10-31 (Asia/Seoul)

- Task 01~03: 완료 — 사용자 재확인 기준.
- Task 04: 완료 — 사용자 완료 보고 기준.
- Task 01~04 완료. 다음 작업: Task 05 — GLB/GLTF + OrbitControls. Task 05 시작·완료 여부는 미확인.

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

Task 05 — GLB/GLTF + OrbitControls (다음 작업)

Status basis:
- 사용자가 “TASK4까지 완료”했다고 보고하여 Task 01~04를 완료로 표시한다.
- Task 04는 사용자 완료 보고만 확인되었다. 실제 코드, 실행 화면, 세부 구현, 설치 버전, 빌드·테스트 결과 및 Git 반영은 확인하지 않았다.
- Task 05는 다음 작업이며 시작하거나 완료한 것으로 기록하지 않는다.

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
5. Task 05: GLB/GLTF + OrbitControls — 다음 작업
6. Task 06: 3D object selection + equipment panel
7. Task 07: Spring Boot
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
