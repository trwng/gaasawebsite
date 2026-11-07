import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import appCss from "../styles.css?url";
import logo from "../assets/logo.png";
import { DISCORD_URL, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/links";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV_CLASS =
  "whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-sm";

function NavLink({
  to,
  label,
  exact,
}: {
  to: "/" | "/leadership" | "/contact";
  label: string;
  exact?: boolean;
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      className={NAV_CLASS}
      activeProps={{ className: "bg-primary/10 text-primary" }}
    >
      {label}
    </Link>
  );
}

function AboutMenu() {
  const path = useLocation({ select: (l) => l.pathname.replace(/\/$/, "") });
  const active = path.endsWith("/about") || path.endsWith("/points");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${NAV_CLASS} inline-flex items-center gap-1 outline-none ${
          active ? "bg-primary/10 text-primary" : ""
        }`}
      >
        About Us
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuItem asChild>
          <Link to="/about" className="cursor-pointer text-sm">
            GAASA
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/points" className="cursor-pointer text-sm">
            School Standings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Gwinnett AASA logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
          />
          <span className="hidden font-display text-lg font-bold tracking-tight sm:inline">
            Gwinnett AASA
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" label="Home" exact />
          <AboutMenu />
          <NavLink to="/leadership" label="Board" />
          <NavLink to="/contact" label="Contact Us" />
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <span className="font-display text-lg font-bold">
          Gwinnett AASA
        </span>
        <p className="max-w-md text-sm text-muted-foreground">
          A student-run group for Asian American students across Gwinnett
          County.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Discord
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {EMAIL}
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gwinnett Asian American Student Association
        </p>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gwinnett AASA" },
      {
        name: "description",
        content:
          "GAASA is a student-run group that connects Asian American students across Gwinnett County through events, food, and community.",
      },
      { property: "og:title", content: "Gwinnett AASA" },
      {
        property: "og:description",
        content:
          "A student-run group for Asian American students across Gwinnett County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logo, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:wght@600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
