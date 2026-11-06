# 🏛️ DreamSpace Full-Stack Application — Run Guide

This guide walks you through running both the **Backend** (Node.js/Express) and **Frontend** (React 18/Vite) concurrently.

---

## ⚡ Option 1: One-Click Run (Windows Double-Click)

The simplest way on Windows:
1. Open this project directory in Windows File Explorer:
   `c:\Users\DELL\OneDrive\Desktop\hari om 001_files`
2. **Double-click `start.bat`**.
3. A terminal window will open, launching both the backend (Port 5000) and frontend (Port 3000) together.
4. Open your browser and navigate to:
   **[http://localhost:3000](http://localhost:3000)**

---

## 🚀 Option 2: Single Terminal Command (Root)

From the project root folder (`hari om 001_files`):

```powershell
node run-all.js
```
*Or via npm:*
```powershell
cmd.exe /c npm start
```

This single command uses our unified runner to:
- Launch the backend on **`http://localhost:5000`** with cyan `[BACKEND]` logs.
- Launch the frontend on **`http://localhost:3000`** with green `[FRONTEND]` logs.
- Automatically proxy API calls (`/api/*`) between the frontend and backend.
- Cleanly shut down both processes when you press `Ctrl + C`.

---

## 🖥️ Option 3: Two Separate Terminals (Developer Mode)

If you prefer dedicated terminal windows for backend and frontend logs:

### Terminal 1: Backend
```powershell
cd backend
cmd.exe /c npm start
```
> **Backend Base URL:** `http://localhost:5000/api`  
> **Health Check:** `http://localhost:5000/api/health`

### Terminal 2: Frontend
```powershell
cd frontend
cmd.exe /c npm run dev
```
> **Frontend App URL:** `http://localhost:3000`

---

## 🌐 Endpoints & Ports Reference

| Service | Port | Local URL | Description |
|---|---|---|---|
| **Frontend UI** | `3000` | [http://localhost:3000](http://localhost:3000) | React 18 application with all 7 pages & blueprint modals |
| **Backend API** | `5000` | [http://localhost:5000/api](http://localhost:5000/api) | Express REST API gateway |
| **API Health** | `5000` | [http://localhost:5000/api/health](http://localhost:5000/api/health) | Uptime & health check status |
| **Consultations**| `5000` | [http://localhost:5000/api/consultations](http://localhost:5000/api/consultations) | Live client commission inquiries |
| **Designs** | `5000` | [http://localhost:5000/api/designs](http://localhost:5000/api/designs) | Architectural typologies & CAD blueprints |

---

## 🧪 Testing Backend Health

To verify all 10 REST API endpoints without running the UI:
```powershell
cd backend
node test-api.js
```

---

## 🛠️ Troubleshooting

- **Port 5000 or 3000 Already in Use:**
  Run the following in PowerShell to check or clear the ports:
  ```powershell
  Get-Process -Id (Get-NetTCPConnection -LocalPort 5000, 3000 -ErrorAction SilentlyContinue).OwningProcess | Stop-Process -Force
  ```
- **PowerShell Execution Policy Warning:**
  Always prepend `cmd.exe /c` when running `npm` commands on Windows (e.g. `cmd.exe /c npm start`).
- **Data Persistence:**
  All consultation requests submitted in the frontend are stored in `backend/data/database.json`.

