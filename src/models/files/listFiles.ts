"use server";

import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { isNotNulldefined } from "@/utils/isNotNulldefined";

export const listFiles = async (directoryPath: string): Promise<string[]> => {
  try {
    // Read the contents of the directory
    const items = await readdir(directoryPath);

    // Filter out directories and return only file names
    const files = await Promise.allSettled(
      items.map(async (item) => {
        const itemPath = path.resolve(directoryPath, item);
        if (!(await stat(itemPath)).isFile()) return null;

        return item;
      }),
    );

    return files
      .map((result) => {
        if (result.status === "rejected") return null;

        return result.value;
      })
      .filter(isNotNulldefined);

    // Remove undefined entries and return the result
  } catch (error) {
    // If the directory doesn't exist or another error occurs, return an empty array
    return [];
  }
};
