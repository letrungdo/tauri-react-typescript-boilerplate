import fromEntries from "fromentries";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isNullOrEmpty = (
  value?: number | string | null
): value is null | undefined => {
  return (value ?? "") === "";
};

export const stringFormat = (str: string, ...args: string[]) =>
  str.replace(/{(\d+)}/g, (_match, index) => args[index] || "");

export const removeDuplicates = <T = string | number>(arr: T[]) => {
  const s = new Set(arr);
  const it = s.values();

  return Array.from(it);
};

export const parseQueryParams = <
  T = {
    [k: string]: string;
  }
>(
  search: string
) => {
  const urlSearchParams = new URLSearchParams(search);

  return fromEntries(urlSearchParams.entries()) as unknown as T;
};
