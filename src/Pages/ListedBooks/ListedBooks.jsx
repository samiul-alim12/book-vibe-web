import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getData } from '../../utilities/getDb';
import List from './list';

const ListedBooks = () => {

    const bookData = useLoaderData()
    // console.log(bookData)
    const [sort,setSort] =useState('')
    // console.log(sort)
    const [lists,setList] = useState([])
    useEffect(()=>{
        const setStoredData = getData()
        // console.log(setStoredData)
        // const convertData = 
            const convertData = setStoredData.map(id => parseInt(id))
            // console.log(convertData)
        const filterOut = bookData.filter(book=>convertData.includes(book.bookId)  )
        // console.log(filterOut)
        setList(filterOut) 

    },[])

    const handleSort =(type)=>{
        setSort(type)
        if(type === "pages"){
            const emptyArray = [...lists].sort((a,b)=>a.totalPages - b.totalPages)
            setList(emptyArray)
        }
        if(type === "ratings"){
            const emptyArray = [...lists].sort((a,b)=> b.rating- a.rating)
            setList(emptyArray)
        }
    }


    return (
        <div className='w-11/12 mx-auto'>
           <div className=' bg-base-200  rounded-xl'>
                <h1 className='text-center text-4xl font-semibold p-8'>Books</h1>
           </div>
           <div className='flex items-center justify-center my-7'>
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1  bg-[#31db0f] text-white">Sort By: {sort ? sort : ""} ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort('ratings')}> Ratings </a></li>
                        <li><a onClick={()=>handleSort('pages')}> Pages</a></li>
                    </ul>
                </div>
           </div>
           <div>
          
                <Tabs>
                    <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Mark as Read</Tab>
                    </TabList>

                    <TabPanel>
                       <div>
                            {
                                lists.map(list=><List key={list.bookId} list={list}></List>)
                            }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
                
           </div>
        </div>
    );
};

export default ListedBooks;