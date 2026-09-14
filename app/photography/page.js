import StoryPhoto from "@/components/photography/StoryPhoto";
import Gallery from "@/components/photography/Gallery";
import Reveal from "@/components/landing/Reveal";
import CircleButton from "@/components/landing/CircleButton";

export const metadata = {
  title: "Photography",
  description:
    "The story of how photography found Ricky Vu — from a second-hand Nikon D90 in 2012 to co-founding Memory Lane Photography in Adelaide.",
};

export default function PhotographyPage() {
  return (
    <div className="bg-paper text-ink">
      <Gallery />

      {/* Header */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-4 px-[var(--page-x)] pt-16 pb-10 sm:pt-24">
        <p className="text-xs tracking-[0.14em] text-muted uppercase">Photography</p>
        <h1
          className="font-normal leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.4rem, 1.6rem + 3vw, 4.5rem)" }}
        >
          A camera, a habit, a way of paying attention.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Photography found me quietly, somewhere between technology, work, and the ordinary
          rhythm of my days. It never really left.
        </p>
      </Reveal>

      {/* 01 — First camera */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[var(--page-x)] py-14 sm:flex-row sm:items-start sm:gap-16 sm:py-20">
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">01 — 2012</p>
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">First camera, first frame</h2>
          <p className="leading-relaxed text-muted">
            In 2012, I had just finished university, with more curiosity than money. I started
            noticing photography everywhere: the way light hit a street, the way one photo could
            hold a feeling. I was already into IT, but this new interest stuck around too.
          </p>
          <p className="leading-relaxed text-muted">
            It took a while before I could actually buy a camera. I worked, saved some money, and
            finally got my first one: a second-hand Nikon D90 with a Tamron 17-50mm f/2.8 lens. It
            wasn&apos;t a great camera by today&apos;s standards, but it was mine, and that was enough to
            start.
          </p>
        </div>
        <StoryPhoto
          src="/photos/photography/photo1.webp"
          alt="Self-portrait in a mirror holding the first camera, a Nikon D90"
          width={1024}
          height={680}
          priority
          className="w-full sm:w-[380px]"
        />
      </Reveal>

      {/* 02 — Learning to see + grandmother */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[var(--page-x)] py-14 sm:py-20">
        <div className="flex flex-col gap-8 sm:flex-row-reverse sm:items-start sm:gap-16">
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-xs tracking-[0.14em] text-muted uppercase">02</p>
            <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">Learning to see</h2>
            <p className="leading-relaxed text-muted">
              With that camera, I started noticing things I used to just walk past — people going
              about their day, the streets and countryside back home, a kid laughing at nothing in
              particular. I had no training and no real technique. I just carried the camera
              around and used it whenever something looked worth keeping.
            </p>
          </div>
          <StoryPhoto
            src="/photos/photography/photo2.webp"
            alt="A young girl in Vietnam smiling and making a peace sign at the camera"
            width={1024}
            height={680}
            className="w-full sm:w-[380px]"
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[0.85fr_1fr] sm:gap-16">
          <StoryPhoto
            src="/photos/photography/photo3.webp"
            alt="Ricky's grandmother, seated, with his mother standing beside her during a Tet holiday gathering"
            width={1500}
            height={2000}
            className="mx-auto w-full max-w-[320px]"
          />
          <div className="flex flex-col gap-4">
            <p className="leading-relaxed text-muted">
              Looking back at those early photos, I could tell something was missing. They
              weren&apos;t what I had pictured, and a few times I thought about giving up the camera
              for good.
            </p>
            <blockquote className="border-l-2 border-ink/20 pl-5 text-xl leading-snug font-normal tracking-tight">
              &ldquo;A perfect photograph is the most natural one, the most real one — because
              simplicity and honesty are always the most beautiful things in life.&rdquo;
            </blockquote>
            <p className="leading-relaxed text-muted">
              That was my grandmother. She&apos;s gone now, but I still think about that line every
              time I pick up a camera.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 03 — Community: weddings + portraits */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[var(--page-x)] py-14 sm:py-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">03</p>
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">Learning by doing, together</h2>
          <p className="max-w-2xl leading-relaxed text-muted">
            From there I started actually building skills — joining local photography groups,
            comparing notes with other people who were into it, and picking up my camera for
            friends. I shot weddings for people I knew, and portraits for whoever wanted one. Most
            of what I learned came from doing it, not reading about it: how to read a room, how to
            get someone to relax in front of the camera.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <StoryPhoto
            src="/photos/photography/photo4.webp"
            alt="A newly married couple embracing quietly in a pine forest"
            width={2000}
            height={1328}
          />
          <StoryPhoto
            src="/photos/photography/photo5.webp"
            alt="A wedding couple posing with two groomsmen in front of a waterfall"
            width={2000}
            height={1328}
          />
          <StoryPhoto
            src="/photos/photography/photo8.webp"
            alt="A bride and groom smiling at each other in a forest, holding a bouquet"
            width={1328}
            height={2000}
          />
          <StoryPhoto
            src="/photos/photography/photo9.webp"
            alt="A couple embracing beneath a lone tree under a dramatic sky"
            width={2000}
            height={1250}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:mx-auto sm:w-2/3 sm:gap-6">
          <StoryPhoto
            src="/photos/photography/photo6.webp"
            alt="Portrait of a young woman in a black hat, photographed on a sunlit street"
            width={1329}
            height={2000}
            caption="Portrait work for friends"
          />
          <StoryPhoto
            src="/photos/photography/photo7.webp"
            alt="Backlit portrait of a woman turning toward the camera near a bright window"
            width={680}
            height={1024}
          />
        </div>
      </Reveal>

      {/* 04 — Australia */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[var(--page-x)] py-14 sm:py-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">04 — 2018</p>
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">A new horizon</h2>
          <p className="max-w-2xl leading-relaxed text-muted">
            In 2018, I moved to Australia for the first time, and it changed how I used a camera.
            I liked the open landscape and the people here, and I started going on trips just to
            take photos — not for anyone else, just for me. That was new. Up until then I&apos;d
            mostly shot for other people.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <StoryPhoto
            src="/photos/photography/photo10.webp"
            alt="A man standing on rocks by a lake in Australia, looking up at the sky"
            width={2000}
            height={1328}
          />
          <StoryPhoto
            src="/photos/photography/photo11.webp"
            alt="A calm Australian lake at dusk with mountains silhouetted on the horizon"
            width={2000}
            height={1328}
          />
        </div>
      </Reveal>

      {/* 05 — Memory Lane Photography */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[var(--page-x)] py-14 sm:py-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">05 — Adelaide</p>
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">Memory Lane Photography</h2>
          <p className="max-w-2xl leading-relaxed text-muted">
            After I finished studying in Adelaide, I finally acted on an idea I&apos;d had for years
            and started{" "}
            <a
              href="https://memorylaneadelaide.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink underline underline-offset-4 hover:opacity-70"
            >
              memorylaneadelaide.com
            </a>{" "}
            with my friend Mark Lee. Our motto is simple: &ldquo;Photos that feel calm, real and
            personal.&rdquo; We think about photography the same way — no forced poses, no rush. I
            run it alongside my IT work, and we also do free portrait sessions for the community
            sometimes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[0.8fr_1fr_1fr] sm:gap-6">
          <StoryPhoto
            src="/photos/photography/photo14.webp"
            alt="Portrait of Mark Lee, co-founder of Memory Lane Photography, by the coast"
            width={1501}
            height={2000}
            caption="Mark Lee, co-founder"
          />
          <StoryPhoto
            src="/photos/photography/photo12.webp"
            alt="A newlywed couple laughing together by the beach"
            width={1501}
            height={2000}
          />
          <StoryPhoto
            src="/photos/photography/photo13.webp"
            alt="A couple holding their Certificate of Marriage after an outdoor ceremony in Adelaide"
            width={1501}
            height={2000}
          />
        </div>

        <StoryPhoto
          src="/photos/photography/photo15.webp"
          alt="Ricky and Mark Lee standing together in a canola field"
          width={2000}
          height={1501}
          caption="Ricky and Mark, Memory Lane Photography"
          className="mx-auto w-full sm:w-4/5"
        />
      </Reveal>

      {/* 06 — Road trips around Adelaide */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[var(--page-x)] py-14 sm:py-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">06 — Ongoing</p>
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
            Still exploring: road trips around Adelaide
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted">
            These days, when I need a break, I drive out of the city into the hills and farmland
            around Adelaide. I like that landscape — sheep in a paddock at golden hour, one tree
            standing on its own, a dirt road heading toward the hills at sunset. No client, no
            plan, just me and a camera before the light goes. It&apos;s the same reason I picked up a
            camera back in 2012: photography is mostly just paying attention.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <StoryPhoto
            src="/photos/photography/trip1.webp"
            alt="Green farmland stretching toward distant hills at sunset near Adelaide"
            width={2000}
            height={1083}
          />
          <StoryPhoto
            src="/photos/photography/trip2.webp"
            alt="A wide open paddock at dusk with a treeline on the horizon"
            width={2000}
            height={1072}
          />
          <StoryPhoto
            src="/photos/photography/trip4.webp"
            alt="A flock of sheep grazing in a golden-lit paddock in the Adelaide Hills"
            width={2000}
            height={1122}
          />
          <StoryPhoto
            src="/photos/photography/trip5.webp"
            alt="Sheep grazing near a solitary tree as the sun sets over the hills"
            width={2000}
            height={1161}
          />
        </div>
        <StoryPhoto
          src="/photos/photography/trip6.webp"
          alt="A lone tree silhouetted against a glowing sunset with sheep grazing nearby"
          width={2000}
          height={1209}
          className="mx-auto w-full sm:w-4/5"
        />
        <StoryPhoto
          src="/photos/photography/trip3.webp"
          alt="A quiet country road lined with fences leading toward the hills at golden hour"
          width={2000}
          height={1175}
          className="mx-auto w-full sm:w-4/5"
        />
      </Reveal>

      {/* Closing CTA */}
      <Reveal className="mx-auto flex max-w-[1000px] flex-col items-start gap-6 px-[var(--page-x)] py-16 sm:flex-row sm:items-center sm:justify-between sm:py-24">
        <p className="max-w-md text-xl leading-snug font-normal tracking-tight">
          Want to see more, or talk about a shoot?
        </p>
        <CircleButton href="https://memorylaneadelaide.com" external>
          Memory Lane
        </CircleButton>
      </Reveal>
    </div>
  );
}
