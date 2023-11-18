import React from "react";
import { getBook } from "@/models/books/getBook";
import { Reader } from "@/app/books/[id]/Reader";

export type BookPageProps = {
  params: {
    id: string;
  };
};

const BookPage: React.FC<BookPageProps> = async ({ params }) => {
  const book = await getBook(params.id);

  return <Reader book={book} />;
};

export default BookPage;
