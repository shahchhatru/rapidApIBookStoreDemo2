"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

import { SearchBar, BookCard,Hero ,Navbar} from "../components";
import { fetchBooks } from "../../utils";

export default async function Home() {
    // const router = useRouter()
    // const [data, setData] = useState("nothing")
    // const logout = async () => {
    //     try {
    //         await axios.get('/api/auth/logout')
    //         toast.success('Logout successful')
    //         router.push('/login')
    //     } catch (error) {
    //         console.log(error.message);
    //         toast.error(error.message)
    //     }
    // }

    // const getUserDetails = async () => {
    //     const res = await axios.get('/api/auth/me')
    //     console.log(res.data);
    //     setData(res.data.data._id)
    // }

    const allbooks = await fetchBooks();
    console.log(allbooks)

    const isDataEmpty = !Array.isArray(allbooks) ||  allbooks.length<1 || !allbooks;


    return (
        <main className="overflow-hidden">
          <Navbar/>
      <Hero/>
      <div className='mt-24 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Book  Catalogue</h1>
          <p>
            Books that might change your life
          </p>

        </div>
        <div className='home__filters'>
          <SearchBar />
        
          <div className='home__filter-container'>
            
          </div>
        </div>
         {
          !isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {
                  allbooks?.map((book)=>(<BookCard book={book}/>))
                }
              </div>
            </section>
          ):(
            <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                <p>{allbooks?.message}</p>
            </div>
          )
        } 


      </div>
    </main>
    
    )
}

/**
 * 
 *     <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>

        <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>


            </div>
 */