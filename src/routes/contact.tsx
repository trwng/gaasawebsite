import { createFileRoute } from "@tanstack/react-router";
import { DISCORD_URL, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Gwinnett AASA" },
      {
        name: "description",
        content:
          "Reach GAASA through our Discord, Instagram, or email.",
      },
      { property: "og:title", content: "Contact Us | Gwinnett AASA" },
      {
        property: "og:description",
        content: "Reach GAASA through our Discord, Instagram, or email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const CONTACTS = [
  {
    label: "Discord",
    value: "Join the server",
    note: "Chat with other members and hear about events.",
    href: DISCORD_URL,
    external: true,
  },
  {
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    note: "Event updates and photos.",
    href: INSTAGRAM_URL,
    external: true,
  },
  {
    label: "Email",
    value: EMAIL,
    note: "Questions, sponsorships, or our monthly newsletter.",
    href: `mailto:${EMAIL}`,
    external: false,
  },
];

function Contact() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          The Discord and Instagram are the best way to hear about events. You
          can also email us any time.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group bg-card px-5 py-6 transition-colors hover:bg-secondary/60 sm:px-7"
            >
              <p className="text-sm font-semibold text-foreground">{c.label}</p>
              <p className="mt-3 break-words font-display text-lg font-bold text-primary">
                {c.value}
                <span
                  aria-hidden
                  className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.note}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
