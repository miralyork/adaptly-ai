import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Heart,
  Layers,
  LineChart,
  Lightbulb,
  Puzzle,
  Repeat,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { DashboardSnapshot } from "@/components/site/dashboard-mock";
import { PersonalisationDemo } from "@/components/site/personalisation-demo";
import { SiteShell } from "@/components/site/site-shell";
import { useSiteDialogs } from "@/components/site/site-dialogs";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adaptly AI — Personalised Learning Built Around Every Mind" },
      {
        name: "description",
        content:
          "Adaptly AI creates adaptive, interest-led learning experiences for autistic and other neurodivergent learners. Join our early pilot programme.",
      },
      { property: "og:title", content: "Adaptly AI — Personalised Learning for Every Mind" },
      {
        property: "og:description",
        content:
          "AI-powered personalised learning for neurodivergent learners — tailored to interests, pace and preferred learning style.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <AutismIntro />
      <Problem />
      <HowItWorks />
      <Features />
      <PersonalisationDemo className="bg-card" />
      <Audience />
      <ResponsibleAI />
      <CtaBanner />
    </SiteShell>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

function Hero() {
  const { openPilot, openLogin } = useSiteDialogs();
  return (
    <div className="bg-gradient-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> Early-stage · pilots opening now
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Personalised Learning,{" "}
            <span className="text-gradient-brand">Built Around Every Mind</span>
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Adaptly AI creates adaptive learning experiences for autistic and other neurodivergent
            learners — tailoring content, examples and pace to each learner's interests and
            preferred way of learning.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" onClick={openLogin}>
              Explore the Platform <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => openPilot()}>
              Join a Pilot
            </Button>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Privacy First — Secure & Ethical" },
              { icon: Brain, label: "AI-Powered Personalisation" },
              { icon: BookOpen, label: "Evidence Informed Learning Design" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-start gap-2 rounded-xl border border-border bg-card/70 p-3"
              >
                <b.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        <DashboardSnapshot />
      </div>
    </div>
  );
}

function AutismIntro() {
  return (
    <section className="px-5 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            New to autism?
          </span>
          <h2 className="mt-4 text-2xl font-semibold">What does "autistic" mean?</h2>
          <p className="mt-3 text-muted-foreground">
            Autism is a lifelong difference in how a person's brain works — how they experience the
            world, communicate and connect with others. It isn't an illness. Every autistic person
            is different, with their own strengths and needs.
          </p>
          <Link
            to="/what-is-autism"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Read our simple guide to autism <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
          {[
            { emoji: "🔊", text: "Sounds, lights or busy places can feel much stronger." },
            { emoji: "📅", text: "Knowing what comes next helps people feel calm and safe." },
            { emoji: "⭐", text: "Deep interests bring joy — and are a great way to learn." },
            { emoji: "💬", text: "Words may be taken literally. Pictures can help a lot." },
          ].map((c) => (
            <div key={c.emoji} className="flex items-center gap-4 rounded-2xl bg-gradient-soft p-4">
              <span aria-hidden className="text-4xl">
                {c.emoji}
              </span>
              <p className="text-sm font-medium">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold">
          Why Traditional Learning Doesn't Work for Everyone
        </h2>
        <p className="mt-4 text-muted-foreground">
          Many learners are asked to fit the material. We think the material should fit the learner.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Layers,
            title: "One-size-fits-all content",
            body: "Learners can struggle when content isn't matched to their needs.",
          },
          {
            icon: Puzzle,
            title: "Limited personalisation",
            body: "Little adaptation to individual interests, strengths and learning style.",
          },
          {
            icon: Heart,
            title: "Low engagement",
            body: "Learners lose motivation when they can't connect with the material.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent">
              <c.icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-4 font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-accent px-6 py-5 text-center font-medium text-accent-foreground">
        Adaptly AI is designed to make digital learning more flexible, personalised and engaging.
      </p>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Understand",
      body: "Learners, parents or educators provide interests, preferences and learning needs.",
      picture: "🧒 💛 🚗",
      caption: "Aarav loves cars",
    },
    {
      icon: Repeat,
      title: "Adapt",
      body: "Our AI creates personalised lessons, examples and activities.",
      picture: "🚗 ➕ 🔢",
      caption: "Maths with cars",
    },
    {
      icon: GraduationCap,
      title: "Learn",
      body: "Learners engage with content that matches their pace and interests.",
      picture: "🧒 📚 🐢",
      caption: "At Aarav's own pace",
    },
    {
      icon: LineChart,
      title: "Improve",
      body: "Progress and feedback help the system improve future learning experiences.",
      picture: "⭐ 📈 🎯",
      caption: "Next lesson fits even better",
    },
  ];
  return (
    <Section id="how-it-works" className="bg-card">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold">How Adaptly AI Works</h2>
        <p className="mt-4 text-muted-foreground">
          A simple loop that keeps learning aligned with each learner.
        </p>
      </div>
      <div className="relative mt-14 grid gap-10 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-border md:block" />
        {steps.map((s, i) => (
          <div key={s.title} className="relative text-center">
            <span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft">
              <s.icon className="size-6" />
            </span>
            <h3 className="mt-4 font-semibold">
              {i + 1}. {s.title}
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{s.body}</p>
            <div className="mx-auto mt-4 max-w-[13rem] rounded-2xl bg-gradient-soft px-3 py-3">
              <p aria-hidden className="text-2xl tracking-wider">
                {s.picture}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{s.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Features() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">Learning That Adapts in Real Time</h2>
          <p className="mt-4 text-muted-foreground">
            Every lesson is shaped by what a learner enjoys, how they're progressing and how they
            prefer to learn.
          </p>
        </div>
        <Link to="/platform" className="text-sm font-medium text-primary hover:underline">
          See product features →
        </Link>

      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Sparkles,
            title: "Personalised Lessons",
            body: "AI-generated lessons tailored to learner needs and level.",
          },
          {
            icon: Rocket,
            title: "Interest-Based Examples",
            body: "Real-world examples built around learner interests.",
          },
          {
            icon: Target,
            title: "Adaptive Quizzes",
            body: "Questions adjust in difficulty based on performance.",
          },
          {
            icon: BarChart3,
            title: "Parent & Educator Dashboard",
            body: "Track progress, engagement and learning goals.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-soft"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-soft">
              <f.icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Audience() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold">Who Is Adaptly AI For?</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: GraduationCap,
            title: "Learners",
            body: "Lessons shaped around your interests, at a pace that feels comfortable.",
          },
          {
            icon: Heart,
            title: "Parents",
            body: "See what's working and support learning at home with clear insights.",
          },
          {
            icon: Users,
            title: "Educators",
            body: "Adapt materials for diverse classrooms without doubling your workload.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-soft">
              <c.icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-4 font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ResponsibleAI() {
  return (
    <Section className="bg-card">
      <div className="grid gap-10 lg:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Built with Responsible AI</h2>
          <ul className="mt-5 space-y-3">
            {[
              "AI-assisted content personalisation",
              "Learner preference modelling",
              "Adaptive content generation",
              "Progress tracking & insights",
              "Privacy-conscious by design",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Our Impact (In Progress)</h2>
          <p className="mt-5 text-sm text-muted-foreground">
            We are currently developing and testing our first learning experiences with educators,
            parents and neurodivergent communities.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Rocket, label: "Early Pilots Underway" },
              { icon: Handshake, label: "Educator Collaborations" },
              { icon: Heart, label: "Learner Feedback Driven" },
              { icon: Sparkles, label: "Platform Evolving" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-secondary p-3">
                <s.icon className="size-4 text-primary" />
                <p className="mt-2 text-xs font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Built by People Who Believe Learning Should Adapt
          </h2>
          <div className="mt-5 rounded-2xl border border-border bg-background p-6 shadow-card">
            <div className="flex size-16 items-center justify-center rounded-full bg-gradient-brand text-lg font-semibold text-primary-foreground">
              MP
            </div>
            <h3 className="mt-4 font-semibold">Miralkumar Patel</h3>
            <p className="text-sm text-primary">Founder &amp; CEO, Adaptly AI</p>
            <p className="mt-3 text-sm text-muted-foreground">
              A computing professional passionate about using technology to create more
              personalised and accessible learning experiences for neurodivergent learners.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              More about us →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CtaBanner() {
  const { openPilot } = useSiteDialogs();
  return (
    <section className="px-5 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-brand px-8 py-14 text-center shadow-soft">
        <h2 className="text-3xl font-semibold text-primary-foreground">
          Help Us Build More Personalised Learning
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
          We're inviting educators, parents and partners to join our pilot programme and help shape
          the future of adaptive learning.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" variant="secondary" onClick={() => openPilot("Educator")}>
            Join the Pilot
          </Button>
        </div>

      </div>
    </section>
  );
}
