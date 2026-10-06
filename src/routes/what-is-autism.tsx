import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Info } from "lucide-react";

import { SiteShell } from "@/components/site/site-shell";
import { useSiteDialogs } from "@/components/site/site-dialogs";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/what-is-autism")({
  head: () => ({
    meta: [
      { title: "What Is Autism? A Simple Guide — Adaptly AI" },
      {
        name: "description",
        content:
          "A plain-language, picture-led guide to autism: what it means to be autistic, common experiences, strengths, myths and how learning can be adapted.",
      },
      { property: "og:title", content: "What Is Autism? A Simple Guide" },
      {
        property: "og:description",
        content:
          "What it means to be autistic, explained simply — with pictures, myths vs facts, and tips for supporting autistic learners.",
      },
    ],
  }),
  component: WhatIsAutismPage,
});

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {intro ? <p className="mt-4 text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

function WhatIsAutismPage() {
  return (
    <SiteShell>
      <Hero />
      <QuickFacts />
      <Spectrum />
      <Experiences />
      <Strengths />
      <ForChildren />
      <Myths />
      <WordsMatter />
      <HowWeHelp />
      <LearnMore />
      <Cta />
    </SiteShell>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-soft">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span aria-hidden>🧠</span> A simple guide
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          What is <span className="text-gradient-brand">autism</span>?
        </h1>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-border bg-card p-6 text-left shadow-card sm:p-8">
          <p className="text-lg leading-relaxed">
            Autism is a <strong>lifelong difference in how a person's brain works</strong>. It
            affects how someone experiences the world around them, how they communicate, and how
            they relate to other people.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Autism is not an illness or a disease, and it doesn't need to be "fixed". Being autistic
            means thinking and feeling in a different way — with real strengths as well as real
            challenges. When someone is described as <em>autistic</em>, this is what it means.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickFacts() {
  const facts = [
    { emoji: "👥", big: "About 1 in 100", body: "people in the UK are autistic." },
    { emoji: "🌱", big: "Lifelong", body: "Autistic children grow up to be autistic adults." },
    { emoji: "🌈", big: "A spectrum", body: "Every autistic person is different." },
    {
      emoji: "🧬",
      big: "Not caused by parenting",
      body: "or by vaccines. It's how a brain develops.",
    },
  ];
  return (
    <Section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.big} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span aria-hidden className="text-4xl">
              {f.emoji}
            </span>
            <p className="mt-3 text-lg font-semibold">{f.big}</p>
            <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Figure from the National Autistic Society.
      </p>
    </Section>
  );
}

const SPECTRUM_TRAITS = ["Communication", "Senses", "Routine", "Social", "Focus"];
const SPECTRUM_PEOPLE = [
  { emoji: "🧒", name: "Sam", levels: [30, 90, 60, 45, 80] },
  { emoji: "👧", name: "Leah", levels: [85, 35, 90, 70, 40] },
];

function Spectrum() {
  return (
    <Section className="bg-card">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">What does "spectrum" mean?</h2>
          <p className="mt-4 text-muted-foreground">
            You may hear "autism spectrum". This doesn't mean a line from "a little bit autistic" to
            "very autistic". It's more like a mixing desk: every autistic person has their own mix
            of differences, strengths and needs — and that mix can change from day to day.
          </p>
          <p className="mt-4 text-muted-foreground">
            That's why there's a well-known saying in the autistic community:{" "}
            <em>"If you've met one autistic person, you've met one autistic person."</em>
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {SPECTRUM_PEOPLE.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-background p-5">
              <p className="flex items-center gap-2 font-semibold">
                <span aria-hidden className="text-3xl">
                  {p.emoji}
                </span>
                {p.name}
              </p>
              <ul className="mt-4 space-y-3">
                {SPECTRUM_TRAITS.map((t, i) => (
                  <li key={t}>
                    <p className="text-xs text-muted-foreground">{t}</p>
                    <div className="mt-1 h-2 rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-gradient-brand"
                        style={{ width: `${p.levels[i]}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-xs text-muted-foreground sm:col-span-2">
            An illustration only: two autistic people, two very different mixes.
          </p>
        </div>
      </div>
    </Section>
  );
}

const EXPERIENCES = [
  {
    emoji: "💬",
    title: "Communicating differently",
    body: "Words may be taken literally, and jokes or sarcasm can be confusing. Some autistic people don't speak and use pictures, signs or a device instead.",
    help: "Clear, simple words. Extra time to answer. Pictures.",
  },
  {
    emoji: "🔊",
    title: "Senses can feel stronger",
    body: "Noises, bright lights, smells, textures or busy places can feel overwhelming. Some senses may feel weaker instead.",
    help: "Quiet spaces, ear defenders, calm screens.",
  },
  {
    emoji: "📅",
    title: "Routine feels safe",
    body: "Knowing what will happen next helps a lot. Sudden changes can feel very stressful.",
    help: "Visual timetables and a warning before changes.",
  },
  {
    emoji: "⭐",
    title: "Deep interests",
    body: "Strong passions — like trains, space or animals — bring joy, calm and real expertise.",
    help: "Use those interests to learn new things.",
  },
  {
    emoji: "🤝",
    title: "Social differences",
    body: "Unwritten social rules can be confusing, and socialising can be tiring even when it's enjoyable.",
    help: "Explain what's expected. Allow breaks.",
  },
  {
    emoji: "🌊",
    title: "Overwhelm and calming down",
    body: "When everything gets too much, a person may have a meltdown or shut down. This is overwhelm, not bad behaviour. Many people stim — rock, flap or hum — to stay calm.",
    help: "One thing at a time. A calm place to recover.",
  },
];

function Experiences() {
  return (
    <Section>
      <SectionHeading
        title="What autism can look like"
        intro="Not every autistic person experiences all of these, and everyone experiences them differently."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((e) => (
          <div
            key={e.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <span aria-hidden className="text-5xl">
              {e.emoji}
            </span>
            <h3 className="mt-4 font-semibold">{e.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{e.body}</p>
            <p className="mt-4 rounded-xl bg-success-soft px-3 py-2 text-sm">
              <span className="font-medium text-success">What helps: </span>
              {e.help}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Strengths() {
  const strengths = [
    { emoji: "🔍", label: "Noticing details" },
    { emoji: "🧩", label: "Spotting patterns" },
    { emoji: "📚", label: "Deep knowledge" },
    { emoji: "💯", label: "Honesty" },
    { emoji: "🎯", label: "Strong focus" },
    { emoji: "🖼️", label: "Thinking in pictures" },
  ];
  return (
    <Section className="bg-card">
      <SectionHeading
        title="Autistic strengths"
        intro="Autism isn't only about challenges. Many autistic people have strengths like these — though, again, everyone is different."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {strengths.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center rounded-2xl bg-gradient-soft p-5 text-center"
          >
            <span aria-hidden className="text-4xl">
              {s.emoji}
            </span>
            <p className="mt-2 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ForChildren() {
  const cards = [
    { emoji: "🧠", text: "Everybody's brain works in its own way." },
    { emoji: "🔊", text: "Some sounds and lights can feel too big and too loud." },
    { emoji: "📅", text: "Knowing what comes next helps me feel calm." },
    { emoji: "🚂", text: "Loving one thing a lot is a great thing!" },
    { emoji: "🤗", text: "Being different is okay. Everyone belongs." },
  ];
  return (
    <Section>
      <SectionHeading
        title="Explaining autism to a child"
        intro="Children often understand pictures faster than words. Here's a simple picture story you can share."
      />
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((c, i) => (
          <li
            key={c.emoji}
            className="flex flex-col items-center rounded-3xl border-2 border-dashed border-primary/30 bg-card p-6 text-center"
          >
            <span className="text-xs font-medium text-muted-foreground">{i + 1}</span>
            <span aria-hidden className="mt-2 text-6xl">
              {c.emoji}
            </span>
            <p className="mt-4 font-medium">{c.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const MYTHS = [
  {
    myth: "Autism is an illness that can be cured.",
    fact: "Autism is a lifelong difference, not a disease. The right support helps autistic people thrive.",
  },
  {
    myth: "Autistic people don't have feelings.",
    fact: "Autistic people feel deeply. They may show feelings — or read other people's — in different ways.",
  },
  {
    myth: "Bad parenting or vaccines cause autism.",
    fact: "Neither causes autism. Research shows it is strongly linked to genes and how the brain develops.",
  },
  {
    myth: "Only boys are autistic.",
    fact: "People of every gender are autistic. Girls are often diagnosed later because they may hide (mask) their differences.",
  },
  {
    myth: "If someone doesn't speak, they don't understand.",
    fact: "Many non-speaking autistic people understand a great deal and communicate in other ways.",
  },
];

function Myths() {
  return (
    <Section className="bg-card">
      <SectionHeading title="Myths and facts" />
      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {MYTHS.map((m) => (
          <div key={m.myth} className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-secondary p-4">
              <span aria-hidden className="text-2xl">
                ❌
              </span>
              <p className="text-sm">
                <span className="sr-only">Myth: </span>
                {m.myth}
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-success-soft p-4">
              <span aria-hidden className="text-2xl">
                ✅
              </span>
              <p className="text-sm font-medium">
                <span className="sr-only">Fact: </span>
                {m.fact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WordsMatter() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-card">
        <h2 className="flex items-center gap-3 text-2xl font-semibold">
          <span aria-hidden>🗣️</span> Words matter
        </h2>
        <p className="mt-4 text-muted-foreground">
          Many autistic people prefer to be called an <strong>autistic person</strong>, because
          autism is part of who they are. Some prefer <strong>person with autism</strong>. If you're
          not sure, ask — and follow the person's lead.
        </p>
        <p className="mt-3 text-muted-foreground">
          On this site we say "autistic", and we talk about <em>differences</em> and{" "}
          <em>support needs</em> rather than labels like "high-functioning" or "low-functioning".
        </p>
      </div>
    </Section>
  );
}

function HowWeHelp() {
  const items = [
    {
      emoji: "🖼️",
      title: "Pictures first",
      body: "Choices and lessons use pictures, so learners don't have to read to take part.",
    },
    {
      emoji: "⭐",
      title: "Built on interests",
      body: "Maths with cars, science with dinosaurs — learning through what they already love.",
    },
    {
      emoji: "📅",
      title: "Predictable steps",
      body: "Learners always see where they are and what comes next.",
    },
    {
      emoji: "🐢",
      title: "Their own pace",
      body: "No rushing. Shorter steps when needed, more depth when ready.",
    },
    {
      emoji: "🤫",
      title: "Calm design",
      body: "Soft colours, minimal motion, no flashing and no countdown timers.",
    },
  ];
  return (
    <Section className="bg-card">
      <SectionHeading
        title="How Adaptly AI uses this"
        intro="Everything above shapes how we design learning for autistic learners."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-background p-5">
            <span aria-hidden className="text-4xl">
              {i.emoji}
            </span>
            <h3 className="mt-3 font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const RESOURCES = [
  {
    name: "NHS — Autism",
    href: "https://www.nhs.uk/conditions/autism/",
    body: "What autism is, signs, and how to get an assessment in the UK.",
  },
  {
    name: "National Autistic Society",
    href: "https://www.autism.org.uk/advice-and-guidance/what-is-autism",
    body: "The UK's leading autism charity — guides for families, schools and autistic people.",
  },
  {
    name: "Autistica",
    href: "https://www.autistica.org.uk/what-is-autism",
    body: "Autism research charity with clear, research-based explanations.",
  },
];

function LearnMore() {
  return (
    <Section>
      <SectionHeading title="Learn more and get support" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {RESOURCES.map((r) => (
          <a
            key={r.name}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-soft"
          >
            <p className="flex items-center gap-2 font-semibold group-hover:text-primary">
              {r.name} <ExternalLink className="size-3.5" />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
          </a>
        ))}
      </div>
      <p className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl bg-accent p-4 text-sm text-accent-foreground">
        <Info className="mt-0.5 size-4 shrink-0" />
        Adaptly AI is a learning-support tool. We don't diagnose or treat autism. If you think you
        or your child might be autistic, speak to your GP, health visitor or your school's SENCO.
      </p>
    </Section>
  );
}

function Cta() {
  const { openPilot } = useSiteDialogs();
  return (
    <section className="px-5 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-brand px-8 py-14 text-center shadow-soft">
        <h2 className="text-3xl font-semibold text-primary-foreground">
          Learning that fits autistic minds
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
          Help us shape it. We're inviting families and educators to our early pilot programme.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="secondary" onClick={() => openPilot("Parent")}>
            Join a Pilot
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/platform">
              See the platform <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
