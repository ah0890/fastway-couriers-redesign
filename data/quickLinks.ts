import { Calculator, Handshake, Printer, ShoppingCart, UserPlus, type LucideIcon } from "lucide-react";

export interface QuickLink {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
}

export const quickLinks: QuickLink[] = [
  {
    title: "Free freight analysis",
    description: "Get a no-obligation review of how you send parcels today and where you could save.",
    cta: "Request an analysis",
    href: "#",
    icon: Calculator,
  },
  {
    title: "Become a customer",
    description: "Open an account with your local depot and start sending with Fastway.",
    cta: "Get started",
    href: "#",
    icon: UserPlus,
    featured: true,
  },
  {
    title: "eCommerce solutions",
    description: "Connect your online store and ship customer orders with less admin.",
    cta: "Explore eCommerce",
    href: "#",
    icon: ShoppingCart,
  },
  {
    title: "Franchising",
    description: "Run your own courier business with the backing of an established network.",
    cta: "Explore franchising",
    href: "#franchise",
    icon: Handshake,
  },
  {
    title: "Electronic label platform",
    description: "Create, print and manage parcel labels online — no handwritten waybills.",
    cta: "Learn about labels",
    href: "#",
    icon: Printer,
  },
];
