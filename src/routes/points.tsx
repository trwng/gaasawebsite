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
  { label: "Winter Banquet", points: 30 },
  { label: "GAASA Banquet", points: 35 },
  { label: "Volunteering", points: 10 },
];

const BONUS_POINTS = [
  { label: "Repost a GAASA Instagram post", points: 2 },
  { label: "Win a Game Tournament", points: 10 },
  { label: "Perform at the GAASA Banquet", points: 15 },
];

// ---- Standings. A school's total is the sum of its members' points. ----
// Points so far: Summer Picnic (+25), Foodie Friday (+10), Game Tournament (+15),
// Field Day (+25), and Instagram reposts (+2 each). A member's number is their combined total.
// Names are first name + last initial only, to protect people's privacy.
// To add points: add a member under their school, or raise their number, e.g.:
//   { name: "Jane D.", points: 25 }
type Member = { name: string; points: number };
type School = { school: string; fullName?: string; members: Member[] };

const STANDINGS: School[] = [
  {
    school: "Archer",
    members: [
      { name: "Aimen C.", points: 10 },
      { name: "Asifa C.", points: 10 },
      { name: "Khizra C.", points: 10 },
      { name: "Nouchee C.", points: 15 },
    ],
  },
  { school: "Berkmar", members: [] },
  {
    school: "Brookwood",
    members: [
      { name: "Minh N.", points: 25 },
      { name: "Jason N.", points: 35 }, // + Field Day 25
      { name: "Hanah M.", points: 25 },
      { name: "Megan N.", points: 25 },
      { name: "Paris N.", points: 25 },
      { name: "Samuel H.", points: 25 },
      { name: "Sydney H.", points: 25 },
      { name: "Sophia D.", points: 25 },
      { name: "Mikayla N.", points: 25 },
      { name: "Arisha J.", points: 25 },
      { name: "Alisha M.", points: 25 },
      { name: "Sakin M.", points: 25 },
    ],
  },
  {
    school: "Central Gwinnett",
    members: [
      { name: "Sui O.", points: 25 },
      { name: "Ben P.", points: 25 },
      { name: "Abby K.", points: 10 },
      { name: "Aiden N.", points: 25 },
      { name: "Bee V.", points: 25 },
      { name: "LuciaThien N.", points: 25 },
      { name: "Bella N.", points: 25 },
    ],
  },
  {
    school: "Collins Hill",
    members: [
      { name: "Mikael G.", points: 25 },
      { name: "Kayson K.", points: 35 }, // + Field Day 25
      { name: "Allysa K.", points: 25 },
      { name: "Emran H.", points: 25 },
      { name: "Kevin C.", points: 25 },
      { name: "Mimi L.", points: 25 },
      { name: "Sabine T.", points: 25 },
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
      { name: "Kaden P.", points: 60 }, // Summer Picnic 25 + Foodie Friday 10; + Field Day 25
      { name: "Nghi L.", points: 25 },
    ],
  },
  { school: "Grayson", members: [] },
  {
    school: "GSMST",
    fullName: "Gwinnett School of Mathematics, Science, and Technology",
    members: [
      { name: "Vina V.", points: 25 },
      { name: "Joe H.", points: 25 },
      { name: "Sahithya S.", points: 15 },
      { name: "Lauren H.", points: 15 },
      { name: "Ruud M.", points: 15 },
      { name: "Mahdi M.", points: 15 },
      { name: "Ashley H.", points: 15 },
      { name: "Devan J.", points: 15 },
      { name: "Jayden H.", points: 15 },
      { name: "Shambhavi K.", points: 15 },
      { name: "Leo S.", points: 25 },
    ],
  },
  {
    school: "Lanier",
    members: [
      { name: "Ethan S.", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
      { name: "Isaac N.", points: 35 }, // Summer Picnic 25 + Foodie Friday 10
      { name: "Jaydon T.", points: 60 }, // Summer Picnic 25 + Foodie Friday 10; + Field Day 25
      { name: "Deborah A.", points: 25 },
      { name: "Caleb M.", points: 60 }, // Summer Picnic 25 + Foodie Friday 10; + Field Day 25
      { name: "Rebecca S.", points: 10 },
      { name: "Chloe K.", points: 10 },
      { name: "Saira K.", points: 10 },
      { name: "Yumna A.", points: 10 },
      { name: "Evelyn A.", points: 10 },
      { name: "Justin P.", points: 15 },
    ],
  },
  { school: "Meadowcreek", members: [] },
  { school: "Mill Creek", members: [] },
  {
    school: "Mountain View",
    members: [
      { name: "Sylvia H.", points: 25 },
      { name: "Sohyeon", points: 25 },
      { name: "Noel J.", points: 50 }, // + Field Day 25
      { name: "Vyvy N.", points: 54 }, // Summer Picnic 25 + 4 for Instagram reposts; + Field Day 25
      { name: "Anh T.", points: 50 }, // + Field Day 25
      { name: "Gabriella C.", points: 50 }, // + Field Day 25
      { name: "Liem T.", points: 50 }, // + Field Day 25
      { name: "Sunny M.", points: 25 },
      { name: "Bao N.", points: 25 },
      { name: "Daliana A.", points: 25 },
      { name: "Kacey V.", points: 25 },
      { name: "Kiet T.", points: 25 },
      { name: "Olivia S.", points: 25 },
      { name: "Zoey F.", points: 25 },
      { name: "Alex N.", points: 25 },
    ],
  },
  {
    school: "Norcross",
    members: [
      { name: "Keith H.", points: 25 },
      { name: "Cindy N.", points: 50 }, // + Field Day 25
      { name: "Taylor Y.", points: 35 }, // + Field Day 25
      { name: "Audrey P.", points: 25 },
      { name: "James W.", points: 25 },
    ],
  },
  {
    school: "North Gwinnett",
    members: [
      { name: "McKinley P.", points: 25 },
      { name: "Aiden", points: 15 },
      { name: "Harim K.", points: 25 },
      { name: "Nathan N.", points: 25 },
      { name: "Aiden H.", points: 25 },
    ],
  },
  {
    school: "Parkview",
    members: [
      { name: "Kemontae W.", points: 10 },
      { name: "Kaden N.", points: 15 },
      { name: "Alex M.", points: 25 },
      { name: "Ashley K.", points: 25 },
      { name: "Christy L.", points: 25 },
      { name: "Linh L.", points: 25 },
      { name: "Sophia L.", points: 25 },
      { name: "Wakel A.", points: 25 },
    ],
  },
  {
    school: "Paul Duke",
    fullName: "Paul Duke STEM High School",
    members: [
      { name: "Mia S.", points: 25 },
      { name: "Ivan Z.", points: 25 },
    ],
  },
  {
    school: "Peachtree Ridge",
    members: [
      { name: "Jayden P.", points: 25 },
      { name: "Joshua Z.", points: 25 },
      { name: "Katherine Y.", points: 25 },
      { name: "Ryan L.", points: 25 },
      { name: "Ruby S.", points: 25 },
      { name: "Paul K.", points: 25 },
      { name: "Carden T.", points: 25 },
      { name: "Thai P.", points: 25 },
      { name: "Claire Y.", points: 10 },
      { name: "Vincent N.", points: 10 },
      { name: "Angie", points: 15 },
      { name: "Adan N.", points: 25 },
      { name: "Chau N.", points: 25 },
      { name: "Dylan L.", points: 25 },
      { name: "Tucker K.", points: 25 },
    ],
  },
  {
    school: "Seckinger",
    members: [
      { name: "Seung Jun L.", points: 25 },
      { name: "Cara B.", points: 35 }, // + Field Day 25
      { name: "Daniel C.", points: 15 },
      { name: "Jaewon L.", points: 15 },
      { name: "Xin G.", points: 25 },
    ],
  },
  { school: "South Gwinnett", members: [] },
  {
    school: "Buford",
    members: [
      { name: "Emily P.", points: 25 },
      { name: "Jinho B.", points: 25 },
      { name: "Jiwoo J.", points: 25 },
      { name: "Lam T.", points: 25 },
      { name: "Daniel O.", points: 25 },
      { name: "Reyna H.", points: 25 },
      { name: "Joyce D.", points: 25 },
      { name: "Suin K.", points: 25 },
      { name: "Sergio V.", points: 25 },
      { name: "Leah B.", points: 25 },
      { name: "Teagan L.", points: 25 },
    ],
  },
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
      <span className="font-display text-sm font-semibold tabular-nums">
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
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          The point system
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Go to events, join in, and support GAASA on social media to earn
          points. Every point counts for you and for your school.
        </p>
      </section>

      {/* How points are earned + what they're worth */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="border border-border bg-card">
          <div className="border-b border-border px-5 py-4 sm:px-7">
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Ways to earn points
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            <div className="bg-card px-5 py-6 sm:px-7">
              <p className="text-sm font-semibold text-foreground">
                Event attendance
              </p>
              <ul className="mt-4 divide-y divide-border/70">
                {EVENT_POINTS.map((e) => (
                  <RuleRow key={e.label} label={e.label} points={e.points} />
                ))}
              </ul>
            </div>
            <div className="bg-card px-5 py-6 sm:px-7">
              <p className="text-sm font-semibold text-foreground">
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
              <p className="text-sm font-semibold text-foreground">
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
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
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
                    {i + 1}
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
                  <span className="font-display text-lg font-bold tabular-nums">
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
                        <span className="font-display text-sm font-semibold tabular-nums">
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
