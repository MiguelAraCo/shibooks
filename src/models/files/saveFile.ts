"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export const saveFile = async ({
  directory,
  fileName,
  contents,
}: {
  directory: string;
  fileName: string;
  contents: string | object;
}): Promise<string> => {
  const filePath = path.resolve(directory, fileName);

  const serializedContents =
    typeof contents === "string" ? contents : JSON.stringify(contents);

  try {
    await mkdir(directory, { recursive: true });
  } catch (error: unknown) {
    throw new Error("Couldn't create directory", { cause: error });
  }

  try {
    await writeFile(filePath, serializedContents);
  } catch (error: unknown) {
    throw new Error("Couldn't write file", { cause: error });
  }

  return filePath;
};
