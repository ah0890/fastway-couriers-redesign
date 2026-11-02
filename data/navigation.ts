// Placeholder routes: links point to in-page sections where one exists,
// otherwise "#". This practice project has no other pages.

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  id: string;
  label: string;
  links: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    id: "services",
    label: "Our Services",
    links: [
      { label: "National satchels", href: "#" },
      { label: "Track your parcel", href: "#track" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    links: [
      { label: "API", href: "#" },
      { label: "Courier locator", href: "#depots" },
      { label: "eCommerce", href: "#" },
      { label: "Free freight analysis", href: "#" },
      { label: "Weight guide", href: "#" },
    ],
  },
  {
    id: "franchising",
    label: "Franchising",
    links: [
      { label: "Courier franchise", href: "#franchise" },
      { label: "Regional franchise", href: "#franchise" },
      { label: "Owner Driver", href: "#franchise" },
    ],
  },
  {
    id: "why-fastway",
    label: "Why Fastway",
    links: [
      { label: "About us", href: "#about" },
      { label: "Latest news", href: "#" },
      { label: "Our awards", href: "#" },
      { label: "Our customers", href: "#customers" },
      { label: "Our evolution", href: "#" },
      { label: "Why we're different", href: "#about" },
    ],
  },
  {
    id: "contact",
    label: "Contact us",
    links: [
      { label: "Fastway courier", href: "#" },
      { label: "Fastway depot", href: "#depots" },
      { label: "FAQs", href: "#" },
    ],
  },
];

export const scamAlertLink: NavLink = { label: "Scam Alert", href: "#" };

export const primaryCta: NavLink = { label: "Become a Customer", href: "#" };
