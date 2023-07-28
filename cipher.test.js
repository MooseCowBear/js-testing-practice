import { cipher } from "./cipher";

test("should return lowercase string shifted", () => {
  expect(cipher("bat", 7)).toEqual("iha");
});

test("should preserve case", () => {
  expect(cipher("Bat", 7)).toEqual("Iha");
});

test("should leave punctuation untouched", () => {
  expect(cipher("bat!", 7)).toEqual("iha!");
});

test("should work with negative shifts", () => {
  expect(cipher("bat", -2)).toEqual("zyr");
});

test("should work with shifts greater than 26", () => {
  expect(cipher("bat", 28)).toEqual("dcv");
});

test("should work with shifts less than -26", () => {
  expect(cipher("bat", -28)).toEqual("zyr");
});

test("should work with zero", () => {
  expect(cipher("bat", 0)).toEqual("bat");
});
