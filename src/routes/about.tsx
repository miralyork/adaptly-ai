import { Link, createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adaptly AI — Adaptive Learning for Every Mind" },
      {
        name: "description",
        content:
          "Adaptly AI is an early-stage team building personalised, accessible learning experiences for autistic and neurodivergent learners.",
      },
      { property: "og:title", content: "About Adaptly AI" },
      {
        property: "og:description",
        content:
          "Meet the founder and mission behind Adaptly AI's adaptive learning platform for neurodivergent learners.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Learning should adapt to <span className="text-gradient-brand">every mind</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Adaptly AI is an early-stage startup exploring how AI can make digital learning more
            flexible, personalised and engaging for autistic and other neurodivergent learners. We
            build accessibility and learning-support tools — not medical products.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Our mission",
              body: "Make everyday learning feel achievable by shaping content around interests, pace and preferred learning style.",
            },
            {
              icon: ShieldCheck,
              title: "Responsible by design",
              body: "Privacy-conscious, evidence-informed and co-designed with educators, parents and neurodivergent communities.",
            },
            {
              icon: Sparkles,
              title: "Where we are",
              body: "Pre-seed and pilot stage. We're testing our first learning experiences and learning fast from feedback.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <c.icon className="size-6 text-primary" />
              <h2 className="mt-4 text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-card sm:flex sm:items-center sm:gap-8">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-2xl font-semibold text-primary-foreground">
            MP
          </div>
          <div className="mt-6 sm:mt-0">
            <h2 className="text-xl font-semibold">Miralkumar Patel</h2>
            <p className="text-sm text-primary">Founder &amp; CEO, Adaptly AI</p>
            <p className="mt-3 text-sm text-muted-foreground">
              A computing professional passionate about using technology to create more
              personalised and accessible learning experiences for neurodivergent learners.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/platform">Explore the product</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
