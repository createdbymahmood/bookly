import React, { FunctionComponent } from "react";
/* components */
import { Book, BookBox } from "components/BookBox";
import { GenericGrid } from "components/GenericGrid";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    books,
}) => {
    const renderBooks = (book: Book) => (
        <BookBox
            key={book.id.toString()}
            id={book.id}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            initialLikeState={book.initialLikeState}
            onDeleteBook={bookId => console.log(bookId)}
        />
    );
    return <GenericGrid<Book> withRow items={books} renderItem={renderBooks} />;
};
