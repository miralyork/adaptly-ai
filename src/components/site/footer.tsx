import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Twitter } from "lucide-react";

import { Logo } from "@/components/site/logo";

const COLUMNS: { title: string; links: { label: string; slug: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", slug: "features" },
      { label: "Platform", slug: "platform" },
      { label: "Roadmap", slug: "roadmap" },
      { label: "Updates", slug: "updates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", slug: "about" },
      { label: "Our Mission", slug: "our-mission" },
      { label: "Careers", slug: "careers" },
      { label: "Contact", slug: "contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", slug: "blog" },
      { label: "Guides", slug: "guides" },
      { label: "Research", slug: "research" },
      { label: "Help Centre", slug: "help-centre" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Building AI-powered learning experiences that adapt to every mind.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Mail].map((Icon, i) => (
              <span
                key={i}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.slug === "about" ? (
                    <Link
                      to="/about"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  ) : l.slug === "platform" ? (
                    <Link
                      to="/platform"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <Link
                      to="/soon/$slug"
                      params={{ slug: l.slug }}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © 2026 Adaptly AI Ltd. All rights reserved. Adaptly AI is a learning-support tool and
          does not diagnose or treat any condition.
        </p>
      </div>
    </footer>
  );
}
