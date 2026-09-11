import CircleButton from "./CircleButton";

export default function IntroStatement() {
  return (
    <section className="bg-paper px-[var(--page-x)] py-20 text-ink sm:py-32">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <p
          className="max-w-3xl font-normal leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: "clamp(1.6rem, 1.1rem + 2vw, 3rem)" }}
        >
          I work in network operations and IT support, with a growing focus
          on cybersecurity — and a personal practice in photography on the
          side.
        </p>
        <CircleButton href="/about">About me</CircleButton>
      </div>
    </section>
  );
}
