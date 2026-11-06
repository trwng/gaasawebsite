import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Gwinnett AASA" },
      {
        name: "description",
        content:
          "Meet the student executive board leading the Gwinnett Asian American Student Association.",
      },
      { property: "og:title", content: "Leadership — Gwinnett AASA" },
      {
        property: "og:description",
        content:
          "Meet the student executive board leading the Gwinnett Asian American Student Association.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Leadership,
});

// Replace names, schools, and photos with your actual board members.
const BOARD = [
  { name: "Name Here", role: "President", school: "School Name" },
  { name: "Name Here", role: "Vice President", school: "School Name" },
  { name: "Name Here", role: "Secretary", school: "School Name" },
  { name: "Name Here", role: "Treasurer", school: "School Name" },
  { name: "Name Here", role: "Events Chair", school: "School Name" },
  { name: "Name Here", role: "Events Chair", school: "School Name" },
  { name: "Name Here", role: "Public Relations", school: "School Name" },
  { name: "Name Here", role: "Public Relations", school: "School Name" },
  { name: "Name Here", role: "Historian", school: "School Name" },
  { name: "Name Here", role: "Outreach Chair", school: "School Name" },
  { name: "Name Here", role: "Outreach Chair", school: "School Name" },
];

function Leadership() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Leadership
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          The Executive Board
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          GAASA is 100% student-organized. Our board of Gwinnett County high
          schoolers plans and directs every event of the year — from Foodie
          Fridays to the annual Banquet.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BOARD.map((member, i) => (
            <div key={`${member.role}-${i}`}>
              <div className="photo-slot aspect-[4/5]">Headshot</div>
              <h3 className="mt-4 font-display text-base font-bold">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-primary">{member.role}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {member.school}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Want to lead?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Board applications open each year. Start by getting involved with
            your school's AASA — or help us start one at your school.
          </p>
        </div>
      </section>
    </div>
  );
}
