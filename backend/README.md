# DreamSpace Atelier — Backend REST API

Production-ready Node.js / Express backend supporting the DreamSpace architectural & interior atelier full-stack platform.

## 🏛️ System Architecture

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express 4.x
- **Security:** Helmet (secure HTTP headers), CORS with configurable origins
- **Logging:** Morgan HTTP logger
- **Storage:** ACID-compliant, atomic file-backed JSON database engine (`data/database.json`) with auto-seeding
- **Validation:** Strict payload validation for consultation inquiries and newsletter subscriptions

```
backend/
├── server.js                      # Application server entry point & graceful shutdown
├── test-api.js                    # Automated end-to-end API test suite (10 assertions)
├── .env                           # Environment configuration
├── .env.example                   # Template environment configuration
├── package.json                   # Dependencies and npm scripts
│
├── data/
│   └── database.json              # Persistent data store (auto-created on first run)
│
└── src/
    ├── app.js                     # Express app setup, middlewares & router mounting
    │
    ├── config/
    │   └── index.js               # Centralized typed environment settings
    │
    ├── models/
    │   └── db.js                  # Atomic Database engine with CRUD & filter methods
    │
    ├── middleware/
    │   ├── errorHandler.js        # Global error and 404 handlers
    │   └── validator.js           # Payload validators (consultation & newsletter)
    │
    ├── controllers/
    │   ├── consultationController.js # Handles residential commissions & status tracking
    │   ├── designController.js       # Handles architectural typologies & CAD blueprints
    │   ├── interiorController.js     # Handles living chambers & material swatches
    │   ├── exteriorController.js     # Handles facade envelopes & landscape elements
    │   ├── galleryController.js      # Handles project monographs & photo archives
    │   ├── studioController.js       # Handles Elena Vance bio, stats & philosophy
    │   └── newsletterController.js   # Handles architectural monograph subscriptions
    │
    └── routes/
        ├── index.js                  # Master API gateway & health check (/api)
        ├── consultationRoutes.js     # /api/consultations
        ├── designRoutes.js           # /api/designs
        ├── interiorRoutes.js         # /api/interiors
        ├── exteriorRoutes.js         # /api/exteriors
        ├── galleryRoutes.js          # /api/gallery
        ├── studioRoutes.js           # /api/studio
        └── newsletterRoutes.js       # /api/newsletter
```

---

## 🚀 Getting Started

### 1. Start the API Server

```bash
cd backend
npm start
```
Or with auto-restart on file change (watch mode):
```bash
npm run dev
```

The server will listen at:
`http://localhost:5000`

---

## 🧪 Run Automated Test Suite

We have provided a comprehensive 10-step verification test suite:

```bash
cd backend
node test-api.js
```

---

## 📡 REST API Endpoints

### 🩺 System & Health
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api` | API directory & endpoint manifest |
| `GET` | `/api/health` | Service uptime and status check |

### 📋 Consultations & Inquiries
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/consultations` | Submit client architectural consultation inquiry |
| `GET` | `/api/consultations` | List all inquiries (optional: `?status=PENDING&typology=villa`) |
| `GET` | `/api/consultations/stats` | Summary statistics of pending/contacted requests |
| `GET` | `/api/consultations/:id` | Retrieve single inquiry details |
| `PATCH` | `/api/consultations/:id/status` | Update inquiry status (`PENDING`, `CONTACTED`, `IN_REVIEW`, `ARCHIVED`) |

#### Example: Submit Consultation Request
`POST /api/consultations`
```json
{
  "fullName": "Elena Rostova",
  "email": "client@luxurydomain.com",
  "phone": "+1 (310) 555-0199",
  "projectTypology": "Custom Ground-Up Residence",
  "budgetRange": "$3M–$5M",
  "timeline": "3–6 Months",
  "vision": "Hillside modernist cantilever residence with reflecting pool."
}
```

### 📐 Architectural Designs & Blueprints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/designs` | Retrieve all typologies (filters: `?category=modern&search=cantilever`) |
| `GET` | `/api/designs/:id` | Retrieve single typology with CAD blueprints and specs |

### 🛋️ Interior Chambers & Materials
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/interiors` | List 5 living chambers with specs and material swatches |
| `GET` | `/api/interiors/:id` | Retrieve single chamber details (`living`, `bedroom`, `kitchen`, etc.) |

### 🌿 Exterior Envelopes & Landscapes
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/exteriors` | List exterior elements (facades, pergolas, xeriscapes, pivot portals) |
| `GET` | `/api/exteriors/:id` | Retrieve single exterior specification |

### 🖼️ Inspiration Gallery
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/gallery` | Retrieve curated photographic monographs (`?category=exterior&tag=night`) |
| `GET` | `/api/gallery/:id` | Retrieve single gallery monograph |

### 🏛️ Studio & Practice
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/studio` | Studio credentials, Elena Vance bio, materiality pillars, and milestones |

### 📬 Newsletter
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/newsletter/subscribe` | Subscribe email to architectural monographs |
| `GET` | `/api/newsletter` | List all newsletter subscribers |

