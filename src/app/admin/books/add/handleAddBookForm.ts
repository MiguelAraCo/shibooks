"use server";

import { z } from "zod";
import { addBook } from "@/models/books/addBook";
import { redirect } from "next/navigation";

const Form = z.object({
  file: z.instanceof(File),
});

export const handleAddBookForm = async (formData: FormData) => {
  const { file } = Form.parse({
    file: formData.get("file"),
  });

  const text = await file.text();

  const book = await addBook(text);

  redirect(`/books/${book.id}`);
};
