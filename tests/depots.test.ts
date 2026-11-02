// Runs on Node's built-in test runner (native TypeScript type stripping, Node 22.18+).
import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProvinces, provinces, totalDepots } from "../data/depots.ts";

const cities = (result: ReturnType<typeof filterProvinces>) => result.flatMap((p) => p.depots.map((d) => d.city));

test("data has 16 depots across 8 provinces", () => {
  assert.equal(provinces.length, 8);
  assert.equal(totalDepots, 16);
});

test("empty query returns every depot", () => {
  assert.equal(cities(filterProvinces("", null)).length, 16);
  assert.equal(cities(filterProvinces("   ", null)).length, 16);
});

test("matches a full city name", () => {
  assert.deepEqual(cities(filterProvinces("Durban", null)), ["Durban"]);
});

test("matches partial city names", () => {
  assert.deepEqual(cities(filterProvinces("port", null)), ["Port Elizabeth"]);
  assert.deepEqual(cities(filterProvinces("burg", null)).sort(), ["Johannesburg", "Pietermaritzburg", "Rustenburg"]);
});

test("matching is case-insensitive and trims whitespace", () => {
  assert.deepEqual(cities(filterProvinces("  cAPE tOWN ", null)), ["Cape Town"]);
});

test("unknown city returns no provinces", () => {
  assert.deepEqual(filterProvinces("zzz", null), []);
});

test("province filter limits results and combines with search", () => {
  assert.deepEqual(cities(filterProvinces("", "Gauteng")), ["Johannesburg", "Pretoria", "Vereeniging"]);
  assert.deepEqual(cities(filterProvinces("pre", "Gauteng")), ["Pretoria"]);
  assert.deepEqual(filterProvinces("Durban", "Gauteng"), []);
});

test("results are grouped by province with no empty groups", () => {
  const result = filterProvinces("e", null);
  assert.ok(result.every((p) => p.depots.length > 0));
});
