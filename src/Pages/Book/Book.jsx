import React from 'react';
import { CiStar } from "react-icons/ci";
const Book = ({book}) => {
    console.log(book)
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book
    return (
<div className="card bg-base-100  shadow-sm">
        <figure className=' rounded-2xl bg-base-300 m-4'>
            <img
            src={image}
            className=' h-58 md:h-50  py-8 px-28'
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <div className=' flex gap-4'>
               <div className=' bg-base-200 rounded-3xl'>
                    <h3 className=' px-3 py-2 text-lg text-[#31db0f]'>Young Adult</h3>
               </div>
                <div className=' bg-base-200 rounded-3xl'>

                    <h3 className=' px-3 py-2 text-lg text-[#31db0f]'>Identity</h3>
                </div>
            </div>
            <h2 className="card-title text-2xl font-semibold">
            {bookName}
            
            </h2>
            <p className=' text-xl font-medium '>By: {author}</p>
            <div className="card-actions flex justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className=" flex gap-3 items-center">{rating} <CiStar size={20}/></div>
            </div>
        </div>
</div>
    );
};

export default Book;