import { provinces } from "@/data/depots";
import { navGroups, type NavLink } from "@/data/navigation";

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

const featuredDepots = ["Johannesburg", "Pretoria", "Cape Town", "Durban", "Port Elizabeth", "Bloemfontein"];

const depotLinks: NavLink[] = provinces
  .flatMap((p) => p.depots)
  .filter((d) => featuredDepots.includes(d.city))
  .map((d) => ({ label: d.city, href: d.href }));

const linksOf = (groupId: string) => navGroups.find((g) => g.id === groupId)?.links ?? [];

export const footerColumns: FooterColumn[] = [
  { title: "Depots", links: [...depotLinks, { label: "All depots", href: "#depots" }] },
  { title: "Why Fastway", links: linksOf("why-fastway") },
  {
    title: "Our services",
    links: [
      ...linksOf("services"),
      { label: "eCommerce", href: "#" },
      { label: "Collections", href: "#" },
    ],
  },
  { title: "Franchise", links: linksOf("franchising") },
  {
    title: "Terms",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms of use", href: "#" },
      { label: "Conditions of carriage", href: "#" },
    ],
  },
];

export type SocialPlatform = "facebook" | "instagram" | "linkedin";

export const socialLinks: { platform: SocialPlatform; label: string; href: string }[] = [
  { platform: "facebook", label: "Facebook", href: "#" },
  { platform: "instagram", label: "Instagram", href: "#" },
  { platform: "linkedin", label: "LinkedIn", href: "#" },
];

// Static year: cacheComponents disallows reading the clock during prerender.
export const copyrightYear = 2026;

export const disclaimer = "Practice redesign project – not affiliated with Fastway Couriers.";
