# Nyansapo API routes

Swagger documentation for the implemented Nyansapo API endpoints.

Published URL: https://kwasi633.github.io/api-routes/

## Deployment

In repository Settings → Pages, choose GitHub Actions as the source. The Pages workflow publishes on pushes to main and supports manual runs.

## Endpoints

- POST /auth/signup
- POST /auth/login
- POST /auth/refresh
- POST /auth/forgot-password
- POST /auth/reset-password
- GET /health
- GET /ready
- GET /metrics

Update openapi.yml when endpoints change. The backend is hosted separately. Try it out is disabled until a public HTTPS API URL and appropriate CORS are configured.

Swagger UI assets are pinned and served locally; the specification comes from the private backend repository. This repository contains no backend implementation or environment files.

Live API base URL: https://nyansapo-api.onrender.com
