import { BOOKS_DIRECTORY } from "@/models/constants";
import type { Book } from "@/models/books/Book";
import { readFile } from "@/models/files/readFile";

export const getBook = async (id: string): Promise<Book> => {
  const contents = await readFile({
    directory: BOOKS_DIRECTORY,
    fileName: `${id}.json`,
  });
  return JSON.parse(contents) as Book;
};
