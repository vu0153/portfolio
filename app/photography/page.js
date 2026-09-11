export const metadata = {
  title: "Photography",
  description: "A gallery of landscape and outdoor photography — coming soon.",
};

export default function PhotographyPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Photography</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70">
        A gallery of my landscape and outdoor photography is coming soon.
      </p>
    </div>
  );
}
