import React from 'react';

import bookImage from '../../assets/books.jpg';

const Banner = () => {
    return (
   <div className='flex justify-around items-center bg-base-300 rounded-2xl shadow-md mt-12 p-24'>
        
        <div className=''>
            <h2 className=' text-6xl font-medium'>Books to freshen up <br /> your bookshelf</h2>
            <button className=' btn mt-10 bg-[#31db0f] text-white'>View The List</button>
        </div>
        <div>
            <img className=' max-w-sm rounded-2xl' src={bookImage} alt="" />
        </div>
   </div>
    );
};

export default Banner;