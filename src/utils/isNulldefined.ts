export const isNulldefined = <Value>(
  value: Value | null | undefined,
): value is null | undefined => value === undefined || value === null;
