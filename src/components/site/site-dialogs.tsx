import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import {
  INTEREST_PICTURES,
  LEARNING_STYLE_PICTURES,
  PictureGrid,
  emojiFor,
  type Picture,
} from "@/components/site/pictures";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type PilotReason = "Parent" | "Educator" | "Organisation/Partner" | "Other";

type SiteDialogsValue = {
  openLogin: () => void;
  openPilot: (reason?: PilotReason) => void;
};

// Keep a single context instance even if this module is evaluated twice
// (route code-splitting can create duplicate module instances in dev).
const globalScope = globalThis as typeof globalThis & {
  __adaptlySiteDialogsContext?: React.Context<SiteDialogsValue | null>;
};

const SiteDialogsContext =
  globalScope.__adaptlySiteDialogsContext ??
  (globalScope.__adaptlySiteDialogsContext = createContext<SiteDialogsValue | null>(null));

export function useSiteDialogs() {
  const ctx = useContext(SiteDialogsContext);
  if (!ctx) throw new Error("useSiteDialogs must be used inside SiteDialogsProvider");
  return ctx;
}

export function SiteDialogsProvider({ children }: { children: ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [pilotOpen, setPilotOpen] = useState(false);
  const [pilotReason, setPilotReason] = useState<PilotReason>("Parent");

  const value = useMemo<SiteDialogsValue>(
    () => ({
      openLogin: () => setLoginOpen(true),
      openPilot: (reason) => {
        if (reason) setPilotReason(reason);
        setPilotOpen(true);
      },
    }),
    [],
  );

  return (
    <SiteDialogsContext.Provider value={value}>
      {children}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <PilotDialog
        open={pilotOpen}
        onOpenChange={setPilotOpen}
        reason={pilotReason}
        setReason={setPilotReason}
      />
    </SiteDialogsContext.Provider>
  );
}

const ROLES: Picture[] = [
  { id: "Learner", emoji: "🧒", label: "Learner" },
  { id: "Parent", emoji: "👨‍👩‍👧", label: "Parent" },
  { id: "Educator", emoji: "🧑‍🏫", label: "Educator" },
];
type LoginRole = "Learner" | "Parent" | "Educator";

function LoginDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<LoginRole>("Learner");
  const [error, setError] = useState("");

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setError("");
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log in to Adaptly AI</DialogTitle>
          <DialogDescription>
            Choose a role to explore the matching demo dashboard (sample data only).
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim() || !password.trim()) {
              setError("Please enter both your email and password.");
              return;
            }
            setError("");
            onOpenChange(false);
            navigate({ to: "/dashboard/$role", params: { role: role.toLowerCase() } });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">I am a…</p>
            <PictureGrid
              label="I am a"
              items={ROLES}
              selected={[role]}
              multiple={false}
              onChange={([r]) => r && setRole(r as LoginRole)}
              className="grid-cols-3"
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}


const REASONS: (Picture & { id: PilotReason })[] = [
  { id: "Parent", emoji: "👨‍👩‍👧", label: "Parent or carer" },
  { id: "Educator", emoji: "🧑‍🏫", label: "Teacher" },
  { id: "Organisation/Partner", emoji: "🏫", label: "School or organisation" },
  { id: "Other", emoji: "🙋", label: "Someone else" },
];

/** Each step has a picture so the progress bar itself is readable without words. */
const PILOT_STEPS = [
  { emoji: "🙋", label: "Who" },
  { emoji: "💛", label: "Loves" },
  { emoji: "🧠", label: "Learns" },
  { emoji: "✉️", label: "Contact" },
];

