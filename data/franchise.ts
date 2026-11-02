import { Award, GraduationCap, MapPinned, PiggyBank, type LucideIcon } from "lucide-react";

export interface FranchiseBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const franchiseBenefits: FranchiseBenefit[] = [
  {
    title: "Low start-up costs",
    description: "An accessible route into owning and running your own business.",
    icon: PiggyBank,
  },
  {
    title: "Exclusive territory",
    description: "Build relationships with customers in an area that is yours to grow.",
    icon: MapPinned,
  },
  {
    title: "Multiple award winning franchise system",
    description: "Join a franchise system that has been recognised with industry awards.",
    icon: Award,
  },
  {
    title: "Unparalleled support and training",
    description: "Training to get you started and ongoing support as your business grows.",
    icon: GraduationCap,
  },
];

export const franchiseOptions: string[] = ["Courier franchise", "Regional franchise", "Owner Driver"];
