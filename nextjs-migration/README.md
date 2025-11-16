# OnboardJS Next.js 16 Example

This is a complete migration of the OnboardJS React Router application to [Next.js](https://nextjs.org) 16.

## Features

✨ **Complete Feature Parity** - 100% identical functionality to the React Router version
- Multi-step onboarding flow using OnboardJS
- Dark/Light theme switching with persistent storage
- Form validation with React Hook Form and Zod
- Beautiful UI components from shadcn/ui
- Tailwind CSS v4 with custom theme
- Server-side data persistence API
- Full TypeScript support

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the onboarding flow.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/api/onboarding/` - API route for data persistence
- `components/` - React components including onboarding steps and UI components
- `lib/` - Utility functions and shared logic
- `hooks/` - Custom React hooks

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
