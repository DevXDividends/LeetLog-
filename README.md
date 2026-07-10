<div align="center">

<img src="https://img.shields.io/badge/%F0%9F%A7%A9-LeetLog-6C63FF?style=for-the-badge&labelColor=1a1a2e" height="60" alt="LeetLog"/>

### A lightweight, LeetCode-inspired coding platform powered by a curated DSA problem repository

<p>
  <i>Browse problems · Write code · Run it remotely · Get instant verdicts</i>
</p>

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=282c34" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white&labelColor=1a1a2e" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white&labelColor=1a1a2e" alt="FastAPI"/>
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white&labelColor=1a1a2e" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white&labelColor=1a1a2e" alt="Python"/>
  <img src="https://img.shields.io/badge/C%2B%2B-Execution%20Engine-00599C?style=flat-square&logo=c%2B%2B&logoColor=white&labelColor=1a1a2e" alt="C++"/>
</p>

<p>
  <img src="https://img.shields.io/badge/status-active%20development-brightgreen?style=flat-square" alt="status"/>
  <img src="https://img.shields.io/badge/PRs-welcome-ff69b4?style=flat-square" alt="PRs welcome"/>
  <img src="https://img.shields.io/badge/built%20with-%E2%9D%A4-red?style=flat-square" alt="built with love"/>
</p>

<p>
  <a href="#-core-features"><b>Features</b></a> ·
  <a href="#%EF%B8%8F-architecture"><b>Architecture</b></a> ·
  <a href="#%EF%B8%8F-tech-stack"><b>Tech Stack</b></a> ·
  <a href="#%EF%B8%8F-installation"><b>Installation</b></a> ·
  <a href="#-api-endpoints"><b>API</b></a> ·
  <a href="#%EF%B8%8F-future-improvements"><b>Roadmap</b></a>
</p>

<br/>

</div>

<div align="center">

|  |  |  |
|:---:|:---:|:---:|
| 🧩 **13+ Topics** | ⚙️ **Live Code Execution** | 🧑‍⚖️ **Automated Judge** |
| 🗄️ **PostgreSQL-backed** | 🖋️ **Monaco Editor** | 🔄 **Auto-sync Dataset Pipeline** |

</div>

<br/>

## 📖 Overview

**LeetLog** is a full-stack, self-hosted coding practice platform inspired by LeetCode. Rather than depending on a third-party problem source, LeetLog is powered by an independently curated **Data Structures & Algorithms repository** — a structured collection of algorithmic problems, descriptions, editorial solutions, starter code templates, and test cases.

LeetLog lets users **browse problems by topic, read detailed descriptions, write solutions in an in-browser editor, execute code against real test cases**, and receive instant verdicts — all through a clean, responsive UI backed by a high-performance API and a relational database.

> 🧱 Built to be **simple to self-host, easy to extend, and straightforward to contribute to** — a solid foundation for anyone who wants to run their own coding-practice platform or build on top of one.

<br/>

## ✨ Core Features

<table>
<tr>
<td width="50%" valign="top">

### 📚 Problem Archive

Browse a growing archive of algorithmic problems, organized by topic:

<p>
<img src="https://img.shields.io/badge/-Arrays-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Binary%20Search-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Trees-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Graphs-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Linked%20Lists-6C63FF?style=flat-square"/>
<br/>
<img src="https://img.shields.io/badge/-Recursion-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Dynamic%20Programming-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Sliding%20Window-6C63FF?style=flat-square"/>
<br/>
<img src="https://img.shields.io/badge/-Stack-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Queue-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Strings-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-Two%20Pointers-6C63FF?style=flat-square"/>
<img src="https://img.shields.io/badge/-and%20more...-393E46?style=flat-square"/>
</p>

Each problem entry includes:

- [x] Title & Difficulty (Easy / Medium / Hard)
- [x] Source & Description
- [x] Constraints & Worked Examples
- [x] Editorial Solution
- [x] Starter Code
- [x] Test Cases

</td>
<td width="50%" valign="top">

### 🧱 Starter Code Engine

Every problem ships with a language-specific starter template, similar to the LeetCode authoring experience:

