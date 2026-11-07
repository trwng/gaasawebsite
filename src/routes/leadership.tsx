import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | Gwinnett AASA" },
      {
        name: "description",
        content:
          "Meet the student executive board that runs GAASA.",
      },
      { property: "og:title", content: "Leadership | Gwinnett AASA" },
      {
        property: "og:description",
        content:
          "Meet the student executive board that runs GAASA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Leadership,
});

// The executive board. `school` is optional.
const BOARD: { name: string; role: string; school?: string }[] = [
  { name: "Tara Wang", role: "President", school: "GSMST" },
  { name: "Anya Chung", role: "Executive Director", school: "Norcross" },
  { name: "Suhan Osman", role: "External VP", school: "Central Gwinnett" },
  { name: "Nhi Vuong", role: "Internal VP", school: "Grayson" },
  { name: "Andy Lee", role: "Secretary" },
  { name: "Geonhee Shin", role: "Treasurer" },
  { name: "Hannah Kim", role: "Historian", school: "GSMST" },
  { name: "Nancy Chen", role: "Webmaster" },
  { name: "Edison Her", role: "Member at Large", school: "Duluth" },
  { name: "Jinho Byun", role: "Member at Large" },
  { name: "Joyce Do", role: "Technology Director", school: "Collins Hill" },
];

// Past boards. Add a new year at the TOP of this list.
const ALUMNI: { year: string; people: string[]; others?: boolean }[] = [
  {
    year: "2025-2026",
    people: [
      "Meerab Masih (President)",
      "Juliana Tao (Executive Director)",
      "Brandon Shin (EVP)",
      "Dongwoo Park (IVP)",
      "Katryn Santiago (Secretary)",
      "Tara Wang (Treasurer)",
      "Isabella Ching (Webmaster)",
      "Erica Park (Historian)",
      "Keng Chang (Technology Director)",
      "Anya Chung (Member at Large)",
    ],
  },
  {
    year: "2024-2025",
    people: [
      "Doris Vo (President)",
      "Natalie Pham (Executive Director)",
      "Joy Zhu (Executive Director)",
      "Youngjin Kim (IVP)",
      "Leonardo Choi (EVP)",
      "Lilly Dinh (Secretary)",
      "Juliana Tao (Treasurer)",
      "Ethan Nguyen (Webmaster)",
      "Sophia Tran (Historian)",
      "Jonathan Lu (Technology Director)",
      "Meerab Masih (Member at Large)",
    ],
  },
  {
    year: "2023-2024",
    people: [
      "Lena Ho (President)",
      "Binh Nguyen (IVP)",
      "Kevin Bui (EVP)",
      "Rebekah Kim (VP of Media / Webmaster)",
      "Ariel Nguon (Secretary)",
      "Jonah Yonathan (Treasurer)",
      "Annie Shi (Historian)",
      "Joy Zhu (Technology Director)",
      "Ally Chong (Member at Large)",
      "Natalie Pham (Member at Large)",
      "Karen Nguyen (Member at Large)",
    ],
  },
  {
    year: "2022-2023",
    people: [
      "Lena Ho (Co-President)",
      "Raymond Liu (Co-President)",
      "Christine Kim (IVP)",
      "Jack Nguyen (EVP)",
      "Lena Dinh (Secretary)",
      "Jasmine Le (Treasurer)",
      "Emily Nguyen (Webmaster)",
      "Jordan Tieu (Historian)",
      "Joy Zhu (Webmaster)",
    ],
  },
  {
    year: "2021-2022",
    people: ["Amanda Le", "Nancy Pham"],
    others: true,
  },
];

function Leadership() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          The Executive Board
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Students plan every GAASA event. The executive board is a small group
          of high schoolers from across the county, and the GAASA Board adds a
          representative from each school.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="divide-y divide-border border-y border-border">
          {BOARD.map((member, i) => (
            <div
              key={`${member.role}-${i}`}
              className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
            >
              <h3 className="font-display text-lg font-bold sm:col-span-5">
                {member.name}
              </h3>
              <p className="text-sm text-foreground sm:col-span-4">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground sm:col-span-3">
                {member.school}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            GAASA Alumni
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Thank you to everyone who has led GAASA. Our founder was Donald
            Pham, along with others.
          </p>
          <Accordion
            type="multiple"
            className="mt-8 max-w-2xl divide-y divide-border border-y border-border"
          >
            {ALUMNI.map((group) => (
              <AccordionItem
                key={group.year}
                value={group.year}
                className="border-b-0"
              >
                <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline">
                  {group.year}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {group.people.map((person) => (
                      <li key={person}>{person}</li>
                    ))}
                    {group.others && <li>and others</li>}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Want to lead?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Board applications open each year. The easiest way in is to get
            involved with your school's AASA, or help start one if your school
            doesn't have one yet.
          </p>
        </div>
      </section>
    </div>
  );
}
