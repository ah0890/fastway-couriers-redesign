export interface Depot {
  city: string;
  href: string;
}

export interface Province {
  name: string;
  depots: Depot[];
}

// Placeholder links: this practice project has no depot pages.
export const provinces: Province[] = [
  {
    name: "Gauteng",
    depots: [
      { city: "Johannesburg", href: "#" },
      { city: "Pretoria", href: "#" },
      { city: "Vereeniging", href: "#" },
    ],
  },
  {
    name: "Eastern Cape",
    depots: [
      { city: "East London", href: "#" },
      { city: "Port Elizabeth", href: "#" },
    ],
  },
  {
    name: "Western Cape",
    depots: [
      { city: "Cape Town", href: "#" },
      { city: "George", href: "#" },
    ],
  },
  {
    name: "KwaZulu-Natal",
    depots: [
      { city: "Durban", href: "#" },
      { city: "Newcastle", href: "#" },
      { city: "Pietermaritzburg", href: "#" },
    ],
  },
  {
    name: "Limpopo",
    depots: [{ city: "Polokwane", href: "#" }],
  },
  {
    name: "Mpumalanga",
    depots: [
      { city: "Nelspruit", href: "#" },
      { city: "Witbank", href: "#" },
    ],
  },
  {
    name: "North West",
    depots: [
      { city: "Klerksdorp", href: "#" },
      { city: "Rustenburg", href: "#" },
    ],
  },
  {
    name: "Free State",
    depots: [{ city: "Bloemfontein", href: "#" }],
  },
];

export const totalDepots = provinces.reduce((sum, province) => sum + province.depots.length, 0);

/** Case-insensitive partial match on city name, optionally limited to one province. */
export function filterProvinces(query: string, province: string | null): Province[] {
  const needle = query.trim().toLowerCase();
  return provinces
    .filter((p) => province === null || p.name === province)
    .map((p) => ({
      ...p,
      depots: p.depots.filter((d) => d.city.toLowerCase().includes(needle)),
    }))
    .filter((p) => p.depots.length > 0);
}
