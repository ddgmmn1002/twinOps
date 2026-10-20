# TwinOps Project Context

## Goal

3D Digital Twin based Smart Factory Monitoring Service

## Deadline

2026-11-08
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
- Overall goal, deadline, stack, architecture, scope, and day roadmap are managed from the TwinOps project headquarters chat.
- Day-specific chats are for execution, learning, implementation, and code review.
- A Day chat should not silently change the overall project plan.
- If a Day chat proposes a project-level change, confirm it in the project headquarters chat first.

## Current Progress

### Day 1 — React Basics + EquipmentCard ✅

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

### Day 2 — TypeScript + Props + EquipmentCard 타입화 ✅

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

## Current Day

Day 3 — Dashboard UI + CSS

### Day 3 Goal

Turn the current React/TypeScript foundation into the first portfolio-quality Smart Factory Monitoring Dashboard.

### Day 3 Completion Criteria

- Build the Dashboard layout
- Create Equipment Card UI
- Show total equipment count
- Show Normal / Warning / Error status
- Show temperature information
- Apply Flexbox / Grid in the actual UI
- Practice component separation
- Reinforce React concepts through the actual Dashboard implementation
- Browser shows a recognizable Smart Factory Monitoring Dashboard

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

## Next Roadmap

1. Day 3: Dashboard UI + CSS
2. Day 4: Three.js basics + React Three Fiber
3. Day 5: GLB/GLTF + OrbitControls
4. Day 6: 3D object selection + equipment panel
5. Day 7: Spring Boot
6. Day 8: PostgreSQL + JPA
7. Day 9: CRUD API
8. Day 10: React ↔ Spring Boot
9. Day 11: Sensor Simulator
10. Day 12: WebSocket
11. Day 13: Alerts
12. Day 14: Docker
13. Day 15: Nginx
14. Day 16: AWS EC2 Deployment
15. Day 17: GitHub Actions CI
16. Day 18: CD
17. Day 19: Bug Fix + Security
18. Day 20: Portfolio README + Documentation
19. Day 21: Final Interview Rehearsal
