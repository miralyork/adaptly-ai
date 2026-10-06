import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { INTEREST_PICTURES, PictureGrid, type Picture } from "@/components/site/pictures";

const DEMO_INTERESTS = INTEREST_PICTURES.filter((p) =>
  ["Cars", "Food", "Animals", "Space", "Football"].includes(p.id),
);

const SUBJECTS: Picture[] = [
  { id: "Mathematics", emoji: "🔢", label: "Maths" },
  { id: "Science", emoji: "🔬", label: "Science" },
];

const EXAMPLES: Record<string, string> = {
  "Cars|Mathematics": "If a car travels 60 miles in 2 hours, what is its average speed?",
  "Cars|Science":
    "Why does a car take longer to stop on a wet road? Let's explore friction using race cars.",
  "Food|Mathematics": "A pizza is cut into 8 slices. You eat 3. How many slices are left?",
  "Food|Science":
    "Why does ice cream melt on a sunny day? Let's explore how heat changes solids into liquids.",
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

const FLOW = [
  { emoji: "💛", label: "Interest" },
  { emoji: "📘", label: "Subject" },
  { emoji: "✨", label: "Adaptly AI" },
  { emoji: "🎯", label: "Lesson" },
];

export function PersonalisationDemo({ className = "" }: { className?: string }) {
  const [interest, setInterest] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);

  const interestPic = DEMO_INTERESTS.find((p) => p.id === interest);
  const subjectPic = SUBJECTS.find((p) => p.id === subject);
  const example = interest && subject ? EXAMPLES[`${interest}|${subject}`] : undefined;

  return (
    <section className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">See Personalisation in Action</h2>
          <p className="mt-4 text-muted-foreground">
            Tap a picture of something you love and a subject to see the kind of example Adaptly AI
            would build. These are prepared demo examples — no live AI is used on this site.
          </p>
        </div>

        <ol className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
          {FLOW.map((s, i) => (
            <li key={s.label} className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
                <span aria-hidden className="text-base">
                  {s.emoji}
                </span>
                {s.label}
              </span>
              {i < FLOW.length - 1 ? <span aria-hidden>→</span> : null}
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-gradient-soft p-6 shadow-card sm:p-8">
          <p className="text-sm font-medium">1. What do you love?</p>
          <div className="mt-3">
            <PictureGrid
              label="What do you love?"
              items={DEMO_INTERESTS}
              selected={interest ? [interest] : []}
              multiple={false}
              onChange={([v]) => setInterest(v ?? null)}
              className="grid-cols-3 sm:grid-cols-5"
            />
          </div>

          <p className="mt-6 text-sm font-medium">2. What do you want to learn?</p>
          <div className="mt-3 max-w-xs">
            <PictureGrid
              label="What do you want to learn?"
              items={SUBJECTS}
              selected={subject ? [subject] : []}
              multiple={false}
              onChange={([v]) => setSubject(v ?? null)}
              className="grid-cols-2"
            />
          </div>

          <div className="mt-8 rounded-2xl bg-card p-6" aria-live="polite">
            <div aria-hidden className="flex items-center justify-center gap-3 text-4xl">
              <span className={interestPic ? "" : "opacity-25"}>{interestPic?.emoji ?? "💛"}</span>
              <span className="text-2xl text-muted-foreground">+</span>
              <span className={subjectPic ? "" : "opacity-25"}>{subjectPic?.emoji ?? "📘"}</span>
              <span className="text-2xl text-muted-foreground">=</span>
              <span className={example ? "" : "opacity-25"}>🎯</span>
            </div>
            {example ? (
              <>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium text-success">
                  <CheckCircle2 className="size-4" /> Lesson personalised successfully!
                </p>
                <p className="mt-3 text-lg font-medium">{example}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {interestPic?.label} · {subjectPic?.label} · sample content
                </p>
              </>
            ) : (
              <p className="mt-5 text-center text-sm text-muted-foreground">
                Pick one picture from each row to see a sample lesson question.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
