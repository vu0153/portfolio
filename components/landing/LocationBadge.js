export default function LocationBadge({ label = "Based in", place }) {
  return (
    <div className="inline-flex w-fit items-center gap-4 rounded-full bg-dark py-2 pl-5 pr-2 text-dark-text">
      <span className="text-sm leading-tight tracking-[0.02em] sm:text-base">
        {label}
        <br />
        {place}
      </span>

      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark-text/10 sm:h-14 sm:w-14">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="globe-spin h-7 w-7 sm:h-8 sm:w-8"
        >
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      </span>
    </div>
  );
}
