import { capitalize, reverseString } from "./string";

test("should capitalized first letter of string", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("should reverse a string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
