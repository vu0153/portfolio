import Link from "next/link";

export default function CircleButton({ href, children, variant = "dark", external = false }) {
  const classes =
    variant === "accent"
      ? "bg-accent text-dark-text"
      : "bg-dark text-dark-text";

  const className = `inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-center text-sm leading-tight tracking-[0.02em] transition-transform hover:scale-105 sm:h-32 sm:w-32 ${classes}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
