import Button from '@/components/Button/Button';
import "./globals.css";
import Image from 'next/image';



const HomePage = () =>{
  
  return (
    <main className=" h-full w-full flex flex-col justify-center items-center">
      <Image className='logo' width={560} height={192} src='/assets/images/logo.png' alt='logo'/>
      <Image className='mt-10 mb-10 ' width={945} height={384} src='/assets/images/hero.jpg' alt='logo'/>
      
      <p className='text-xl font-bold text-center mb-10 text'>You’ve never seen 
          everything like this before.</p>
       <Button variant='primary' href='details' title='+ Take a look'/>
    </main>
  );
}
export default HomePage