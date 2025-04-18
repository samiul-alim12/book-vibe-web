import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setData } from '../../utilities/getDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} = useParams()
    const convertId = parseInt(id)
    const booksDetail = useLoaderData()
    const findingId = booksDetail.find(book => book.bookId === convertId)
    console.log(findingId)
    // console.log(id,booksDetails)
    const {bookName,author,image,bookId,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = findingId

    const handleBtn =(id)=>{
        setData(id)
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
        
    }




    return (
        <div className=' w-11/12 mx-auto py-14'>
           <div  className='flex  gap-10'>
                <div className=' bg-base-200 rounded-2xl flex items-center'>
                        <img src={image} alt="" className=' w-sm  px-16' />
                </div>
                <div className=' w-[70%]'>
                        <h1 className=' text-4xl font-semibold'>{bookName}</h1>
                        <p className=' text-xl text-gray-500 pt-3'>By:{author}</p>
                        <div className="divider"></div>
                        <p>{category}</p>
                        <div className="divider"></div>
                        <p><span className=' font-bold'>Review:</span>{review}</p>
                        <div className='flex items-center gap-3'>
                            <span className=' font-bold'>Tag</span>:{
                                tags.map((tag,index)=> <h3 key={index}  className=' px-3 bg-base-200 rounded-3xl py-2 text-lg text-[#31db0f]'>#{tag}</h3>)
                            }
                        </div>
                        <div>
                            <p>Number of Pages: <span className=' font-bold'> {totalPages}</span></p>
                            <p>Publisher:<span className=' font-bold'>{publisher}</span></p>
                            <p>Year of Publishing:<span className=' font-bold'>{yearOfPublishing}</span></p>
                            <p>Ratings:<span className=' font-bold'>  {rating}</span></p>
                        </div>
                        <div className=' pt-3'>
                            <button onClick={()=>handleBtn(id)} className="btn btn-info mr-5">Mark as Read</button>
                            <button className="btn btn-success">Add to Wish List</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;