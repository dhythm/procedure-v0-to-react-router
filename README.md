# How to convert Next.js to React Router

## Overview

**v0** is a tool enable to generate frontend code easily.
This feature strongly supports to create a landing page (LP) well.
However, v0 generates Next.js code and it would be complicated for LP.
To simplify the code, it is better to convert to react-router.

## Procedure

1. Uninstall next

```sh
pnpm remove next
```

2. Install react-router v7

```sh
pnpm install react-router
```

3. Rename app directory

```sh
mkdir src
mv app src/pages
```

4. Create entry point

```sh
mv src/pages/layout.tsx src/App.tsx
touch src/main.tsx
```

5. Rename pages

```sh
mv src/pages/pages.tsx src/pages/Home.tsx
mv src/pages/dashboard/pages.tsx src/pages/dashboard/DashboardPage.tsx
```

6. Replace Next's Link with React Router's Link

