import { isNulldefined } from "@/utils/isNulldefined";

export const isNotNulldefined = <Value>(
  value: Value | null | undefined,
): value is Value => !isNulldefined(value);
