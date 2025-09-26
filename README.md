# INSY7314-ICE-TASKS
ACADEMIC TASKS
# 🗳️ PulseVote Backend – Academic Submission

This repository contains the backend API for PulseVote, a secure, modular Node.js application designed for academic review. It includes authentication, protected routes, CSP enforcement, and containerization using Docker. All tasks were completed with reproducibility, security, and academic clarity in mind.

---

## ✅ Task Overview

| Task | Description |
|------|-------------|
| 1 | Initial backend setup with Express, modular routes, and MongoDB |
| 2 | Authentication system with JWT and protected routes |
| 3 | CSP enforcement using Helmet with report-only mode |
| 4 | CORS configuration with dynamic origin validation |
| 5 | Health check and test endpoints for diagnostics |
| 6 | Curl-based endpoint testing for register, login, and protected routes |
| 7 | HTTPS fallback logic and environment-based server configuration |
| 8 | Dockerization with `Dockerfile`, `.dockerignore`, and `docker-compose.yml` |
| 9 | CSP violation triggering and evidence capture |
| 10 | Final validation of backend via direct execution and curl tests |

---

## 🔧 Key Features

- Modular route structure: `/auth`, `/polls`, `/organisations`
- JWT-based authentication and middleware protection
- Helmet-based security headers and CSP enforcement
- Dynamic CORS origin handling
- Docker-ready configuration with multi-stage build
- Health check (`/health`) and test endpoint (`/test`)
- Academic evidence captured via curl and browser console

---

## 🧪 Endpoint Validation

All endpoints were tested using `curl` and Postman:

- `POST /api/auth/register-user` – Registers a user
- `POST /api/auth/login` – Returns JWT token
- `GET /api/protected` – Requires valid token
- `GET /health` – Confirms server uptime
- `GET /test` – Returns static test message

---

## 🐳 Dockerization Notes

- `Dockerfile` includes multi-stage build and health check
- `.dockerignore` excludes sensitive and irrelevant files
- `docker-compose.yml` defines service and port mapping
- `.gitignore` updated to exclude SSL and `.env` files

> ⚠️ Docker Compose validation was attempted but skipped due to local environment constraints. Backend was successfully validated using direct execution (`npm run dev`).

---

## 📚 Academic Notes

- CSP violations were triggered via frontend injection and captured in browser console
- All curl tests were executed and documented
- Code pushed to GitHub with clear commit history
- README reflects full backend journey across 10 tasks

---

## 📦 Tech Stack

- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- Helmet + CSP
- Docker + Compose (optional)
- Curl + Postman for testing

---

## 🧠 Author Notes

This backend was built with academic rigor, reproducibility, and security in mind. All features were tested manually, and fallback strategies were applied when containerization failed. Documentation and commit history reflect a methodical, resilient development process.

