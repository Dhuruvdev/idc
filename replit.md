# IDC Coaching Institute

## Overview

IDC Coaching Institute is a web application for a premier coaching institute in Delhi. The platform showcases the institute's offerings, featuring information about faculty, programs, and student success. Built as a full-stack TypeScript application with a React frontend and Express backend, it serves as a marketing and informational website for the educational institution.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom theming via CSS variables
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for UI animations
- **Typography**: Google Fonts (Libre Baskerville, DM Sans, Inter) via Fontsource

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **Build System**: Custom build script using esbuild for server bundling and Vite for client
- **Development**: Vite dev server with HMR, proxied through Express

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` - contains user table definition
- **Current Storage**: In-memory storage implementation (`MemStorage` class) with interface for database migration
- **Database Push**: Uses `drizzle-kit push` for schema synchronization

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── static.ts     # Static file serving
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Drizzle migration files
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries with PostgreSQL dialect

### UI Framework
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS v4**: Utility-first CSS framework with Vite plugin integration
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server-side bundling for production
- **TypeScript**: Full-stack type safety

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator
- **Custom meta images plugin**: OpenGraph image URL management for Replit deployments