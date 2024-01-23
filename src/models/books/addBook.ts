import { nanoid } from "nanoid";
import type { Book } from "@/models/books/Book";
import { saveFile } from "@/models/files/saveFile";
import { BOOKS_DIRECTORY } from "@/models/constants";

export const addBook = async (text: string): Promise<Book> => {
  const LINE_BREAKS = /(\r\n|\r|\n)+/g;
  const lines = text
    .split(LINE_BREAKS)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const book: Book = {
    id: nanoid(),
    lines,
  };

  await saveFile({
    directory: BOOKS_DIRECTORY,
    fileName: `${book.id}.json`,
    contents: book,
  });

  return book;
};
