'use client'
import Loading from '@/components/loading';
import Details from '@/layout/Details/Details';
import React, { Suspense} from 'react'


export default function DetailsPage(){

  return(
  <Suspense  fallback={<Loading/>}>

    <Details/>
  </Suspense>
  
  )
}
  
  




