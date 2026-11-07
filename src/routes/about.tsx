import { createFileRoute, Link } from "@tanstack/react-router";
import { PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Gwinnett AASA" },
      {
        name: "description",
        content:
          "How GAASA started, what we do, and how the AASAs at Gwinnett County schools work together.",
      },
      { property: "og:title", content: "About Us | Gwinnett AASA" },
      {
        property: "og:description",
        content:
          "How GAASA started and what we do for Asian American students across Gwinnett County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "Student-run",
    desc: "Students plan everything, from Foodie Fridays to a banquet for 250 people. Adult sponsors and local businesses help us out, but the work is ours.",
  },
  {
    title: "Free events",
    desc: "We do fundraisers so almost every event costs nothing to attend.",
  },
  {
    title: "Open to anyone",
    desc: "You don't have to be Asian American or go to a Gwinnett school. If you come, you're in.",
  },
  {
    title: "All our cultures",
    desc: "Vietnamese, Korean, Chinese, South Asian, and more. Banquet performances are where it shows the most.",
  },
];

const BAND = [
  PHOTOS.bingoTable,
  PHOTOS.stagePerformance,
  PHOTOS.picnicPavilion,
  PHOTOS.aoDaiTable,
  PHOTOS.fieldDayGame,
  PHOTOS.facePainting,
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          About GAASA
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          GAASA became official in 2018. It's made up of the Asian American
          Student Associations (AASAs) at Gwinnett County high schools. Every
          school's AASA runs on its own, and GAASA is how they all come
          together for county-wide events.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={PHOTOS.coffeeByHandGroup.src}
              alt={PHOTOS.coffeeByHandGroup.alt}
              className="aspect-[4/3] w-full rounded-lg object-cover"
              width={1558}
              height={1028}
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              How we started
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We already had more than ten schools when GAASA began in 2018.
              Since then our events and our board have helped more schools
              start their own AASA, so we've about doubled in size. Now 100 to
              200 students come to every event, and clubs from outside Gwinnett
              show up too.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              COVID hit not long after we started. Events in 2020 and 2021 were
              canceled and we lost some momentum. We switched to online game
              tournaments and stayed active on social media so everyone could
              still feel connected from home.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Next, we want to reach schools in other counties that are
              interested in our events. Eventually we'd like to become the
              Georgia Asian American Student Association, with every county
              doing its own version of what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values — plain list with rules */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            How we run things
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {VALUES.map((value, i) => (
              <div key={value.title} className="grid gap-2 py-6 sm:grid-cols-12">
                <h3 className="font-display text-lg font-bold sm:col-span-5">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {BAND.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Points */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            School points
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Students earn points for their school by coming to events. See how
            points work and where your school ranks.
          </p>
          <Link
            to="/points"
            className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Check the standings
          </Link>
        </div>
      </section>
    </div>
  );
}
