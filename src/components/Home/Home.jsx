import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Books from '../../Pages/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData()
    console.log(booksData)
    return (
        <div className=' w-11/12 mx-auto'>
           <div>
                <Banner></Banner>
           </div> 
            
                
                    <Books booksData={booksData}></Books>
                
            
        </div>
    );
};

export default Home;