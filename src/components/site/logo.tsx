import { Link } from "@tanstack/react-router";


export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src="/favicon.png"
        alt="Adaptly AI logo"
        width={36}
        height={36}
        className="size-9 object-contain"
      />
      <span
        className={
          tone === "dark"
            ? "text-lg font-semibold text-navy-foreground"
            : "text-lg font-semibold text-foreground"
        }
      >
        Adaptly AI
      </span>
    </Link>
  );
}
