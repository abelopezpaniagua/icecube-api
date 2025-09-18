# 🧠 Smart Task Collaboration Platform – API

This is the backend API for the **Smart Task Collaboration Platform** – a web-based collaboration tool where users can manage workspaces, boards, and tasks, with support for real-time communication, notifications, and AI-powered task assistance.

This project follows the **SOFEA architecture**, with the backend fully decoupled from the frontend.

---

## 🚀 Features (MVP)

- ✅ User registration & login (JWT authentication)
- ✅ Workspace & board management
- ✅ Task CRUD with assignees
- ✅ In-app/email-style notifications
- ✅ Role-based access control
- 🔜 Real-time updates and chat
- 🔜 AI assistant integration (OpenAI, etc.)

---

## 🛠️ Tech Stack

- **Language**: C# / Node.js / Python / etc. (Choose accordingly)
- **Framework**: ASP.NET Core / Express.js / Django / Laravel / etc.
- **Database**: PostgreSQL / MySQL / MongoDB
- **Authentication**: JWT (Access & Refresh Tokens)
- **Caching**: Redis (optional)
- **Real-time**: WebSockets / SignalR (planned)
- **Notifications**: Email (SMTP), In-app
- **AI Integration**: OpenAI API (optional)
- **Containerized**: Docker, Docker Compose

---

## 📁 Project Structure (Sample)

```
/src
  /Controllers
  /Services
  /Models
  /Repositories
  /Middlewares
  /DTOs
/tests
  /Integration
  /Unit
.env
Dockerfile
docker-compose.yml
```

---

## 🧪 Getting Started (Development)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/smart-task-api.git
cd smart-task-api
```

### 2. Set up environment

Create a `.env` file or use `appsettings.Development.json` for .NET:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASS=your_pass
DB_NAME=smart_task
JWT_SECRET=your_jwt_secret
```

### 3. Run with Docker (Recommended)

```bash
docker-compose up --build
```

Or run manually if you're not using containers.

---

## 📚 API Documentation

You can access the auto-generated Swagger/OpenAPI docs at:

```
http://localhost:5000/api/docs
```

Includes:

- Auth (Register, Login, Refresh)
- Workspace CRUD
- Board CRUD
- Task CRUD
- Notifications

---

## 🧑‍💻 Development Scripts

| Action         | Command                      |
| -------------- | ---------------------------- |
| Run Dev Server | `dotnet run` / `npm run dev` |
| Run Tests      | `dotnet test` / `npm test`   |
| Lint           | `npm run lint` (if JS/TS)    |
| DB Migrations  | `dotnet ef migrations`       |

---

## 🧩 Future Enhancements

- 🔁 Real-time task updates & chat
- 🤖 AI Assistant integration (summarize tasks, suggest names)
- 📧 Email notifications with SMTP queue
- 📊 Activity logs and reports

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feat/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🧠 About This Project

This API was created to practice and showcase:

- Service-Oriented Frontend Architecture (SOFEA)
- Secure authentication patterns
- Modular, scalable backend design
- Integration of modern web dev concepts (real-time, AI, caching)

## Project Structure

🛡 NestJS (API)
Structure (Domain-Driven):

```vbnet
src/
├── modules/                ← top-level feature modules
│   ├── users/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── dtos/
│   │   └── entities/
│   ├── auth/         same structure...
│   └── products/
├── common/                ← shared abstractions
│   ├── decorators/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   ├── interfaces/       ← e.g. repositories & service contracts
│   └── pipes/
├── config/                ← environment & app configs
│   └── app.config.ts
├── database/              ← TypeORM/migrations/entities
├── shared/                ← shared modules (e.g. mail, logging)
├── main.ts
└── app.module.ts
```

Reasons & Best Practices:

- Feature folders bundle controllers, services, DTOs, entities, and repos together.
- Common module houses reusable guards, pipes, filters, interceptors, abiding by SOLID and interface-driven design .
- Repository pattern with interfaces and custom implementations keeps code testable and modular .
- DTOs manage validation and data flow, ensuring clean layer separation.
- Modules act like Angular modules—NestJS is architecturally similar.

