export const customerStat = { value: "150,000+", label: "customers" };

export type PlaceholderShape = "circle" | "square" | "diamond" | "pill" | "ring" | "bars";

// Brand-neutral placeholders — real customer logos are intentionally not reproduced.
export const logoPlaceholders: { id: number; shape: PlaceholderShape }[] = [
  { id: 1, shape: "circle" },
  { id: 2, shape: "square" },
  { id: 3, shape: "diamond" },
  { id: 4, shape: "pill" },
  { id: 5, shape: "ring" },
  { id: 6, shape: "bars" },
];
