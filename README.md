# Job Application Tracker

This single page app was built to manage the job applications process, using a Spring Boot backend and Vite + React frontend.

The UI has a paginated dashboard of job applications (sorted by descending App IDs), inline-edit applications' statuses, and one-click to open the job posting or login links (for the recruiting SaaS, ie., iCIMS, Ashby, etc.) in a new tab. There is also an Add Entry for new job applications.

The initial page has a very small list of Dad jokes, some of which are related to persistence, interviewing, or tech. While not central to the functionality of this app, it serves as a way to add some humor and humanity.

```
/
├── backend/    Spring Boot (Java) API
├── frontend/   Vite + React (TypeScript) client
└── run.sh      Builds and runs the whole app as a single jar
```

### Requirements
- Java 21+
- Node.js -- if running frontend server directly; not required if running as packaged app since Maven build downloads its local copy of Node.

_Maven not required - this repo includes the Maven wrapper (`./mvnw`), which downloads the correct Maven version automatically._

### Database
This app is initially configured to use an H2 file, which will be created in a /data directory within the repo - you can change this in the `applications-*.properties` > `spring.datasource.url`. 

### How to run the package locally
#### Option 1: Running it as a packaged app:
This builds the React frontend, embeds it into Spring Boot jar, and runs everything on a single process on a single port. No Node, CORS, or proxy config required.

- Using Git Bash

`./run.sh`

- From PowerShell

`& "C:\Program Files\Git\bin\bash.exe" -c "./run.sh"`

Manually:

```
git clone git@github.com:awongstory/job_application_tracker.git
cd job-application-tracker/backend
./mvnw clean package
java -jar target/job_application_tracker-0.0.1-SNAPSHOT.jar
```

Once running, open http://localhost:9100 where you'd see the Home page.

#### Option 2: Development mode
```
# terminal 1
cd backend
mvn spring-boot:run

# terminal 2
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Once running, open http://localhost:5173 where you'd see the Home page.

### Future Improvements
- Refactor `Add-New` component to use a base `AppForm` component.
- Add an `Edit-Entry` component that builds on `AppForm`.
- More Dad jokes.