## 🧱 Database Schema

The Smart Task Collaboration Platform follows a relational database model designed to support:

- Multi-tenant **workspace and board** management
- **Role-based access control** (RBAC)
- **Task assignment, tracking, and activity logging**
- **In-app notification system**

### Entity Overview

- **users** – Registered platform users
- **sessions** - (optional) user auth sessions. **(PENDING)**
- **roles** – Predefined roles such as admin, member, guest
- **user_roles** – User-role mapping with optional scope (workspace/board)
- **workspaces** – Grouping for teams/projects
- **workspace_members** – Membership management per workspace
- **boards** – Kanban-style boards inside a workspace
- **board_members** – Board-specific memberships
- **tasks** – Individual items of work with metadata and assignments
- **task_assignees** – Many-to-many task-user relation
- **task_comments** – Comment threads on tasks
- **task_activities** – Logged actions like status change, reassignment **(PENDING)**
- **notifications** – General notification messages **(PENDING)**
- **user_notifications** – Delivery and read-status tracking **(PENDING)**

> 🧠 _This schema is designed with extensibility in mind for future AI assistance and real-time sync features._

📘 Initial Database Schema Overview

🔐 Authentication & Users

- users -> Stores user credentials and profile info
- sessions -> (Optional) Track active sessions for JWT revocation **(PENDING)**
- roles -> Defines system-wide or workspace-level roles
- user_roles -> Maps users to roles within a workspace or board context

🧩 Workspaces & Boards

- workspaces -> Logical container for boards and members
- workspace_members -> Maps users to a workspace with their role
- boards -> Boards belong to a workspace and hold tasks
- board_members -> Maps users to boards (if board-level permissions needed)

✅ Tasks & Assignment

- tasks -> Core entity for task management
- task_assignees -> Many-to-many relation between tasks and users
- task_comments -> Comments or updates on a task
- task_activities -> Logs task changes (status, priority, etc.) for history **(PENDING)**

🔔 Notifications **(PENDING)**

- notifications -> Stores notification messages
- user_notifications -> Tracks which users received and read each notification

🗃️ Entity-Relationship Summary (Text-Based)

```plaintext
users
- id (PK)
- name
- email (unique)
- password_hash
- created_at
- updated_at

sessions (optional)
- id (PK)
- user_id (FK → users.id)
- refresh_token
- created_at
- expires_at

roles
- id (PK)
- name (e.g., 'admin', 'member')
- scope ('system', 'workspace', 'board')

user_roles
- id (PK)
- user_id (FK → users.id)
- role_id (FK → roles.id)
- workspace_id (nullable, FK → workspaces.id)
- board_id (nullable, FK → boards.id)

workspaces
- id (PK)
- name
- description
- created_by (FK → users.id)
- created_at

workspace_members
- id (PK)
- workspace_id (FK → workspaces.id)
- user_id (FK → users.id)
- joined_at

boards
- id (PK)
- workspace_id (FK → workspaces.id)
- name
- description
- created_by (FK → users.id)
- created_at

board_members (optional for fine-grained board-level perms)
- id (PK)
- board_id (FK → boards.id)
- user_id (FK → users.id)
- joined_at

tasks
- id (PK)
- board_id (FK → boards.id)
- title
- description
- status (e.g., 'todo', 'in_progress', 'done')
- priority (e.g., 'low', 'medium', 'high')
- due_date
- created_by (FK → users.id)
- created_at
- updated_at

task_assignees
- id (PK)
- task_id (FK → tasks.id)
- user_id (FK → users.id)

task_comments
- id (PK)
- task_id (FK → tasks.id)
- user_id (FK → users.id)
- content
- created_at

task_activities
- id (PK)
- task_id (FK → tasks.id)
- user_id (FK → users.id)
- action (e.g., 'status_changed', 'assigned', etc.)
- meta (JSONB)
- created_at

notifications
- id (PK)
- title
- message
- type (e.g., 'task', 'system')
- created_at

user_notifications
- id (PK)
- user_id (FK → users.id)
- notification_id (FK → notifications.id)
- is_read (default: false)
```
