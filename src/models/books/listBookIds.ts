import { listFiles } from "@/models/files/listFiles";
import { BOOKS_DIRECTORY } from "@/models/constants";

export const listBookIds = async (): Promise<string[]> => {
  return (await listFiles(BOOKS_DIRECTORY))
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.substring(0, file.lastIndexOf(".")));
};
