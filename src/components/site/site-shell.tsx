import type { ReactNode } from "react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { SiteDialogsProvider } from "@/components/site/site-dialogs";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SiteDialogsProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SiteDialogsProvider>
  );
}
