type Variant = "pinstripe" | "herringbone" | "houndstooth" | "weave";
type Tone = "navy" | "charcoal" | "cream";

const tones: Record<Tone, { base: string; line: string }> = {
  navy: { base: "#10192e", line: "#c7a86c" },
  charcoal: { base: "#23262b", line: "#ab8a54" },
  cream: { base: "#efe7d6", line: "#10192e" },
};

function patternContent(variant: Variant, line: string) {
  switch (variant) {
    case "pinstripe":
      return (
        <g stroke={line} strokeWidth="1" opacity="0.35">
          <line x1="6" y1="0" x2="6" y2="24" />
        </g>
      );
    case "herringbone":
      return (
        <g stroke={line} strokeWidth="1.4" opacity="0.32" fill="none">
          <path d="M0 12 L8 0 M8 24 L16 12" />
        </g>
      );
    case "houndstooth":
      return (
        <g fill={line} opacity="0.28">
          <rect x="0" y="0" width="6" height="6" />
          <rect x="6" y="6" width="6" height="6" />
        </g>
      );
    case "weave":
    default:
      return (
        <g stroke={line} strokeWidth="1" opacity="0.3">
          <line x1="0" y1="8" x2="24" y2="8" />
          <line x1="0" y1="16" x2="24" y2="16" />
          <line x1="8" y1="0" x2="8" y2="24" />
          <line x1="16" y1="0" x2="16" y2="24" />
        </g>
      );
  }
}

export function FabricPlaceholder({
  variant = "weave",
  tone = "navy",
  label,
  className = "",
}: {
  variant?: Variant;
  tone?: Tone;
  label?: string;
  className?: string;
}) {
  const { base, line } = tones[tone];
  const patternId = `fabric-${variant}-${tone}`;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: base }}>
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
            {patternContent(variant, line)}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 15% 10%, transparent 40%, rgba(0,0,0,0.25) 100%)",
        }}
      />
      {label ? (
        <div className="absolute bottom-3 left-3 right-3">
          <span className="eyebrow inline-block rounded-full bg-black/30 px-3 py-1 text-cream backdrop-blur-sm">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
