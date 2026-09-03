# Job Application Tracker

This web app was built as an Excel-alternative to managing the job applications process, using a Spring Boot backend and Vite + React frontend.

The UI has a paginated dashboard of job applications (sorted by descending App IDs), inline-edit applications' statuses, and one-click to open the job posting or login links (for the recruiting SaaS, ie., iCIMS, Ashby, etc.) in a new tab. There is also an Add Entry for new job applications.

The initial page has a very small list of Dad jokes related to persistence, interviewing, or tech. While not central to the functionality of this app, it serves as a way to add some humor.

```
/
├── backend/    Spring Boot (Java) API
├── frontend/   Vite + React (TypeScript) client
└── run.sh      Builds and runs the whole app as a single jar
```

### Requirements
- Java 21+
- Node.js -- if running frontend server directly; not required if running as packaged app since Maven build downloads its local copy of Node.

* Maven not required - this repo includes the Maven wrapper (`./mvnw`), which downloads the correct Maven version automatically.

### Database
This app uses an H2 file 

### How to run the package locally
Option 1: Running it as a packaged app:
This builds the React frontend, embeds it into Spring Boot jar, and runs everything on a single process on a single port. No Node, CORS, or proxy config required.

`./run.sh`

Manually:

```
cd backend
./mvnw clean package
java -jar target/*.jar
```

Once running, open http://localhost:9100


### Future updates:
- Refactor Add Entry to abstract out ApplicationForm & add Edit Entry action.
- Add more dad jokes.