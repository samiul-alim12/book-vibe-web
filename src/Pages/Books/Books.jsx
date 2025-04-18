import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({booksData}) => {

    return (
        <div>
            <h1 className=" text-center text-5xl font-semibold mt-10 mb-7">Books</h1>
           <div className=" grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1  gap-6 mb-8">
                <Suspense fallback={<span>loading....</span>}>
                {
                    booksData.map(book=><Book key={book.bookId} book={book}></Book>)
                }
                </Suspense>
           </div>
        </div>
    );
};

export default Books;