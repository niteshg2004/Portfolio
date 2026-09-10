# Portfolio

Nitesh Ghimire's portfolio, available as a Spring Boot application and a static site for Vercel.

## Deploy on Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, select **Add New Project**, import the repository, and keep the repository root as the project root.
3. Leave the framework preset as **Other** and deploy.

Vercel serves the files in `public/` and does not need Java or Maven. The Spring Boot application and Docker configuration remain available for deployments that support a Java server.

### Local static preview

```bash
npx serve public
```
