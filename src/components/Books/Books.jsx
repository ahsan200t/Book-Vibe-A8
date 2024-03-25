import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks]=useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-bold">Books: {books.length}</h1>
            </div>
            <div className="grid grid-cols-3 gap-8 my-10">
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;