import React, { useEffect, useState } from 'react';
import { data } from 'react-router';

const Books = () => {
    const [allBooks,setAllBooks] = useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data => setAllBooks(data))
    }
    ,[])
    console.log(allBooks)
    return (
        <div>
            <h2>Hello ami home</h2>
        </div>
    );
};

export default Books;