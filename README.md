# Job Application Tracker

This web app was built as a fun, light Excel-alternative to managing the job applications process, using a Spring Boot backend and Vite + React frontend.

The UI has a paginated table to look at the most recent job applications, update applications' statuses, and one-click to open the job posting or login links (for the recruiting SaaS, ie., iCIMS, Ashby, etc.) in a new tab. There is also an Add Entry for new job applications.

```
/
├── backend/    Spring Boot (Java) API
├── frontend/   Vite + React (TypeScript) client
└── run.sh      Builds and runs the whole app as a single jar
```

### Requirements
- Java 21+
- Node.js -- if running frontend server directly; not required if running as packaged app since Maven build downloads its local copy of Node.

### How to run the package locally

