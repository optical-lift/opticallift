export const homeContent = {
  masthead: "Optical Lift",
  nav: [
    { label: "Atlas", href: "https://atlas.opticallift.com" },
    { label: "Stationery", href: "https://stationery.opticallift.com" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "mailto:helpdesk@opticallift.com" },
  ],
  items: [
    {
      kind: "feature",
      eyebrow: "Atlas",
      title: "Building a way to hold the whole thing together.",
      body: "Atlas is software for people and organizations carrying complicated responsibility — work, money, time, people, commitments, and the things that should not have to live only in somebody's head.",
      href: "https://atlas.opticallift.com",
      linkLabel: "Visit Atlas",
    },
    {
      kind: "essay",
      eyebrow: "From the desk",
      title: "The notebook became software.",
      body: "Optical Lift has always made things by noticing where ordinary tools stop being useful. Atlas grew out of the same instinct: make the structure underneath complicated work visible enough to live with.",
    },
    {
      kind: "note",
      eyebrow: "Stationery",
      title: "The paper part is still here.",
      body: "Cards, paper goods, and the original creative work of Optical Lift now have their own home.",
      href: "https://stationery.opticallift.com",
      linkLabel: "Visit Stationery",
    },
    {
      kind: "statement",
      eyebrow: "About",
      title: "A small family company making useful things.",
      body: "Optical Lift began in design, publishing, marketing, and physical products. The work has expanded into building systems of our own, while keeping the original creative practice intact.",
    },
    {
      kind: "notice",
      eyebrow: "September 2026",
      title: "Current work",
      body: "Atlas is in active development. Optical Lift Stationery has moved to its own subdomain. Optical Lift remains the parent company behind both.",
    },
  ],
  footer: {
    location: "Missouri, USA",
    email: "helpdesk@opticallift.com",
  },
} as const;
