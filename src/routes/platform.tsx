import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Flame,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import { DashboardSnapshot } from "@/components/site/dashboard-mock";
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

const INTERESTS = ["Cars", "Space", "Animals", "Football"] as const;
const SUBJECTS = ["Mathematics", "Science"] as const;

const EXAMPLES: Record<string, string> = {
  "Cars|Mathematics": "If a car travels 60 miles in 2 hours, what is its average speed?",
  "Cars|Science":
    "Why does a car take longer to stop on a wet road? Let's explore friction using race cars.",
  "Space|Mathematics":
    "A rocket travels 1,200 km in 4 minutes. How far does it travel each minute?",
  "Space|Science": "Why do astronauts float on the space station? Let's look at gravity in orbit.",
  "Animals|Mathematics": "A cheetah runs 30 metres in 1 second. How far does it run in 5 seconds?",
  "Animals|Science":
    "Polar bears have thick fur and fat. How does that help them survive in cold habitats?",
  "Football|Mathematics":
    "A team scores 3 goals in each of 4 matches. How many goals is that in total?",
  "Football|Science":
    "Why does a football curve in the air when it spins? Let's explore forces in motion.",
};

function PersonalisationDemo() {
  const [interest, setInterest] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);

  const ready = interest && subject;
  const example = ready ? EXAMPLES[`${interest}|${subject}`] : undefined;

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold">See Personalisation in Action</h2>
        <p className="mt-4 text-muted-foreground">
          Pick an interest and a subject to see the kind of example Adaptly AI would build. These
          are prepared demo examples — no live AI is used on this site.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
        {["Learner Interest", "Subject", "Adaptly AI Generates", "Result"].map((s, i) => (
          <span key={s} className="flex items-center gap-3">
            <span className="rounded-full bg-secondary px-3 py-1.5">{s}</span>
            {i < 3 ? <ArrowRight className="size-3.5" /> : null}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-gradient-soft p-8 shadow-card">
        <p className="text-sm font-medium">1. Choose an interest</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <Chip key={i} active={interest === i} onClick={() => setInterest(i)}>
              {i}
            </Chip>
          ))}
        </div>

        <p className="mt-6 text-sm font-medium">2. Choose a subject</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <Chip key={s} active={subject === s} onClick={() => setSubject(s)}>
              {s}
            </Chip>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-card p-6">
          {!ready ? (
            <p className="text-sm text-muted-foreground">
              Pick one interest and one subject to generate a sample lesson question.
            </p>
          ) : example ? (
            <>
              <p className="flex items-center gap-2 text-sm font-medium text-success">
                <CheckCircle2 className="size-4" /> Lesson personalised successfully!
              </p>
              <p className="mt-3 text-lg font-medium">{example}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {interest} · {subject} · sample content
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              More personalised examples coming soon for this combination.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-transparent bg-gradient-brand text-primary-foreground shadow-soft"
          : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </button>
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
