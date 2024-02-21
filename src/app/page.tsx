import Loading from '@/components/loading';
import HomePage from '@/layout/Home/HomePage';
import { Suspense } from 'react';




export default function Home() {
  
  return (
    <>
    <Suspense fallback={<Loading/>}>

      <HomePage/>
    </Suspense>
    </>
  );
}
