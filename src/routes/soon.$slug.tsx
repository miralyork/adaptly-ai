import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const Route = createFileRoute("/soon/$slug")({
  head: ({ params }) => {
    const title = `${titleFromSlug(params.slug)} — Coming Soon | Adaptly AI`;
    const description =
      "This page is part of Adaptly AI's early roadmap and is coming soon. Adaptly AI builds adaptive learning for neurodivergent learners.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ComingSoonPage,
});

function ComingSoonPage() {
  const { slug } = Route.useParams();
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          <Sparkles className="size-3.5" /> Early roadmap
        </span>
        <h1 className="mt-6 text-4xl font-semibold">{titleFromSlug(slug)}</h1>
        <p className="mt-4 text-muted-foreground">
          This page is part of Adaptly AI's early roadmap and is coming soon.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">
            <ArrowLeft className="size-4" /> Back to homepage
          </Link>
        </Button>
      </section>
    </SiteShell>
  );
}
