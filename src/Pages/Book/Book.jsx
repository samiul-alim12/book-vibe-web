import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const Book = ({book}) => {
    // console.log(book)
    const {bookName,author,image,bookId,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book
    return (   
      <Link to={`bookDetails/${bookId}`}>

        <div className="card bg-base-100  shadow-sm">
            <figure className=' rounded-2xl bg-base-300 m-4'>
                <img
                src={image}
                className=' h-58 md:h-50  py-8 px-28'
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className=' flex gap-4'>
                    
                    {
                        tags.map((tag,index)=> <h3 key={index}  className=' px-3 bg-base-200 rounded-3xl py-2 text-lg text-[#31db0f]'>{tag}</h3>)
                    }
                </div>
                <h2 className="card-title text-2xl font-semibold">
                {bookName}
                <div className="badge badge-secondary">{totalPages}</div>
                </h2>
                <p className=' text-xl font-medium '>By: {author}</p>
                
                <div className="card-actions flex justify-between">
                <div className="badge badge-outline">{category}</div>
                <div className=" flex gap-3 items-center">{rating} <CiStar size={20}/></div>
                </div>
            </div>
            </div>

      </Link>
    );
};

export default Book;