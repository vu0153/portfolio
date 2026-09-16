const paths = [
  { d: "M20 90 L145 90 L145 190 L360 190", duration: "7s", delay: "0s" },
  { d: "M40 320 L40 440 L205 440 L205 500", duration: "9s", delay: "-2s" },
  { d: "M280 60 L280 150 L470 150 L470 260 L560 260", duration: "8s", delay: "-4s" },
  { d: "M400 400 L400 480 L580 480", duration: "6.5s", delay: "-1s" },
  { d: "M90 540 L205 540 L205 590", duration: "10s", delay: "-6s" },
  { d: "M480 40 L480 85 L635 85 L635 200", duration: "7.5s", delay: "-3s" },
  { d: "M540 340 L595 340 L595 420 L700 420", duration: "8.5s", delay: "-5s" },
];

const nodes = [[280, 150], [470, 150], [470, 260], [400, 400]];

// Small self-drawn line-art icons (shield, lock, wifi, chip) — same stroke
// style as the site's other hand-drawn icons (LocationBadge, Gallery camera).
const icons = [
  {
    key: "shield",
    x: 145,
    y: 90,
    delay: "0s",
    node: (
      <>
        <path d="M0 -13 L11 -8 V3 C11 10 6 15 0 17 C-6 15 -11 10 -11 3 V-8 Z" />
        <path d="M-5 1 L-1 6 L6 -4" />
      </>
    ),
  },
  {
    key: "lock",
    x: 560,
    y: 260,
    delay: "-1.5s",
    node: (
      <>
        <rect x="-9" y="-2" width="18" height="14" rx="2" />
        <path d="M-6 -2 v-6 a6 6 0 0 1 12 0 v6" />
      </>
    ),
  },
  {
    key: "wifi",
    x: 205,
    y: 500,
    delay: "-3s",
    node: (
      <>
        <path d="M-13 5 a18 18 0 0 1 26 0" />
        <path d="M-8 10 a11 11 0 0 1 16 0" />
        <circle cx="0" cy="15" r="1.8" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    key: "chip",
    x: 635,
    y: 85,
    delay: "-4.5s",
    node: (
      <>
        <rect x="-10" y="-10" width="20" height="20" rx="2" />
        <path d="M0 -10 v-6 M0 10 v6 M-10 0 h-6 M10 0 h6" />
      </>
    ),
  },
];

export default function CircuitPattern({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 760 620"
      preserveAspectRatio="none"
      className={`circuit-pattern h-full w-full ${className}`}
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="10 14"
          className="circuit-line"
          style={{ animationDuration: p.duration, animationDelay: p.delay }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" className="circuit-node" />
      ))}
      {icons.map((icon) => (
        <g
          key={icon.key}
          transform={`translate(${icon.x} ${icon.y})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="circuit-icon"
          style={{ animationDelay: icon.delay }}
        >
          {icon.node}
        </g>
      ))}
    </svg>
  );
}
