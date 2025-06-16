# MyMono - PNPM Workspace

A pnpm workspace with a Next.js project.

## Structure

```
mymono/
├── apps/
│   └── web/          # Next.js application
├── packages/         # Shared packages (empty for now)
├── package.json      # Root package.json
├── pnpm-workspace.yaml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

```bash
pnpm install
```

### Development

Start the Next.js development server:

```bash
pnpm dev
```

This will start the web application at `http://localhost:3000`.

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint

### Workspace Commands

Run commands for specific packages:

```bash
# Run dev server for web app
pnpm --filter web dev

# Install dependencies for web app
pnpm --filter web add <package-name>

# Run any script in web app
pnpm --filter web <script-name>
```

## Adding New Packages

To add a new package to the workspace:

1. Create a new directory in `apps/` or `packages/`
2. Add a `package.json` file
3. Run `pnpm install` from the root

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **pnpm** - Package manager and workspace tool 