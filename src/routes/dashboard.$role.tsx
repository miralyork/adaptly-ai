import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import {
  Award,
  BarChart3,
  BookOpen,
  Flame,
  Gauge,
  GraduationCap,
  Heart,
  Info,
  LayoutDashboard,
  MessageSquare,
  Play,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { Logo } from "@/components/site/logo";
import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/dashboard/$role")({
  head: () => ({
    meta: [
      { title: "Demo Dashboard — Adaptly AI" },
      {
        name: "description",
        content:
          "Explore Adaptly AI's learner, parent and educator demo dashboards, built entirely with sample data.",
      },
      { property: "og:title", content: "Adaptly AI Demo Dashboard" },
      {
        property: "og:description",
        content: "Learner, parent and educator dashboard demos using sample data.",
      },
    ],
  }),
  component: DashboardPage,
});

type Role = "learner" | "parent" | "educator";

const PROGRESS_DATA = [
  { day: "Mon", score: 42 },
  { day: "Tue", score: 48 },
  { day: "Wed", score: 55 },
  { day: "Thu", score: 51 },
  { day: "Fri", score: 66 },
  { day: "Sat", score: 74 },
  { day: "Sun", score: 87 },
];

const ALL_INTERESTS = ["Cars", "Space", "Animals", "Football", "Music", "Dinosaurs"];

const NAV_BY_ROLE: Record<Role, { key: string; label: string; icon: typeof Flame }[]> = {
  learner: [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "learning", label: "My Learning", icon: BookOpen },
    { key: "interests", label: "Interests", icon: Heart },
    { key: "progress", label: "Progress", icon: TrendingUp },
    { key: "achievements", label: "Achievements", icon: Award },
    { key: "messages", label: "Messages", icon: MessageSquare },
    { key: "settings", label: "Settings", icon: Settings },
  ],
  parent: [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "children", label: "My Children", icon: Users },
    { key: "progress", label: "Progress", icon: TrendingUp },
    { key: "messages", label: "Messages", icon: MessageSquare },
    { key: "settings", label: "Settings", icon: Settings },
  ],
  educator: [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "students", label: "Students", icon: Users },
    { key: "insights", label: "Class Insights", icon: BarChart3 },
    { key: "messages", label: "Messages", icon: MessageSquare },
    { key: "settings", label: "Settings", icon: Settings },
  ],
};

const SIGNED_IN: Record<Role, string> = {
  learner: "Aarav (demo learner)",
  parent: "Priya Patel (demo parent)",
  educator: "Ms. Sara Khan (demo educator)",
};

