import { createFileRoute } from "@tanstack/react-router";
import { PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Gwinnett AASA" },
      {
        name: "description",
        content:
          "Learn about the Gwinnett Asian American Student Association: our story, our mission, and the community we serve across Gwinnett County.",
      },
      { property: "og:title", content: "About Us — Gwinnett AASA" },
      {
        property: "og:description",
        content:
          "Our story, our mission, and the AAPI student community we serve across Gwinnett County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "Cultural pride",
    desc: "We preserve and celebrate the diverse AAPI cultures that make up our community — Vietnamese, Korean, Chinese, South Asian, and beyond.",
  },
  {
    title: "Student leadership",
    desc: "Everything we do is 100% student-organized, from Foodie Fridays to a banquet for 250 people.",
  },
  {
    title: "County-wide community",
    desc: "Each school's AASA runs independently, but GAASA brings us all together as one family.",
  },
  {
    title: "Open to everyone",
    desc: "You don't need to be Asian American — or even a Gwinnett student — to join.",
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
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          About us
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          One county. One community.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Officially established in 2018, the Gwinnett Asian American Student
          Association is a collective of Gwinnett County high schools and their
          individual AASAs — working to preserve and educate youth about AAPI
          culture, empower young leaders, and foster bonds across our community.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
              From ten schools to a movement
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              GAASA launched in 2018 with over ten schools already united under
              a common goal. Since then, our county-wide events and diverse
              board of leaders have helped more schools start their own AASA —
              doubling the size of our organization.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today, 100–200 students join every event we run, and cultural
              clubs from outside Gwinnett regularly come along too. Our
              long-term dream: grow into the Georgia Asian American Student
              Association, with every county building a community where culture
              is celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Values — plain list with rules */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            What we stand for
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {VALUES.map((value, i) => (
              <div key={value.title} className="grid gap-2 py-6 sm:grid-cols-12">
                <span className="font-display text-sm font-bold text-primary sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold sm:col-span-4">
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
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
    </div>
  );
}
