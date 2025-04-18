import React from 'react';

const List = ({list}) => {
    const {bookName,author,image,bookId,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = list
    return (
    <div className=' flex border mb-2 rounded-2xl '>
            <div className=' w-11/12 mx-auto py-14'>
           <div  className='flex  gap-10'>
                <div className=' bg-base-200 rounded-2xl flex items-center'>
                        <img src={image} alt="" className=' w-52  p-10' />
                </div>
                <div className=' w-[70%]'>
                        <h1 className=' text-4xl font-semibold'>{bookName}</h1>
                        <p className=' text-xl text-gray-500 pt-3'>By:{author}</p>
                        <div className='flex items-center gap-3'>
                            <span className=' font-bold'>Tag</span>:{
                                tags.map((tag,index)=> <h3 key={index}  className=' px-3 bg-base-200 rounded-3xl py-2 text-lg text-[#31db0f]'>#{tag}</h3>)
                            } <p>Year of Publishing:<span className=' font-bold'>{yearOfPublishing}</span></p>
                        </div>
                       <div className=' flex gap-10'>
                            <p>Publisher:<span className=' font-bold'>{publisher}</span></p>
                            <p>Number of Pages: <span className=' font-bold'> {totalPages}</span></p>
                       </div>
                       <div className="divider"></div>
                       <div className=' flex gap-4'>
                    
                            <h3  className=' px-3 bg-base-200 rounded-3xl py-2 text-lg text-blue-500'>Category:{category}</h3>
                            <h3  className=' px-3 bg-yellow-100 rounded-3xl py-2 text-lg text-orange-400'>Rating:{rating}</h3>
                            <button className=' btn  bg-[#31db0f] rounded-3xl text-white'>View Details</button>
                         </div>
                        
                        
                        
                </div>
            </div>
        </div>
    </div>
    );
};

export default List;