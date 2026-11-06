import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gwinnett AASA — Asian American Student Association" },
      {
        name: "description",
        content:
          "Gwinnett AASA is a student-led organization connecting Asian-American students across Gwinnett County schools through culture, events, and community.",
      },
      { property: "og:title", content: "Gwinnett AASA — Asian American Student Association" },
      {
        property: "og:description",
        content:
          "A student-led organization celebrating Asian-American culture across Gwinnett County schools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EVENTS = [
  { name: "Foodie Fridays", when: "Monthly", desc: "Tasting the flavors of our cultures, one Friday at a time." },
  { name: "Summer Picnic", when: "August", desc: "Kicking off the year with food, games, and new friends." },
  { name: "Field Day", when: "Fall", desc: "School vs. school competition across the county." },
  { name: "Game Tourneys", when: "Winter", desc: "Bringing out everyone's competitive side." },
  { name: "Movie Nights", when: "Spring", desc: "Celebrating AAPI stories on the big screen." },
  { name: "Annual Banquet", when: "April", desc: "Our biggest night — dinner, performances, and awards." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Gwinnett County, Georgia — est. 2018
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Gwinnett Asian American Student Association
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            A student-led organization connecting our Asian-American community
            and celebrating our cultures across Gwinnett County schools.
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
            src={heroImage}
            alt="Asian cultural festival with dragon dance and lanterns"
            className="aspect-[21/9] w-full rounded-lg object-cover"
            width={1920}
            height={1088}
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Dragon dance at the annual Banquet — replace with your own photo.
          </p>
        </div>
      </section>

      {/* Mission — offset two-column */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              01 — Mission
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight">
              Culture celebrated. Community connected.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="leading-relaxed text-muted-foreground">
              GAASA unites the Asian American Student Associations of Gwinnett
              County's high schools into one county-wide family. We promote
              AAPI awareness, empower young leaders, and create spaces where
              our cultures are shared and celebrated.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anyone is welcome — Gwinnett student or not. If you show up, you
              belong.
            </p>
          </div>
          <div className="md:col-span-3">
            <dl className="space-y-6 border-l-2 border-primary/20 pl-6">
              {[
                ["19+", "schools"],
                ["200+", "students per event"],
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
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            02 — Events
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
            What we run each year
          </h2>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {EVENTS.map((event) => (
              <div
                key={event.name}
                className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline"
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
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          03 — Gallery
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
          From our community
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="photo-slot col-span-2 row-span-2 aspect-square">Photo</div>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="photo-slot aspect-square">
              Photo
            </div>
          ))}
        </div>
      </section>

      {/* Closing line */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-tight">
            Anyone can join. Really.
          </h2>
          <div className="sm:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Follow our socials or come to any event and you're already part
              of the family.
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
