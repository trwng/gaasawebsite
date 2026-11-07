// Announcements shown on the home page. Newest first.
// To post one: add a new { ... }, block at the TOP of the list below.
// To remove one: delete its block. An empty list shows a "nothing new" message.
export type Announcement = { date: string; title: string; body: string };

export const ANNOUNCEMENTS: Announcement[] = [
  {
    date: "Nov 6, 2026",
    title: "Standings are up",
    body: "Points from Summer Picnic, Foodie Friday, and the Game Tournament are now on the Points page.",
  },
];
