import { Flame, BookOpen, TrendingUp } from "lucide-react";

/** Static, non-interactive snapshot of the learner dashboard, used in the hero. */
export function DashboardSnapshot() {
  return (
    <div className="rounded-3xl border border-border bg-card p-3 shadow-card">
      <div className="flex overflow-hidden rounded-2xl">
        <div className="hidden w-28 shrink-0 flex-col gap-2 bg-navy p-3 sm:flex">
          <div className="h-2 w-14 rounded-full bg-navy-muted/60" />
          {["Dashboard", "My Learning", "Interests", "Progress"].map((label, i) => (
            <div
              key={label}
              className={`rounded-lg px-2 py-1.5 text-[10px] ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-navy-muted"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="flex-1 bg-gradient-soft p-4">
          <p className="text-sm font-semibold">Welcome back, Aarav! 👋</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: Flame, label: "Streak", value: "7 Days" },
              { icon: BookOpen, label: "Lessons", value: "24" },
              { icon: TrendingUp, label: "Engagement", value: "87%" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-2.5 shadow-sm">
                <s.icon className="size-3.5 text-primary" />
                <p className="mt-1 text-xs font-semibold">{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-card p-3 shadow-sm">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
              Recommended next lesson
            </p>
            <p className="mt-1 text-xs font-semibold">Fractions in Real Life (Using Pizza!) 🍕</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
              <div className="h-1.5 w-3/4 rounded-full bg-gradient-brand" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {["Cars", "Space", "Animals"].map((c) => (
              <span
                key={c}
                className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
