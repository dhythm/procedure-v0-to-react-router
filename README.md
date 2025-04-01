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