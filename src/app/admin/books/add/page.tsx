"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { handleAddBookForm } from "@/app/admin/books/add/handleAddBookForm";

export type BookPageProps = {};

const BookPage: React.FC<BookPageProps> = ({}) => {
  const { pending } = useFormStatus();

  return (
    <form action={handleAddBookForm}>
      <input name="file" type="file" />
      {pending && "Uploading..."}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BookPage;
