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
            <div>
                <Suspense fallback={<span className=' text-center'>Loading...</span>}>
                    <Books booksData={booksData}></Books>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;