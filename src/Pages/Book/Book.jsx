import React from 'react';

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
            <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
</div>
    );
};

export default Book;