import React from 'react'
import Head from "next/head";

function offers() {
  return (
    <div className='w-full'>
        <Head>
            <title>Loan Offers</title>
        </Head>
        <div className='w-10/12 flex justify-center'>
            <div style={{height:"30px"}} className='w-full flex justify-between'>
                <img src="../logo.svg" alt="" />
                <img src="../avatar.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default offers