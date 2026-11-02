import { BadgeCheck, Building, MapPin, Radar, Wallet, type LucideIcon } from "lucide-react";

export interface AboutPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutParagraphs: string[] = [
  "Fastway is built around a simple idea: courier services for business should be cost-effective, dependable and easy to use.",
  "Our network of local depots keeps service close to the businesses we deliver for — so whether you send a handful of parcels a week or hundreds, you get the same straightforward experience.",
];

export const aboutPoints: AboutPoint[] = [
  {
    title: "Cost-effective",
    description: "Courier pricing designed with growing businesses in mind.",
    icon: Wallet,
  },
  {
    title: "Reliable",
    description: "A dependable service you can build your delivery promises on.",
    icon: BadgeCheck,
  },
  {
    title: "Focused on SMEs",
    description: "Small and medium-sized businesses are at the heart of what we do.",
    icon: Building,
  },
  {
    title: "Technology-supported tracking",
    description: "Follow parcels online from collection to delivery.",
    icon: Radar,
  },
  {
    title: "Convenient",
    description: "Local depots and simple booking make sending easy.",
    icon: MapPin,
  },
];
