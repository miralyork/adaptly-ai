import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Flame,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { DashboardSnapshot } from "@/components/site/dashboard-mock";
import { PersonalisationDemo } from "@/components/site/personalisation-demo";
import { SiteShell } from "@/components/site/site-shell";
import { useSiteDialogs } from "@/components/site/site-dialogs";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Product — Adaptly AI Adaptive Learning Platform" },
      {
        name: "description",
        content:
          "Personalised lessons, interest-based examples, adaptive quizzes and parent & educator dashboards — see what the Adaptly AI platform does.",
      },
      { property: "og:title", content: "Adaptly AI Product Features" },
      {
        property: "og:description",
        content:
          "Adaptive learning features built for neurodivergent learners: personalised lessons, interest-led examples and progress dashboards.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <SiteShell>
      <ProductHero />
      <FeatureDetail />
      <DashboardsPreview />
      <PersonalisationDemo />
      <ProductCta />
    </SiteShell>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

function ProductHero() {
  const { openLogin } = useSiteDialogs();
  return (
    <div className="bg-gradient-soft">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" /> Product overview
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          A Learning Platform That{" "}
          <span className="text-gradient-brand">Adapts to Every Mind</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Adaptly AI shapes lessons, examples and pacing around each learner's interests and
          preferred way of learning — with clear progress views for parents and educators.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button size="lg" onClick={openLogin}>
            Log in to explore a demo <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Sparkles,
    title: "Personalised Lessons",
    body: "AI-generated lessons tailored to learner needs and level.",
    detail:
      "Each lesson is rebuilt around the learner's current level, session length and comfort settings — shorter steps when needed, deeper practice when they're ready.",
  },
  {
    icon: Rocket,
    title: "Interest-Based Examples",
    body: "Real-world examples built around learner interests.",
    detail:
      "Cars, space, animals, football — the same maths or science concept is explained through the topics a learner already loves.",
  },
  {
    icon: Target,
    title: "Adaptive Quizzes",
    body: "Questions adjust in difficulty based on performance.",
    detail:
      "Quizzes ease off after a struggle and step up after a run of correct answers, so learners stay in a confident zone.",
  },
  {
    icon: BarChart3,
    title: "Parent & Educator Dashboard",
    body: "Track progress, engagement and learning goals.",
    detail:
      "Simple, non-clinical views of streaks, engagement and subject progress — designed to support, never to diagnose.",
  },
];

function FeatureDetail() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold">What the Platform Does</h2>
        <p className="mt-4 text-muted-foreground">
          Four capabilities working together to keep learning flexible and engaging.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-soft"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-soft">
              <f.icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{f.body}</p>
            <p className="mt-3 text-sm text-muted-foreground">{f.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DashboardsPreview() {
  return (
    <Section className="bg-card">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Dashboards for Every Role</h2>
          <p className="mt-4 text-muted-foreground">
            Learners, parents and educators each get a view built for them. These are static
            illustrations — log in to the demo to explore the full sample dashboards.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              {
                icon: Flame,
                title: "Learner view",
                body: "Streaks, next recommended lesson, interests and weekly goals.",
              },
              {
                icon: TrendingUp,
                title: "Parent view",
                body: "A snapshot per child, weekly summary and notes from educators.",
              },
              {
                icon: BookOpen,
                title: "Educator view",
                body: "Group overview, per-student engagement and class insights.",
              },
            ].map((r) => (
              <li key={r.title} className="flex gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-soft">
                  <r.icon className="size-4 text-primary" />
                </span>
                <span>
                  <span className="text-sm font-semibold">{r.title}</span>
                  <span className="block text-sm text-muted-foreground">{r.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <DashboardSnapshot />
      </div>
    </Section>
  );
}

function ProductCta() {
  const { openLogin } = useSiteDialogs();
  return (
    <section className="px-5 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-brand px-8 py-14 text-center shadow-soft">
        <h2 className="text-3xl font-semibold text-primary-foreground">
          Want to see it in action?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Log in to explore a live demo dashboard for learners, parents or educators.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" variant="secondary" onClick={openLogin}>
            Log in to explore a live demo dashboard
          </Button>
        </div>
      </div>
    </section>
  );
}
