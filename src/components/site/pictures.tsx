import { Check } from "lucide-react";

/**
 * Picture-first choices. Many autistic children (and pre-readers) find a picture
 * far easier to understand than a word, so every choice a learner might make is
 * shown as a large picture with a short word underneath.
 */
export type Picture = { id: string; emoji: string; label: string };

export const INTEREST_PICTURES: Picture[] = [
  { id: "Cars", emoji: "🚗", label: "Cars" },
  { id: "Food", emoji: "🍕", label: "Food" },
  { id: "Animals", emoji: "🐶", label: "Animals" },
  { id: "Space", emoji: "🚀", label: "Space" },
  { id: "Football", emoji: "⚽", label: "Football" },
  { id: "Music", emoji: "🎵", label: "Music" },
  { id: "Dinosaurs", emoji: "🦕", label: "Dinosaurs" },
  { id: "Trains", emoji: "🚂", label: "Trains" },
  { id: "Drawing", emoji: "🎨", label: "Drawing" },
  { id: "Games", emoji: "🎮", label: "Games" },
  { id: "Nature", emoji: "🌳", label: "Nature" },
  { id: "Building", emoji: "🧱", label: "Building" },
];

export const LEARNING_STYLE_PICTURES: Picture[] = [
  { id: "Pictures", emoji: "🖼️", label: "Pictures" },
  { id: "Listening", emoji: "🎧", label: "Listening" },
  { id: "Hands-on", emoji: "✋", label: "Hands-on" },
  { id: "Reading", emoji: "📖", label: "Reading" },
  { id: "Short bursts", emoji: "⏱️", label: "Short bursts" },
  { id: "Quiet & calm", emoji: "🤫", label: "Quiet & calm" },
];

export function emojiFor(id: string) {
  return [...INTEREST_PICTURES, ...LEARNING_STYLE_PICTURES].find((p) => p.id === id)?.emoji ?? "⭐";
}

export function PictureCard({
  emoji,
  label,
  selected,
  onClick,
  kind = "toggle",
  size = "md",
}: {
  emoji: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  /** "radio" for pick-one groups, "toggle" for pick-many groups. */
  kind?: "toggle" | "radio";
  size?: "md" | "lg" | undefined;
}) {
  const a11y =
    kind === "radio"
      ? ({ role: "radio", "aria-checked": selected } as const)
      : ({ "aria-pressed": selected } as const);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      {...a11y}
      className={`relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 bg-card text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        size === "lg" ? "min-h-32 p-4" : "min-h-24 p-3"
      } ${
        selected
          ? "border-primary bg-primary-soft shadow-soft"
          : "border-border hover:border-primary/50"
      }`}
    >
      {selected ? (
        <span className="absolute right-1.5 top-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : null}
      <span aria-hidden className={`leading-none ${size === "lg" ? "text-5xl" : "text-4xl"}`}>
        {emoji}
      </span>
      <span className="text-xs font-medium leading-tight">{label}</span>
    </button>
  );
}

/** A grid of picture cards. `multiple` lets learners pick more than one. */
export function PictureGrid({
  items,
  selected,
  onChange,
  multiple = true,
  label,
  className = "grid-cols-3 sm:grid-cols-4",
  size,
}: {
  items: Picture[];
  selected: string[];
  onChange: (next: string[]) => void;
  multiple?: boolean;
  label: string;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <div
      role={multiple ? "group" : "radiogroup"}
      aria-label={label}
      className={`grid gap-2.5 ${className}`}
    >
      {items.map((p) => {
        const on = selected.includes(p.id);
        return (
          <PictureCard
            key={p.id}
            emoji={p.emoji}
            label={p.label}
            selected={on}
            size={size}
            kind={multiple ? "toggle" : "radio"}
            onClick={() =>
              onChange(
                multiple ? (on ? selected.filter((s) => s !== p.id) : [...selected, p.id]) : [p.id],
              )
            }
          />
        );
      })}
    </div>
  );
}
