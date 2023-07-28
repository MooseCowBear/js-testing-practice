import { analyzeArray } from "./array";

test("should return expected stats", () => {
  expect(analyzeArray([1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 4,
  });
});

test("should return expected stats when floats", () => {
  expect(analyzeArray([1, 7, 3]).average).toBeCloseTo(3.67);
  expect(analyzeArray([1, 7, 3]).min).toEqual(1);
  expect(analyzeArray([1, 7, 3]).max).toEqual(7);
  expect(analyzeArray([1, 7, 3]).length).toEqual(3);
});

test("should work with empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});