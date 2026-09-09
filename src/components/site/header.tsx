import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/site/logo";
import { useSiteDialogs } from "@/components/site/site-dialogs";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Product", to: "/platform" as const },
  { label: "How It Works", to: "/" as const, hash: "how-it-works" },
  { label: "About", to: "/about" as const },
  { label: "Blog", to: "/soon/$slug" as const, params: { slug: "blog" } },
];


export function Header() {
  const { openLogin, openPilot } = useSiteDialogs();
  const [open, setOpen] = useState(false);

  const links = NAV.map((item) => (
    <Link
      key={item.label}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...({ to: item.to, params: item.params, hash: item.hash } as any)}
      onClick={() => setOpen(false)}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      activeProps={{ className: "text-foreground" }}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">{links}</nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" onClick={openLogin}>
            Log in
          </Button>
          <Button onClick={() => openPilot()}>Join a Pilot</Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-4" />
        </Button>
      </div>
      {open ? (
        <div className="border-t border-border bg-card px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">{links}</nav>
          <div className="mt-4 flex gap-3">
            <Button variant="outline" className="flex-1" onClick={openLogin}>
              Log in
            </Button>
            <Button className="flex-1" onClick={() => openPilot()}>
              Join a Pilot
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
