import { Headset, MapPin, ShieldAlert, type LucideIcon } from "lucide-react";

export const heroHighlights: string[] = [
  "Built for small and medium businesses",
  "Online parcel tracking",
  "Local depots across South Africa",
];

export interface MockTrackingEvent {
  status: string;
  location: string;
  time: string;
}

// Static demonstration data — never fetched, never tied to a real parcel.
export const mockTrackingEvents: MockTrackingEvent[] = [
  { status: "In transit", location: "Johannesburg Depot", time: "Today, 09:42" },
  { status: "Sorted at hub", location: "Johannesburg Depot", time: "Yesterday, 21:15" },
  { status: "Collected", location: "Pretoria Depot", time: "Yesterday, 14:03" },
];

export interface ContactOption {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const contactOptions: ContactOption[] = [
  {
    title: "Find your local depot",
    description: "Your nearest depot handles collections and delivery queries.",
    href: "#depots",
    icon: MapPin,
  },
  {
    title: "Customer support & FAQs",
    description: "Answers to common questions about sending and receiving.",
    href: "#",
    icon: Headset,
  },
  {
    title: "Report a scam",
    description: "Received a suspicious message about a parcel? Check here first.",
    href: "#",
    icon: ShieldAlert,
  },
];
