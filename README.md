
# LearnIT

A curated directory of the best free IT learning resources on YouTube, organized by topic and built for developers who are tired of tutorial hell.


---

## The Problem

Most beginners waste hours searching for where to start. They open YouTube, get overwhelmed by hundreds of results, jump between channels, and never actually make progress. This is called tutorial hell — and it kills momentum before it starts.

## The Solution

LearnIT gives you one clear starting point per topic. Every resource is hand-picked, vetted, and linked directly to the best free content available. No accounts, no paywalls, no distractions — just open a category and start learning.

---

## Features

- 12 technology categories: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Java, Python, C, Git & GitHub, React, Next.js, Docker, Kubernetes, Spring Boot, and Algorithmics
- Curated YouTube videos and full courses for each category
- Real-time search across all resources
- Clean, fast, fully responsive design
- No login required — open and use instantly

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework and routing |
| TypeScript | Type safety across the entire codebase |
| Tailwind CSS | Styling and responsive layout |
| Vercel | Deployment and hosting |

---



### Prerequisites

- Node.js 18 or higher
- npm



## Project Structure
src/

├── app/

│   ├── layout.tsx          # Root layout with sidebar and header

│   ├── page.tsx            # Homepage showing all resources

│   └── [category]/

│       └── page.tsx        # Dynamic category pages

├── components/

│   ├── Sidebar.tsx         # Fixed navigation sidebar

│   ├── Header.tsx          # Top bar with search

│   └── ResourceCard.tsx    # Individual resource card

├── data/

│   └── resources.ts        # All resource data

└── types/

└── index.ts            # TypeScript type definitions

## Author

**Ahmed Melliti** — Software Engineer

Building tools that make learning easier and more accessible.