function PilotDialog({
  open,
  onOpenChange,
  reason,
  setReason,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  reason: PilotReason;
  setReason: (r: PilotReason) => void;
}) {
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const many = reason === "Educator" || reason === "Organisation/Partner";
  const titles = [
    "Who is joining?",
    many ? "What do your learners love?" : "What does your learner love?",
    "How do they like to learn?",
    "How can we reach you?",
  ];
  const hints = [
    "Tap a picture.",
    "Tap every picture that fits. We use these to build lessons.",
    "Tap every picture that fits.",
    "A grown-up fills in this last step.",
  ];
  const picked = [...interests, ...styles];

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setError("");
          setSent(false);
          setStep(0);
        }
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{sent ? "Thank you!" : titles[step]}</DialogTitle>
          <DialogDescription>
            {sent ? "Join the Adaptly AI pilot" : `Join the Adaptly AI pilot · ${hints[step]}`}
          </DialogDescription>
        </DialogHeader>

        {sent ? null : (
          <ol className="grid grid-cols-4 gap-2" aria-label={`Step ${step + 1} of 4`}>
            {PILOT_STEPS.map((s, i) => (
              <li key={s.label} className="flex flex-col items-center gap-1">
                <span
                  aria-hidden
                  className={`flex size-10 items-center justify-center rounded-full text-xl transition-colors ${
                    i === step
                      ? "bg-primary-soft ring-2 ring-primary"
                      : i < step
                        ? "bg-success-soft"
                        : "bg-secondary opacity-60"
                  }`}
                >
                  {i < step ? "✅" : s.emoji}
                </span>
                <span
                  className={`text-[11px] font-medium ${
                    i === step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        )}

        {sent ? (
          <div className="rounded-xl bg-success-soft p-6 text-center">
            <CheckCircle2 className="mx-auto size-8 text-success" />
            {picked.length > 0 ? (
              <p aria-hidden className="mt-3 text-3xl">
                {picked.map(emojiFor).join(" ")}
              </p>
            ) : null}
            <p className="mt-3 font-medium">
              Thanks — we'll be in touch about the Adaptly AI pilot programme.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              This demo form doesn't send anything yet.
            </p>
          </div>
        ) : step === 0 ? (
          <PictureGrid
            label={titles[0]!}
            items={REASONS}
            selected={[reason]}
            multiple={false}
            size="lg"
            onChange={([r]) => r && setReason(r as PilotReason)}
            className="grid-cols-2"
          />
        ) : step === 1 ? (
          <PictureGrid
            label={titles[1]!}
            items={INTEREST_PICTURES}
            selected={interests}
            onChange={setInterests}
          />
        ) : step === 2 ? (
          <PictureGrid
            label={titles[2]!}
            items={LEARNING_STYLE_PICTURES}
            selected={styles}
            onChange={setStyles}
            className="grid-cols-3"
          />
        ) : (
          <form
            id="pilot-form"
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!name.trim() || !email.trim() || !email.includes("@")) {
                setError("Please add your name and a valid email address.");
                return;
              }
              setError("");
              setSent(true);
            }}
          >
            <div className="flex items-center gap-3 rounded-xl bg-secondary p-3">
              <span aria-hidden className="text-2xl">
                {REASONS.find((r) => r.id === reason)?.emoji}
              </span>
              <span aria-hidden className="text-2xl">
                {picked.length > 0 ? picked.map(emojiFor).join(" ") : "—"}
              </span>
              <span className="sr-only">
                Your choices: {[reason, ...picked].join(", ")}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pilot-name">Name</Label>
                <Input
                  id="pilot-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pilot-email">Email</Label>
                <Input
                  id="pilot-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pilot-message">Message (optional)</Label>
              <Textarea
                id="pilot-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to explore with us?"
              />
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
          </form>
        )}

        {sent ? null : (
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="outline"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <ArrowLeft className="size-4" /> Back
            </Button>
            {step < PILOT_STEPS.length - 1 ? (
              <Button onClick={() => setStep((s) => s + 1)}>
                {(step === 1 && interests.length === 0) || (step === 2 && styles.length === 0)
                  ? "Skip"
                  : "Next"}{" "}
                <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button type="submit" form="pilot-form">
                Send interest
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
