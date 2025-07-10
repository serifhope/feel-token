# FEEL Token Landing Page

## Overview

This is a React-based landing page for the $FEEL token, a cryptocurrency project focused on helping a family of six find hope and healing through community support. The application is built with a modern tech stack including React, TypeScript, Tailwind CSS, and shadcn/ui components, with a Node.js/Express backend and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: CSS-based animations with intersection observer for fade-in effects

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot reload with tsx for TypeScript execution

### Design System
- **Theme**: Custom color palette focused on soft, healing colors (lavender, gentle blue, warm pink, mint green)
- **Typography**: Inter font family for modern, readable text
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI components provide built-in accessibility features

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Migration System**: Drizzle Kit for database schema management
- **Validation**: Zod schemas for type-safe data validation

### Frontend Pages
- **Home Page**: Hero section with emotional storytelling and community engagement
- **404 Page**: User-friendly not found page with clear navigation guidance
- **Component Library**: Comprehensive UI components from shadcn/ui

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route System**: Modular route registration with Express
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Detailed API request logging with response capture

## Data Flow

1. **Client Requests**: Frontend makes API calls using fetch with credentials
2. **Server Processing**: Express routes handle requests with middleware pipeline
3. **Database Operations**: Drizzle ORM manages database queries with type safety
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query manages client-side cache and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React routing library

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **drizzle-kit**: Database migration and introspection tool
- **tsx**: TypeScript execution for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command
4. **Asset Handling**: Static assets served from built frontend

### Environment Configuration
- **Development**: tsx with hot reload and Vite development server
- **Production**: Node.js serving bundled application with static file serving
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Static file serving capability
- Environment variable support for database configuration

The application follows a traditional full-stack architecture with modern tooling, emphasizing developer experience, type safety, and maintainability while focusing on the emotional storytelling aspect of the $FEEL token project.