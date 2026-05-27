# 📂 LeetLog 

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?logo=streamlit&logoColor=white)
![PyGitHub](https://img.shields.io/badge/PyGitHub-181717?logo=github&logoColor=white&labelColor=181717&color=24292e)

A dynamic, automated web application that bridges my GitHub Data Structures and Algorithms (DSA) repository with a clean, readable frontend interface. 

Instead of manually navigating through nested GitHub folders to review code, this app automatically fetches my latest solutions via the GitHub REST API, maps them to their respective problem statements, and renders them in an interactive web portfolio.

## ✨ Features

* **Automated Syncing:** Uses a custom Python script powered by `PyGitHub` to fetch the latest folder structures and code files directly from the `DevXDividends/D.S.A` repository.
* **Contextual Problem Statements:** Maps raw `.cpp`  files to full problem descriptions (with examples) using a local JSON database, providing immediate context for the code.
* **Interactive UI:** Built with **Streamlit** for a responsive, sidebar-driven navigation system that categorizes problems by topics (e.g., Arrays, Binary Search, Linked Lists).
* **Syntax Highlighting:** Automatically detects file extensions and applies beautiful, readable syntax highlighting to the code blocks.
* **Secure Authentication:** Utilizes GitHub Fine-Grained Personal Access Tokens stored securely in `.env` for read-only API requests.

## 🛠️ Architecture & Tech Stack

1. **Backend / Data Fetching:** `Python`, `PyGitHub`, `python-dotenv`
2. **Data Storage:** `JSON` (Hierarchical mapping of folders $\rightarrow$ files $\rightarrow$ raw code string, plus a secondary JSON for problem descriptions).
3. **Frontend:** `Streamlit`

