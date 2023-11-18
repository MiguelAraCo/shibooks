"use client";

import React, { useRef } from "react";
import type { Book } from "@/models/books/Book";
import { Virtuoso } from "react-virtuoso";
import { ScrollShadow } from "@nextui-org/react";
import { useStateWithLocalStorage } from "@/utils/useStateWithLocalStorage";

export type ReaderProps = {
  book: Book;
};

const LastCheckpointMark: React.FC = () => (
  <div className="w-full bg-amber-400 h-2 rounded my-8" />
);

export const Reader: React.FC<ReaderProps> = ({ book }) => {
  const [lastPosition, setLastPosition] = useStateWithLocalStorage(
    `book-${book.id}--position`,
    0,
  );

  const previousSessionsCheckpointRef = useRef<number>(lastPosition);

  const scrolledToOriginalPositionRef = useRef<boolean>(false);
  const onFirstIndexChanged = (index: number): void => {
    if (!scrolledToOriginalPositionRef.current) {
      if (index !== lastPosition) return;
      scrolledToOriginalPositionRef.current = true;
    }
    setLastPosition(index);
  };

  return (
    <div className="h-full lg:max-w-screen-lg m-auto pt-4">
      <Virtuoso
        data={book.lines}
        itemContent={(index, line) => {
          return (
            <>
              {previousSessionsCheckpointRef.current !== 0 &&
                previousSessionsCheckpointRef.current === index && (
                  <LastCheckpointMark />
                )}
              <p className="text-2xl pb-1">{line}</p>
            </>
          );
        }}
        initialTopMostItemIndex={lastPosition}
        itemsRendered={(items) => {
          const index = items[0]?.index ?? 0;
          onFirstIndexChanged(index);
        }}
        components={{
          // @ts-expect-error FIXME
          Scroller: ScrollShadow,
        }}
      />
    </div>
  );
};
