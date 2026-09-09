import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";


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

const ROLES = ["Learner", "Parent", "Educator"] as const;
type LoginRole = (typeof ROLES)[number];

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
            <Label htmlFor="login-role">Role</Label>
            <select
              id="login-role"
              value={role}
              onChange={(e) => setRole(e.target.value as LoginRole)}
              className="h-10 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
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


const REASONS: PilotReason[] = ["Parent", "Educator", "Organisation/Partner", "Other"];

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setError("");
          setSent(false);
        }
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Join the Adaptly AI pilot</DialogTitle>
          <DialogDescription>
            Tell us a little about you and we'll be in touch about early pilots.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="rounded-xl bg-success-soft p-6 text-center">
            <CheckCircle2 className="mx-auto size-8 text-success" />
            <p className="mt-3 font-medium">
              Thanks — we'll be in touch about the Adaptly AI pilot programme.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              This demo form doesn't send anything yet.
            </p>
          </div>
        ) : (
          <form
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
              <Label htmlFor="pilot-role">I am a…</Label>
              <select
                id="pilot-role"
                value={reason}
                onChange={(e) => setReason(e.target.value as PilotReason)}
                className="h-10 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
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
            <Button type="submit" className="w-full">
              Send interest
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
