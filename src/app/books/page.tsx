import React from "react";
import { listBookIds } from "@/models/books/listBookIds";
import { BooksTable } from "@/app/books/BooksTable";

export type BooksPageProps = {};

const BooksPage: React.FC<BooksPageProps> = async ({}) => {
  const bookIds = await listBookIds();

  // TODO
  return <BooksTable bookIds={bookIds} />;
};

export default BooksPage;
