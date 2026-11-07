import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ANNOUNCEMENTS } from "@/lib/announcements";
import { DISCORD_URL, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/links";
import { PHOTOS, type Photo } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gwinnett AASA | Asian American Student Association" },
      {
        name: "description",
        content:
          "GAASA is a student-run group that connects Asian American students across Gwinnett County through events, food, and community.",
      },
      { property: "og:title", content: "Gwinnett AASA | Asian American Student Association" },
      {
        property: "og:description",
        content:
          "A student-run group for Asian American students across Gwinnett County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Events with a `gallery` list open up when clicked. Leave it as [] to show
// three "Photo" placeholder boxes, or fill it with photos from src/lib/photos.ts.
// Events without `gallery` are plain rows.
type EventItem = { name: string; when: string; desc: string; gallery?: Photo[] };

const EVENTS: EventItem[] = [
  {
    name: "Foodie Fridays",
    when: "Monthly",
    desc: "Each month we support a local Asian-owned business and meet people from other schools.",
    gallery: [],
  },
  {
    name: "Summer Picnic",
    when: "August",
    desc: "The first big hangout of the year. Food, games, and new faces.",
    gallery: [
      PHOTOS.picnicTrio,
      PHOTOS.picnicGroup,
      PHOTOS.picnicFoodTent,
      PHOTOS.picnicCrowd,
      PHOTOS.picnicWatermelon,
    ],
  },
  {
    name: "Field Day",
    when: "Fall",
    desc: "A free, county-wide field day with relay races and tug of war, plus a cultural twist.",
  },
  {
    name: "Game Tourneys",
    when: "Winter",
    desc: "Schools go head to head. These started online during COVID.",
  },
  {
    name: "Movie Nights",
    when: "Spring",
    desc: "Movie nights built around AAPI stories.",
  },
  {
    name: "Annual Banquet",
    when: "April",
    desc: "Our biggest event. Food, games, raffles, awards, and student performances.",
  },
];

// Gallery photos: the first one is the large tile, the rest fill the grid.
const GALLERY = [
  PHOTOS.parkGroup,
  PHOTOS.fieldDayRibbons,
  PHOTOS.banquetTable,
  PHOTOS.picnicPavilion,
  PHOTOS.fieldDayGame,
  PHOTOS.facePainting,
  PHOTOS.aoDaiTable,
  PHOTOS.bingoTable,
  PHOTOS.stagePerformance,
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Gwinnett County, Georgia · Est. 2018
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Gwinnett Asian American Student Association
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            We're a student-run group that connects Asian American students
            across Gwinnett County through food, events, and community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-crimson-deep"
            >
              About us
            </Link>
            <Link
              to="/points"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              School standings
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
          <img
            src={PHOTOS.banquetHall.src}
            alt={PHOTOS.banquetHall.alt}
            className="aspect-[4/3] w-full rounded-lg object-cover object-center sm:aspect-[21/9]"
            width={1754}
            height={978}
          />
          <p className="mt-3 text-xs text-muted-foreground">
            GAASA members gathered at an event.
          </p>
        </div>
      </section>

      {/* Announcements. Edit the list in src/lib/announcements.ts */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Announcements
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
          What&apos;s new
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {ANNOUNCEMENTS.length === 0 ? (
            <p className="py-5 text-sm text-muted-foreground">
              Nothing new right now. Follow us on Instagram for the latest.
            </p>
          ) : (
            ANNOUNCEMENTS.map((item) => (
              <div
                key={`${item.date}-${item.title}`}
                className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary sm:col-span-2">
                  {item.date}
                </p>
                <h3 className="font-display text-lg font-bold sm:col-span-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground sm:col-span-6">
                  {item.body}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Mission — offset two-column */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              01 / Mission
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight">
              What GAASA is
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="leading-relaxed text-muted-foreground">
              GAASA brings together the Asian American Student Associations
              (AASAs) at Gwinnett County high schools. Each school's AASA runs
              on its own, and we put on county-wide events so students from
              different schools can meet, eat, and celebrate our cultures.
              Almost every event is free.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anyone can come, whether you go to a Gwinnett school or not. If
              you show up, you're one of us.
            </p>
          </div>
          <div className="md:col-span-3">
            <dl className="space-y-6 border-l-2 border-primary/20 pl-6">
              {[
                ["20+", "schools"],
                ["100–200", "students at every event"],
                ["$8,000", "raised at Banquet 2024"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-primary">{num}</dt>
                  <dd className="text-sm text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Events — simple list, not cards */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            02 / Events
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
            At least one event a month
          </h2>
          <Accordion
            type="multiple"
            className="mt-8 divide-y divide-border border-y border-border sm:mt-12"
          >
            {EVENTS.map((event) =>
              event.gallery ? (
                <AccordionItem
                  key={event.name}
                  value={event.name}
                  className="border-b-0"
                >
                  <AccordionTrigger className="gap-4 py-5 text-base font-normal hover:no-underline">
                    <span className="grid flex-1 gap-2 sm:grid-cols-12 sm:items-baseline">
                      <span className="font-display text-lg font-bold sm:col-span-4">
                        {event.name}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:col-span-2">
                        {event.when}
                      </span>
                      <span className="text-sm font-normal text-muted-foreground sm:col-span-6">
                        {event.desc}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {event.gallery.length > 0
                        ? event.gallery.map((photo) => (
                            <img
                              key={photo.src}
                              src={photo.src}
                              alt={photo.alt}
                              loading="lazy"
                              className="aspect-square w-full rounded-lg object-cover"
                            />
                          ))
                        : Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="photo-slot aspect-[4/3]">
                              Photo
                            </div>
                          ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div
                  key={event.name}
                  className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:pr-8"
                >
                  <h3 className="font-display text-lg font-bold sm:col-span-4">
                    {event.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary sm:col-span-2">
                    {event.when}
                  </p>
                  <p className="text-sm text-muted-foreground sm:col-span-6">
                    {event.desc}
                  </p>
                </div>
              ),
            )}
          </Accordion>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          03 / Gallery
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
          Photos from past events
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 md:grid-cols-4">
          {GALLERY.map((photo, i) => (
            <div
              key={photo.src}
              className={
                i === 0
                  ? "relative col-span-2 row-span-1 aspect-[4/3] min-h-0 overflow-hidden rounded-lg bg-muted md:row-span-2 md:aspect-auto"
                  : "relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
              }
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

      {/* Closing line */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:py-20 sm:items-end sm:justify-between sm:px-6">
          <h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-tight">
            Anyone can join.
          </h2>
          <div className="sm:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Join our{" "}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Discord
              </a>
              , follow us on Instagram{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {INSTAGRAM_HANDLE}
              </a>
              , or just show up to an event. Questions or want to sponsor us?{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Email us
              </a>
              .
            </p>
            <Link
              to="/leadership"
              className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Meet the board →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
