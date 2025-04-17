import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Sidebar } from "@/components/sidebar";

import globalsCss from "../globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalsCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="h-screen bg-neutral-100 flex flex-row">
        <Sidebar />

        <div className="flex min-h-screen w-full items-center justify-center py-2 pr-2 rounded-sm">
          <div className="flex flex-col w-full h-full bg-neutral-50 border border-neutral-200 rounded-sm">
            {children}
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