function DashboardPage() {
  const { role: raw } = useParams({ from: "/dashboard/$role" });
  const role: Role =
    raw === "parent" || raw === "educator" || raw === "learner" ? raw : "learner";

  const [active, setActive] = useState("dashboard");
  const nav = NAV_BY_ROLE[role];

  return (
    <SiteShell>
      <div className="border-b border-border bg-accent">
        <p className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-3 text-sm text-accent-foreground">
          <Info className="size-4 shrink-0" />
          This is a demo {role} dashboard using sample data — no real accounts or live data.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card md:flex">
          <aside className="bg-navy p-4 md:w-60 md:shrink-0">
            <div className="hidden md:block">
              <Logo tone="dark" />
            </div>
            <nav className="mt-0 flex gap-2 overflow-x-auto md:mt-6 md:flex-col md:overflow-visible">
              {nav.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === item.key
                      ? "bg-primary text-primary-foreground"
                      : "text-navy-muted hover:bg-sidebar-accent hover:text-navy-foreground"
                  }`}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-6 hidden rounded-xl bg-sidebar-accent p-3 md:block">
              <p className="text-xs text-navy-muted">Signed in as</p>
              <p className="text-sm font-medium text-navy-foreground">{SIGNED_IN[role]}</p>
            </div>
          </aside>

          <div className="flex-1 bg-background p-5 sm:p-7">
            {active === "dashboard" ? (
              role === "learner" ? (
                <LearnerDashboard />
              ) : role === "parent" ? (
                <ParentDashboard />
              ) : (
                <EducatorDashboard />
              )
            ) : (
              <StaticPanel
                title={nav.find((n) => n.key === active)?.label ?? "Panel"}
                role={role}
              />
            )}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

/* ---------------- Learner ---------------- */

function LearnerDashboard() {
  const [interests, setInterests] = useState<string[]>(["Cars", "Space", "Animals"]);
  const [editOpen, setEditOpen] = useState(false);
  const [lessonOpen, setLessonOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Aarav! 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here's your learning at a glance — all figures are sample data.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={Flame} label="Current Streak" value="7 Days" note="Personal best!" />
        <StatCard icon={BookOpen} label="Lessons Completed" value="24" note="+3 this week" />
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="size-4 text-success" />
            <span className="text-sm">Engagement</span>
          </div>
          <p className="mt-2 text-2xl font-semibold">87%</p>
          <div className="mt-1 h-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PROGRESS_DATA}>
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="var(--color-success)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-gradient-soft p-6 shadow-card lg:col-span-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Recommended Next Lesson
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-card text-3xl shadow-sm">
                🍕
              </span>
              <div>
                <h2 className="text-lg font-semibold">Fractions in Real Life (Using Pizza!)</h2>
                <p className="text-sm text-muted-foreground">
                  Mathematics · 10 minutes · adapted to Aarav's pace
                </p>
              </div>
            </div>
            <Button onClick={() => setLessonOpen(true)}>
              Start Lesson <Play className="size-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Interests</h2>
            <button
              onClick={() => setEditOpen(true)}
              className="text-sm font-medium text-primary hover:underline"
            >
              + Edit Interests
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {interests.length === 0 ? (
              <p className="text-sm text-muted-foreground">No interests selected yet.</p>
            ) : (
              interests.map((i) => <Pill key={i}>{i}</Pill>)
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2">
          <h2 className="font-semibold">Recent Progress</h2>
          <p className="text-sm text-muted-foreground">Last 7 days (sample data)</p>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PROGRESS_DATA}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="var(--color-primary)"
                  strokeWidth={3}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-card">
          <h2 className="font-semibold">Weekly Goal</h2>
          <RingProgress value={75} />
          <p className="mt-3 text-sm text-muted-foreground">Great progress! Keep it up.</p>
        </div>
      </div>

      <EditInterestsDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        interests={interests}
        setInterests={setInterests}
      />
      <LessonDialog open={lessonOpen} onOpenChange={setLessonOpen} />
    </div>
  );
}

/* ---------------- Parent ---------------- */

const CHILDREN = [
  {
    name: "Aarav",
    age: 9,
    streak: "7 days",
    engagement: 87,
    lessons: 24,
    subjects: "Mathematics, Science, English",
    note: "Responds really well to car and space themed examples.",
  },
  {
    name: "Meera",
    age: 12,
    streak: "3 days",
    engagement: 72,
    lessons: 16,
    subjects: "Science, Reading",
    note: "Prefers shorter sessions with a break halfway through.",
  },
];

function ParentDashboard() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Priya! 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A calm overview of how your children are learning this week (sample data).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={BookOpen} label="Lessons Completed" value="40" note="This week: +9" />
        <StatCard icon={TrendingUp} label="Average Engagement" value="80%" note="Steady" />
        <StatCard icon={Flame} label="Best Streak" value="7 Days" note="Aarav" />
      </div>

      <div className="space-y-4">
        {CHILDREN.map((c) => (
          <div key={c.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-soft text-lg font-semibold text-primary">
                  {c.name[0]}
                </span>
                <div>
                  <h2 className="font-semibold">
                    {c.name} — Age {c.age}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {c.lessons} lessons · {c.engagement}% engagement · {c.streak} streak
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setExpanded(expanded === c.name ? null : c.name)}
              >
                {expanded === c.name ? "Hide Full Progress" : "View Full Progress"}
              </Button>
            </div>

            <div className="mt-4 h-2 w-full rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-gradient-brand"
                style={{ width: `${c.engagement}%` }}
              />
            </div>

            {expanded === c.name ? (
              <div className="mt-5 grid gap-4 rounded-2xl bg-gradient-soft p-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Subjects</p>
                  <p className="mt-1 text-sm font-medium">{c.subjects}</p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
                    Learning note
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                </div>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={PROGRESS_DATA}>
                      <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={11} />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="var(--color-primary)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="font-semibold">Notes from educators</h2>
        <div className="mt-4 space-y-3">
          {[
            {
              from: "Ms. Khan (Educator)",
              body: "Aarav's fraction work has really clicked this week — the pizza lesson helped.",
            },
            {
              from: "Mr. Byrne (Educator)",
              body: "Meera enjoyed the habitats topic. Shorter sessions are working well.",
            },
          ].map((m) => (
            <div key={m.from} className="rounded-xl bg-secondary p-4">
              <p className="text-sm font-medium">{m.from}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Educator ---------------- */

const STUDENTS = [
  { name: "Aarav P.", streak: "7 days", engagement: 87, lessons: 24 },
  { name: "Meera S.", streak: "3 days", engagement: 72, lessons: 16 },
  { name: "Jonah R.", streak: "5 days", engagement: 91, lessons: 21 },
  { name: "Ella M.", streak: "1 day", engagement: 58, lessons: 11 },
  { name: "Kai T.", streak: "9 days", engagement: 79, lessons: 27 },
];

const CLASS_DATA = [
  { subject: "Maths", value: 82 },
  { subject: "Science", value: 74 },
  { subject: "English", value: 68 },
  { subject: "Reading", value: 88 },
];

function EducatorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Ms. Khan! 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Class group 5B — sample data for demonstration only.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={Users} label="Total Students" value="18" note="2 joined this month" />
        <StatCard icon={TrendingUp} label="Average Engagement" value="77%" note="+4% this week" />
        <StatCard
          icon={BookOpen}
          label="Lessons This Week"
          value="96"
          note="Across 4 subjects"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="font-semibold">Students</h2>
          <p className="text-sm text-muted-foreground">Streak and engagement snapshot</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Student</th>
                <th className="px-6 py-3 font-medium">Streak</th>
                <th className="px-6 py-3 font-medium">Lessons</th>
                <th className="px-6 py-3 font-medium">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((s) => (
                <tr key={s.name} className="border-t border-border">
                  <td className="px-6 py-3 font-medium">{s.name}</td>
                  <td className="px-6 py-3 text-muted-foreground">{s.streak}</td>
                  <td className="px-6 py-3 text-muted-foreground">{s.lessons}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-gradient-brand"
                          style={{ width: `${s.engagement}%` }}
                        />
                      </div>
                      <span className="text-muted-foreground">{s.engagement}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="font-semibold">Class Insights</h2>
        <p className="text-sm text-muted-foreground">
          Average engagement by subject (sample data)
        </p>
        <div className="mt-4 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CLASS_DATA}>
              <XAxis dataKey="subject" tickLine={false} axisLine={false} fontSize={12} />
              <Tooltip
                cursor={{ fill: "var(--color-secondary)" }}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-card)",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Shared ---------------- */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
      {children}
    </span>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  note,
}: {
  icon: typeof Flame;
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-4 text-primary" />
        <span className="text-sm">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-success">{note}</p>
    </div>
  );
}

function RingProgress({ value }: { value: number }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mt-4 size-32">
      <svg viewBox="0 0 110 110" className="size-full -rotate-90">
        <circle cx="55" cy="55" r={r} fill="none" stroke="var(--color-secondary)" strokeWidth="10" />
        <circle
          cx="55"
          cy="55"
          r={r}
          fill="none"
          stroke="var(--color-success)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
        {value}%
      </span>
    </div>
  );
}

const PANEL_BLOCKS: Record<string, { title: string; body: string }[]> = {
  "My Learning": [
    { title: "Fractions in Real Life 🍕", body: "Mathematics · 60% complete" },
    { title: "Planets and Orbits 🚀", body: "Science · completed 2 days ago" },
    { title: "Reading Comprehension: Race Cars 🏎️", body: "English · not started" },
  ],
  Interests: [
    { title: "Top interest: Cars", body: "Used in 12 of the last 20 lesson examples." },
    { title: "Space", body: "Great fit for distance, speed and measurement topics." },
    { title: "Animals", body: "Used across science and reading activities." },
  ],
  Progress: [
    { title: "Mathematics", body: "Mastery 72% · steady upward trend" },
    { title: "Science", body: "Mastery 64% · improving" },
    { title: "Weekly time on task", body: "1h 45m across 5 sessions" },
  ],
  Achievements: [
    { title: "🔥 7-day streak", body: "Learning a little every day." },
    { title: "🧠 Curious Explorer", body: "Tried lessons in 3 different subjects." },
    { title: "⭐ Quiz Comeback", body: "Retried a tricky quiz and improved." },
  ],
  Messages: [
    { title: "Ms. Khan (Educator)", body: "Lovely work on fractions this week!" },
    { title: "Parent account", body: "Shall we try a space lesson tonight?" },
  ],
  Settings: [
    { title: "Reduced motion", body: "On — animations kept minimal." },
    { title: "Text size", body: "Large" },
    { title: "Session length", body: "10-minute lessons with breaks" },
  ],
  "My Children": [
    { title: "Aarav — Age 9", body: "24 lessons · 87% engagement" },
    { title: "Meera — Age 12", body: "16 lessons · 72% engagement" },
  ],
  Students: [
    { title: "Group 5B", body: "18 students · average engagement 77%" },
    { title: "Needs a nudge", body: "Ella M. — 1 day streak, 58% engagement" },
  ],
  "Class Insights": [
    { title: "Strongest subject", body: "Reading — 88% average engagement" },
    { title: "Focus area", body: "English — 68% average engagement" },
  ],
};

function StaticPanel({ title, role }: { title: string; role: Role }) {
  const blocks = PANEL_BLOCKS[title] ?? [];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Sample {role} content — this panel is a static preview.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h2 className="font-medium">{b.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>
      <p className="flex items-center gap-2 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
        <Sparkles className="size-4 text-primary" /> Full functionality is on the Adaptly AI
        roadmap.{" "}
        <Link to="/platform" className="font-medium text-primary hover:underline">
          See product features
        </Link>
      </p>
    </div>
  );
}

function EditInterestsDialog({
  open,
  onOpenChange,
  interests,
  setInterests,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  interests: string[];
  setInterests: (v: string[]) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit interests</DialogTitle>
          <DialogDescription>
            Interests shape lesson examples. Changes are local to this demo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          {ALL_INTERESTS.map((item) => {
            const checked = interests.includes(item);
            return (
              <label
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border p-3"
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) =>
                    setInterests(v ? [...interests, item] : interests.filter((i) => i !== item))
                  }
                />
                <span className="text-sm font-medium">{item}</span>
              </label>
            );
          })}
        </div>
        <Button onClick={() => onOpenChange(false)}>Done</Button>
      </DialogContent>
    </Dialog>
  );
}

const LESSON_CARDS = [
  {
    q: "A pizza is cut into 8 equal slices. Aarav eats 2 slices. What fraction of the pizza is left?",
    a: "6/8, which simplifies to 3/4.",
  },
  {
    q: "Two friends share a pizza equally. What fraction does each person get?",
    a: "Each person gets 1/2 of the pizza.",
  },
  {
    q: "If 3/4 of a pizza is left and you eat 1/4 more, how much remains?",
    a: "1/2 of the pizza remains.",
  },
];

function LessonDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const card = LESSON_CARDS[step] ?? LESSON_CARDS[0]!;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setStep(0);
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="size-5 text-primary" /> Fractions in Real Life (Using Pizza!)
          </DialogTitle>
          <DialogDescription>
            Sample lesson content — question {step + 1} of {LESSON_CARDS.length}.
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-2xl bg-gradient-soft p-6">
          <p className="font-medium">{card.q}</p>
          <p className="mt-4 rounded-xl bg-card p-3 text-sm text-muted-foreground">
            <span className="font-medium text-success">Answer: </span>
            {card.a}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Previous
          </Button>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Gauge className="size-3.5" /> Difficulty adapts in the full product
          </span>
          {step === LESSON_CARDS.length - 1 ? (
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          ) : (
            <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
