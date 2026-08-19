import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { StoreProvider } from "@/lib/store";
import { Toaster } from "@/components/ui/sonner";
import { BackToTop, Header, WhatsAppButton } from "@/components/site/header";
import { Footer, LiveSalesPopup } from "@/components/site/footer";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
      { title: "Noorix Digital Lab — Premium Subscriptions, Software & Digital Services" },
      {
        name: "description",
        content:
          "Premium AI tools, software subscriptions, streaming accounts, VPNs and social media growth services with instant delivery across Pakistan.",
      },
      { property: "og:site_name", content: "Noorix Digital Lab" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/icon-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/icon-512.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Jost:wght@400;500&family=Pinyon+Script&family=Lora:ital,wght@0,400;1,400&family=Figtree:wght@400;700&family=Manrope:wght@400;700&family=Cinzel:wght@400;700&family=Outfit:wght@400;700&family=JetBrains+Mono:wght@400;700&family=Quicksand:wght@400;700&family=Nunito:wght@400;700&family=Courier+Prime:ital,wght@0,400;1,400&family=Space+Grotesk:wght@400;700&family=Syne:wght@400;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Noorix Digital Lab",
          description: "Premium digital products store: AI tools, software subscriptions, streaming accounts, VPNs and social media growth services",
          areaServed: "PK",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+92 315 4429417",
            contactType: "customer service",
          },
        }),
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
    <html lang="en" className="theme-pk">
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        {isAdmin ? (
          <Outlet />
        ) : (
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {/* Required: nested routes render here. */}
              <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
            <BackToTop />
            <LiveSalesPopup />
          </div>
        )}
        <Toaster position="top-center" richColors />
      </StoreProvider>
    </QueryClientProvider>
  );
}
