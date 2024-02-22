import Loading from '@/components/Loader';
import HomePage from '@/layout/Home/HomePage';
import { Suspense } from 'react';
import "./globals.css";



export default function Home() {
  
  return (
    <>
    <Suspense fallback={<Loading/>}>

      <HomePage/>
    </Suspense>
    </>
  );
}
