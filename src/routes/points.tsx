import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/points")({
  head: () => ({
    meta: [
      { title: "Points | Gwinnett AASA" },
      {
        name: "description",
        content:
          "How GAASA points work and where every school stands this year.",
      },
      { property: "og:title", content: "Points | Gwinnett AASA" },
      {
        property: "og:description",
        content:
          "How GAASA points work and where every school stands this year.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Points,
});

// ---- Point system rules. Edit values here as the year goes on. ----
const EVENT_POINTS = [
  { label: "Summer Picnic", points: 25 },
  { label: "Field Day", points: 25 },
  { label: "Game Tournaments", points: 15 },
  { label: "Foodie Friday", points: 10 },
  { label: "Advocacy Day", points: 30 },
  { label: "GAASA Banquet", points: 35 },
  { label: "Volunteering", points: 10 },
];

const BONUS_POINTS = [
  { label: "Repost a GAASA Instagram post", points: 2 },
  { label: "Win a Game Tournament", points: 10 },
];

// ---- Standings. A school's total is the sum of its members' points. ----
// Points so far: Summer Picnic (+25), Foodie Friday (+10), Game Tournament (+15),
// and Instagram reposts (+2 each). A member's number is their combined total.
// To add points: add a member under their school, or raise their number, e.g.:
//   { name: "Jane Doe", points: 25 }
type Member = { name: string; points: number };
type School = { school: string; fullName?: string; members: Member[] };

const STANDINGS: School[] = [
  {
    school: "Archer",
    members: [
      { name: "Aimen Chaudhry", points: 10 },
      { name: "Asifa Chaudhry", points: 10 },
      { name: "Khizra Chaudhry", points: 10 },
      { name: "Nouchee Chang", points: 15 },
    ],
  },
  { school: "Berkmar", members: [] },
  {
    school: "Brookwood",
    members: [
      { name: "Minh Nguyễn", points: 25 },
      { name: "Jason Nguyen", points: 10 },
    ],
  },
  {
    school: "Central Gwinnett",
    members: [
      { name: "Suhan Osman", points: 25 },
      { name: "Ben Phan", points: 25 },
      { name: "Abby Khamphiphone", points: 10 },
    ],
  },
  {
    school: "Collins Hill",
    members: [
      { name: "Mikael Gastador", points: 25 },
      { name: "Kayson Kim", points: 10 },
    ],
  },
  {
    school: "Dacula",
    members: [
      { name: "Enzo", points: 15 },
      { name: "Taylin", points: 15 },
      { name: "Jeremiah", points: 15 },
    ],
  },
  {
    school: "Duluth",
    members: [
      { name: "Kaden Park", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
    ],
  },
  { school: "Grayson", members: [] },
  {
    school: "GSMST",
    fullName: "Gwinnett School of Mathematics, Science, and Technology",
    members: [
      { name: "Vina Vo", points: 25 },
      { name: "Joe Huynh", points: 25 },
      { name: "Sahithya Sundaresasubramanian", points: 15 },
      { name: "Lauren Hwahng", points: 15 },
      { name: "Ruud Montose", points: 15 },
      { name: "Mahdi Mugdho", points: 15 },
      { name: "Ashley H", points: 15 },
      { name: "Devan Joseph", points: 15 },
      { name: "Jayden Hwang", points: 15 },
      { name: "Shambhavi Kapoor", points: 15 },
    ],
  },
  {
    school: "Lanier",
    members: [
      { name: "Ethan Setiadi", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
      { name: "Isaac Nguyen", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
      { name: "Jaydon Tran", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
      { name: "Deborah An", points: 25 },
      { name: "Caleb Mani", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
      { name: "Rebecca Sadler", points: 10 },
      { name: "Chloe Kim", points: 10 },
      { name: "Saira Karim", points: 10 },
      { name: "Yumna Ayaz", points: 10 },
      { name: "Evelyn An", points: 10 },
      { name: "Justin Pongpairoj", points: 15 },
    ],
  },
  { school: "Meadowcreek", members: [] },
  { school: "Mill Creek", members: [] },
  {
    school: "Mountain View",
    members: [
      { name: "Sylvia Her", points: 25 },
      { name: "Sohyeon", points: 25 },
      { name: "Noel Jeong", points: 25 },
      { name: "Vyvy Nguyen", points: 29 }, // Summer Picnic 25 + 4 for Instagram reposts
      { name: "Anh Tran", points: 25 },
      { name: "Gabriella Cruz", points: 25 },
      { name: "Liem Tran", points: 25 },
      { name: "Sunny Mai", points: 25 },
    ],
  },
  {
    school: "Norcross",
    members: [
      { name: "Keith Hoe", points: 25 },
      { name: "Cindy Nguyen", points: 25 },
      { name: "Taylor Yuan", points: 10 },
    ],
  },
  {
    school: "North Gwinnett",
    members: [
      { name: "McKinley Parham", points: 25 },
      { name: "Aiden", points: 15 },
    ],
  },
  {
    school: "Parkview",
    members: [
      { name: "Kemontae Womack", points: 10 },
      { name: "Kaden Nguyen", points: 15 },
    ],
  },
  {
    school: "Paul Duke",
    fullName: "Paul Duke STEM High School",
    members: [{ name: "Mia Santiago", points: 25 }],
  },
  {
    school: "Peachtree Ridge",
    members: [
      { name: "Jayden Phan", points: 25 },
      { name: "Joshua Zhang", points: 25 },
      { name: "Katherine Yang", points: 25 },
      { name: "Ryan LeHoang", points: 25 },
      { name: "Ruby Shin", points: 25 },
      { name: "Paul Kim", points: 25 },
      { name: "Carden Truong", points: 25 },
      { name: "Thai Pham", points: 25 },
      { name: "Claire Yu", points: 10 },
      { name: "Vincent Nguyen", points: 10 },
      { name: "Angie", points: 15 },
    ],
  },
  {
    school: "Seckinger",
    members: [
      { name: "Seung Jun Lee", points: 25 },
      { name: "Cara Bui", points: 10 },
      { name: "Daniel Cosereanu", points: 15 },
      { name: "Jaewon Lee", points: 15 },
    ],
  },
  { school: "South Gwinnett", members: [] },
  { school: "Buford", members: [] },
];

const total = (s: School) => s.members.reduce((sum, m) => sum + m.points, 0);

function RuleRow({ label, points }: { label: string; points: number }) {
  return (
    <li className="flex items-baseline gap-3 py-1.5">
      <span className="text-sm text-foreground/80">{label}</span>
      <span
        aria-hidden
        className="min-w-4 flex-1 border-b border-dotted border-border"
      />
      <span className="font-display text-sm font-semibold tabular-nums text-primary">
        +{points}
      </span>
    </li>
  );
}

function Points() {
  const [openSchool, setOpenSchool] = useState<string | null>(null);
  const sorted = [...STANDINGS].sort((a, b) => total(b) - total(a));
  const max = Math.max(...sorted.map(total), 1);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Points
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          The point system
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Go to events, join in, and support GAASA on social media to earn
          points. Every point counts for you and for your school.
        </p>
      </section>

      {/* How points are earned + what they're worth */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="border border-border bg-card">
          <div className="border-b border-border px-5 py-4 sm:px-7">
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Ways to earn points
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            <div className="bg-card px-5 py-6 sm:px-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Event attendance
              </p>
              <ul className="mt-4 divide-y divide-border/70">
                {EVENT_POINTS.map((e) => (
                  <RuleRow key={e.label} label={e.label} points={e.points} />
                ))}
              </ul>
            </div>
            <div className="bg-card px-5 py-6 sm:px-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Bonus points
              </p>
              <ul className="mt-4 divide-y divide-border/70">
                {BONUS_POINTS.map((e) => (
                  <RuleRow key={e.label} label={e.label} points={e.points} />
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                Bonus points get added on top of what you earn for showing up.
              </p>
            </div>
            <div className="bg-card px-5 py-6 sm:px-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What you can win
              </p>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="font-display text-sm font-semibold">
                    Individual awards
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    The members with the most points can win prizes at Banquet.
                  </p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="font-display text-sm font-semibold">
                    School awards
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    The schools with the most points win money for their AASA's
                    funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standings */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          School standings
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Click a school to see its members and their points.
        </p>

        <div className="mt-8 divide-y divide-border border-y border-border">
          {sorted.map((entry, i) => {
            const isOpen = openSchool === entry.school;
            const schoolTotal = total(entry);
            const members = [...entry.members].sort(
              (a, b) => b.points - a.points,
            );
            return (
              <div key={entry.school}>
                <button
                  type="button"
                  onClick={() => setOpenSchool(isOpen ? null : entry.school)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 py-4 text-left transition-colors hover:bg-secondary/60"
                >
                  <span className="w-8 shrink-0 font-display text-sm font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{entry.school}</p>
                    {entry.fullName && (
                      <p className="truncate text-xs text-muted-foreground">
                        {entry.fullName}
                      </p>
                    )}
                    <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${(schoolTotal / max) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-display text-lg font-bold tabular-nums text-primary">
                    {schoolTotal}
                  </span>
                  <span
                    className={`shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                {isOpen && members.length === 0 && (
                  <p className="ml-13 mr-13 mb-4 border-l-2 border-primary/20 py-1.5 pl-5 text-sm text-muted-foreground">
                    No points yet. Come to the next event!
                  </p>
                )}
                {isOpen && members.length > 0 && (
                  <ul className="ml-13 mr-13 mb-4 space-y-px border-l-2 border-primary/20 pl-5">
                    {members.map((member, idx) => (
                      <li
                        key={`${member.name}-${idx}`}
                        className="flex items-baseline gap-3 py-1.5"
                      >
                        <span className="text-sm text-foreground/80">
                          {member.name}
                        </span>
                        <span
                          aria-hidden
                          className="min-w-4 flex-1 border-b border-dotted border-border"
                        />
                        <span className="font-display text-sm font-semibold tabular-nums text-primary">
                          {member.points}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          We update this after every event.
        </p>
      </section>
    </div>
  );
}