- 🧩 Function signature / template
- 🏗️ Boilerplate scaffolding
- 📥 Input parsing wrapper
- ⚡ Ready-to-run environment out of the box

### 🧑‍⚖️ Automated Judge

The judge layer ties the execution engine to problem data:

- Executes code against **public and hidden** test cases
- Compares actual vs. expected output
- Generates a verdict per test case and overall
- Reports execution status back in real time

</td>
</tr>
</table>

### ⚙️ Remote Code Execution (RCE) Engine

LeetLog includes a built-in **Remote Code Execution engine** that lets users write, compile, and run code directly against a problem's test cases.

<div align="center">

| Stage | Capability |
|:---:|---|
| 🛠️ | **Compilation** — compiles submitted source code |
| ▶️ | **Execution** — runs the compiled program |
| ⌨️ | **Standard Input** — feeds test-case input to the program |
| 📤 | **Standard Output** — captures program output |
| 🚨 | **Error Handling** — surfaces compile-time and runtime errors |
| 💥 | **Runtime Error Detection** — flags crashes / non-zero exits |
| ❌ | **Wrong Answer Detection** — diffs output against expected results |
| ✅ | **Accepted Verdicts** — confirms a correct, passing solution |

</div>

> 🐳 **Built for extensibility** — the RCE engine is designed so execution can later be containerized with **Docker**, enabling fully sandboxed, isolated code execution per submission.

### 🗄️ PostgreSQL-Backed Data Layer

All problem data lives in **PostgreSQL**, including problems & metadata, per-language starter code, and public/hidden test cases. The system uses **UPSERT** operations to sync the local curated DSA repository into the database, so the dataset can be updated or extended without manual migrations.

<br/>

## 🏗️ Architecture

<div align="center">

```
                 ┌─────────────────────────┐
                 │   React + Tailwind CSS   │
                 │   (Client / Editor UI)   │
                 └────────────┬─────────────┘
                              │  REST · JSON
                              ▼
                 ┌─────────────────────────┐
                 │      FastAPI Backend     │
                 │    (REST API Service)    │
                 └────────────┬─────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │    PostgreSQL Database   │
                 └────────────┬─────────────┘
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                 ▼
      Problem Archive   Starter Code       Test Cases
             │                │                 │
             └────────────────┼─────────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │  Remote Code Execution   │
                 │          Engine          │
                 └────────────┬─────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │        Judge Layer       │
                 └────────────┬─────────────┘
                              ▼
                 ┌─────────────────────────┐
                 │          Verdict         │
                 │    (AC · WA · RE · CE)   │
                 └─────────────────────────┘
```

</div>

<br/>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:---|:---|
| 🎨 **Frontend** | React · Tailwind CSS · Monaco Editor |
| 🚀 **Backend** | FastAPI (Python) |
| 🗄️ **Database** | PostgreSQL · `psycopg` |
| ⚙️ **Code Execution** | C++ compiler toolchain, extensible to other languages |
| 🔗 **Data Interchange** | JSON |
| 🧰 **Tooling** | Git · GitHub |

</div>

<br/>

## 🖥️ Frontend

Built with **React** and **Tailwind CSS** for a fast, responsive, utility-first UI.

- 📱 Fully responsive layout
- 🧭 Sidebar navigation across topics and problems
- 🔍 Problem explorer with filtering by topic/difficulty
- 📝 **Monaco Code Editor** integration (the engine that powers VS Code) with syntax highlighting
- ⚡ Dynamic, on-demand problem loading from the API

## 🚀 Backend

Built with **FastAPI** for a fast, typed, and well-documented REST API.

- REST API with auto-generated OpenAPI docs
- High-performance async request handling
- PostgreSQL integration via `psycopg`
- JSON-based endpoints for problems, starter code, and test cases
- Extensible route structure — ready for future **submission** and **auth** APIs

## 🔄 Dataset Generation Pipeline

LeetLog includes an automated pipeline that transforms the curated DSA repository into structured, queryable data.

<div align="center">

`Problems` → `Editorial Solutions` → `Starter Code` → `Test Cases` → **PostgreSQL**

</div>

Powered by Python scripts and PostgreSQL **UPSERT** queries, so the database always stays in sync with the source repository.

