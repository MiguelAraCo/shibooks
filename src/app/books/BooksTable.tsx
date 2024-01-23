"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export const BooksTable: React.FC<{ bookIds: Array<string> }> = ({
  bookIds,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableColumn>ID</TableColumn>
      </TableHeader>
      <TableBody>
        {bookIds.map((bookId) => (
          <TableRow key={bookId}>
            <TableCell>{bookId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
