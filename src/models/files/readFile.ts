"use server";

import { readFile as fsReadFile } from "node:fs/promises";
import path from "node:path";

export const readFile = async ({
  directory,
  fileName,
}: {
  directory: string;
  fileName: string;
}): Promise<string> => {
  const filePath = path.resolve(directory, fileName);
  try {
    return await fsReadFile(filePath, {
      encoding: "utf8",
    });
  } catch (error: unknown) {
    throw new Error("Couldn't create directory", { cause: error });
  }
};
