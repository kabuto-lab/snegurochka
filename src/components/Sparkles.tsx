import { FC } from "react";
import { Sparkle } from "lucide-react";

const SPARKLES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 6.35 + 3) % 96,
  top: (i * 17.3 + 6) % 88,
  size: 7 + (i % 3) * 4,
  duration: 2.4 + (i % 5) * 0.6,
  delay: i * 0.33,
  accent: i % 3 === 0,
}));

interface IProps {
  count?: number;
}

export const Sparkles: FC<IProps> = ({ count = 12 }) => (
  <div className="pointer-events-none absolute inset-0">
    {SPARKLES.slice(0, count).map((sparkle, i) => (
      <span
        key={i}
        className="absolute z-3 animate-[twinkle_ease-in-out_infinite]"
        style={{
          left: `${sparkle.left}%`,
          top: `${sparkle.top}%`,
          width: sparkle.size,
          height: sparkle.size,
          animationDuration: `${sparkle.duration}s`,
          animationDelay: `${sparkle.delay}s`,
          color: sparkle.accent ? "var(--accent-light)" : "var(--foreground)",
        }}
      >
        <Sparkle width="100%" height="100%" fill="currentColor" stroke="none" />
      </span>
    ))}
  </div>
);
