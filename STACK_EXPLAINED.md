# Project Stack Explanation

This project is built with Next.js and React, and the UI is styled using MUI (Material UI), not Tailwind CSS.

## What is being used

### Next.js
Next.js is the app framework used to run the project, handle routing, and build the web app.

### React
React is the JavaScript library used to build the interface with components.

### MUI (Material UI)
The components you are seeing such as `Container`, `Grid`, `Chip`, `Typography`, `Stack`, `Box`, `Button`, and `Paper` come from MUI.

These are imported from `@mui/material` and `@mui/icons-material` in the project.

### Tailwind CSS
Tailwind is a CSS utility framework that uses class names like:

```jsx
className="bg-blue-500 text-white p-4"
```

This project does not use Tailwind in the code shown. The styling here is mainly done with MUI's `sx` prop and component props.

## Quick summary

- Next.js = framework
- React = component system
- MUI = UI component library
- Tailwind = CSS utility framework

## Evidence in this project

The dependencies in `package.json` include:

```json
"@mui/material": "^9.4.0",
"@mui/icons-material": "^9.4.0",
"next": "^16.3.5",
"react": "^19.3.0"
```

And the page imports components directly from MUI:

```tsx
import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
```

## Cheat Sheet

### If you see this:

```tsx
import { Button, Container, Typography } from '@mui/material';
```

It means the code is using MUI components.

### If you see this:

```tsx
<div className="flex items-center gap-4 bg-blue-500 p-4">
```

It means the code is using Tailwind utility classes.

### If you see this:

```tsx
import Link from 'next/link';
```

It means the code is using Next.js routing.

### In one line:

- Next.js = framework
- React = library for components
- MUI = component library
- Tailwind = utility-first CSS

## Conclusion

This is a Next.js + React + MUI project, not a Tailwind project.
