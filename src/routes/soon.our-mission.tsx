import { Link, createFileRoute } from "@tanstack/react-router";
import { Heart, Lightbulb, ShieldCheck, Users, Eye, Pencil } from "lucide-react";

import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/soon/our-mission")({
  head: () => ({
    meta: [
      { title: "Our Mission — Adaptly AI" },
      {
        name: "description",
        content:
          "Every learner deserves learning that fits the way their mind works. Learn about Adaptly AI's mission to make everyday learning achievable for neurodivergent learners.",
      },
      { property: "og:title", content: "Our Mission — Adaptly AI" },
      {
        property: "og:description",
        content:
          "Adaptly AI makes everyday learning achievable for autistic and neurodivergent learners by shaping content around their interests, pace and preferred learning style.",
      },
    ],
  }),
  component: OurMissionPage,
});

const PRINCIPLES = [
  {
    icon: Heart,
    title: "Learner first",
    body: "Decisions start with what helps the learner feel capable, calm and curious.",
  },
  {
    icon: Lightbulb,
    title: "Strengths-based",
    body: "We build on interests and strengths — neurodivergence is diversity, not deficit.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible by design",
    body: "Privacy-conscious, evidence-informed, and clear that we support learning — we don't diagnose or treat.",
  },
  {
    icon: Users,
    title: "Co-designed",
    body: "Built with educators, parents and neurodivergent communities, not just for them.",
  },
];

function OurMissionPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Our <span className="text-gradient-brand">Mission</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every learner deserves learning that fits the way their mind works. Our mission is to
            make everyday learning feel achievable for autistic and neurodivergent learners — by
            shaping content around their interests, pace and preferred learning style.
          </p>
        </div>
      </section>

      {/* Why we exist + What we're building toward */}
      <section className="bg-accent/30">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Why we exist */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10">
                <Pencil className="size-5 text-primary" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">Why we exist</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Traditional learning tools are built for a one-size-fits-all classroom. For many
                neurodivergent learners, that means content that moves too fast or too slow, examples
                that feel irrelevant, and interfaces that overwhelm rather than support.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We started Adaptly AI because we believe technology can do better — adapting to the
                learner instead of asking the learner to adapt to it.
              </p>
            </div>

            {/* What we're building toward */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10">
                <Eye className="size-5 text-primary" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">What we're building toward</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A world where every learning experience can be personalised in seconds: lessons
                explained through a learner's favourite interests, at a pace that keeps them engaged,
                in a calm and predictable environment.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We're early — pre-seed and pilot stage — and every pilot partnership helps us learn
                what truly works for real learners, families and educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          The principles that guide us
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10">
                <p.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-center text-primary-foreground">
          <h2 className="text-2xl font-semibold sm:text-3xl">Help us build it</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-90">
            We're piloting our first learning experiences with families and educators. Join us and
            help shape learning that fits every mind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/about">About us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-white/15 text-white hover:bg-white/25 hover:text-white"
            >
              <Link to="/soon/$slug" params={{ slug: "explore-autism" }}>
                Explore autism
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