<br/>

## 📁 Project Structure

```
leetlog/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI entrypoint
│   │   ├── routers/             # API route definitions
│   │   ├── models/              # DB models / schemas
│   │   ├── db/                  # DB connection & queries
│   │   └── rce/                 # Remote Code Execution engine
│   ├── scripts/
│   │   └── sync_dataset.py      # Repository → DB UPSERT pipeline
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── editor/               # Monaco editor integration
│   │   └── App.jsx
│   ├── package.json
│   └── tailwind.config.js
│
├── data/
│   └── dsa-repository/           # Curated problems, solutions, test cases
│
├── docs/
│   └── screenshots/
│
└── README.md
```

<br/>

## 🗺️ Future Improvements

<table>
<tr>
<td width="50%" valign="top">

- [ ] 🌐 Multi-language support (Python, Java, JavaScript, Go...)
- [ ] 🐳 Docker-based sandboxed execution
- [ ] 🔐 User authentication & profiles
- [ ] 🕓 Submission history
- [ ] 🏆 Leaderboards
- [ ] 🎨 Code editor themes

</td>
<td width="50%" valign="top">

- [ ] 📊 Runtime & memory analytics
- [ ] 🏁 Contest mode
- [ ] 🤖 AI-powered hints
- [ ] 🏢 Company-wise problem filtering
- [ ] 📆 Daily challenge
- [ ] 💬 Discussion forum

</td>
</tr>
</table>

<br/>

## 📸 Screenshots

<details>
<summary><b>🏠 Problem Archive</b></summary>
<br>

*Screenshot coming soon*

</details>

<details>
<summary><b>📝 Problem Detail + Editor</b></summary>
<br>

*Screenshot coming soon*

</details>

<details>
<summary><b>✅ Submission Verdict</b></summary>
<br>

*Screenshot coming soon*

</details>

<br/>

## ⚙️ Installation

### Prerequisites

<p>
<img src="https://img.shields.io/badge/Node.js-%E2%89%A518-339933?style=flat-square&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Python-%E2%89%A53.10-3776AB?style=flat-square&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-%E2%89%A514-336791?style=flat-square&logo=postgresql&logoColor=white"/>
</p>

<details open>
<summary><b>1️⃣ PostgreSQL Setup</b></summary>

```bash
# Create the database
createdb leetlog

# (Optional) create a dedicated user
psql -c "CREATE USER leetlog_user WITH PASSWORD 'yourpassword';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE leetlog TO leetlog_user;"
```

</details>

<details open>
<summary><b>2️⃣ Backend Setup</b></summary>

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# edit .env with your PostgreSQL credentials

# Sync the curated dataset into the database
python scripts/sync_dataset.py

# Run the API server
uvicorn app.main:app --reload
```

📍 The API will be available at `http://localhost:8000` (interactive docs at `/docs`).

</details>

<details open>
<summary><b>3️⃣ Frontend Setup</b></summary>

```bash
cd frontend

# Install dependencies
npm install

# Configure the API base URL
cp .env.example .env

# Start the dev server
npm run dev
```

📍 The app will be available at `http://localhost:5173`.

</details>

<br/>

## 📡 API Endpoints

<div align="center">

| Method | Endpoint | Description |
|:---:|:---|:---|
| `GET` | `/topics` | List all available problem topics |
| `GET` | `/topics/{topic}` | List all problems under a given topic |
| `GET` | `/topics/{topic}/problems/{problem}` | Get full problem details (description, starter code, examples) |
| `POST` | `/execute` | Submit code for remote execution against test cases |
| `GET` | `/health` | Service health check |

</div>

> 📘 Full interactive API documentation is available via FastAPI's auto-generated Swagger UI at `/docs` once the backend is running.

<br/>

## 🤝 Contributing

Contributions are welcome! Whether it's adding new problems to the repository, improving the execution engine, or polishing the UI — feel free to open an issue or submit a pull request.

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "Add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request 🎉
```

<br/>

<div align="center">

---

**Made with ❤️ for people who love solving problems.**

<sub>⭐ If you find LeetLog useful, consider starring the repo!</sub>

</div>