import { calculator } from "./calculator";

const calc = calculator();

test("should add two numbers", () => {
  expect(calc.add(1, 2)).toBe(3);
  expect(calc.add(-1, -2)).toBe(-3);
  expect(calc.add(0, -1)).toBe(-1);
});

test("should subtract two numbers", () => {
  expect(calc.subtract(1, 2)).toBe(-1);
  expect(calc.subtract(1, -2)).toBe(3);
  expect(calc.subtract(2, 1)).toBe(1);
});

test("should multiple two numbers", () => {
  expect(calc.multiply(1, 2)).toBe(2);
  expect(calc.multiply(-2, 3)).toBe(-6);
  expect(calc.multiply(1.5, 4)).toBeCloseTo(6);
});

test("should divide two numbers", () => {
  expect(calc.divide(1, 2)).toBeCloseTo(0.5);
  expect(calc.divide(-3, 1)).toBeCloseTo(-3);
  expect(calc.divide(10 / 0)).toEqual(NaN);
});
