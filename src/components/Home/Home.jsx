import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../../Pages/Books/Books';

const Home = () => {
    return (
        <div className=' w-11/12 mx-auto'>
           <div>
                <Banner></Banner>
           </div>
            
            <Books></Books>
        </div>
    );
};

export default Home;