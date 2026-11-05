# Task 1: Automate Code Deployment Using CI/CD Pipeline

## 1. Project Overview

This project demonstrates how to automate the testing, Docker image building, and deployment process of a Node.js application using GitHub Actions.

Whenever code is pushed to the `main` branch, GitHub Actions automatically runs the CI/CD pipeline.

## 2. Technologies Used

- Git and GitHub
- GitHub Actions
- Node.js
- npm
- Docker
- Docker Hub
- YAML

## 3. Project Structure

```text
Task1/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── app.js
├── app.test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## 4. Application Details

The application is a simple Node.js HTTP server that displays a welcome message.

To run the application locally:

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## 5. Run Tests

The application uses Node.js built-in test runner.

Execute:

```bash
npm test
```

The test verifies that the application returns HTTP status code 200 and the expected welcome message.

## 6. Docker

A Dockerfile is included to package the Node.js application into a Docker image.

The Docker image is built automatically using GitHub Actions.

## 7. CI/CD Pipeline Workflow

The GitHub Actions workflow is configured in:

`.github/workflows/main.yml`

The pipeline is triggered whenever code is pushed to the `main` branch.

### Pipeline Steps

1. Checkout: Downloads the repository source code.
2. Setup Node.js: Configures Node.js version 22.
3. Install Dependencies: Runs `npm ci`.
4. Run Tests: Executes `npm test`.
5. Setup Docker Buildx: Prepares the Docker build environment.
6. Docker Hub Login: Authenticates using GitHub repository secrets.
7. Build and Push: Builds the Docker image and pushes it to Docker Hub.

## 8. GitHub Secrets

The following repository secrets are configured securely:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

Sensitive credentials are not stored directly in the workflow file.

## 9. Docker Image Tags

The pipeline publishes two tags:

- `latest`
- GitHub commit SHA

This allows the application image to be identified by its latest version or a specific commit.

## 10. Pipeline Result

The GitHub Actions workflow completed successfully.

- Node.js tests: Passed
- Docker image build: Successful
- Docker Hub authentication: Successful
- Docker image push: Successful

## 11. Conclusion

This project demonstrates an automated CI/CD pipeline using GitHub Actions, Node.js, Docker, and Docker Hub.

The workflow reduces manual effort by automating application testing, container image creation, and image publishing whenever changes are pushed to the main branch.