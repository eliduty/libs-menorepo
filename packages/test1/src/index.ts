import { sumFunction, type FunctionType } from "@eliduty/test";

export const A: FunctionType = "1";

export function sumTestFunction(a: number, b: number) {
  return sumFunction(a, b);
}
