
import { Link } from 'react-router-dom';
import mobileBackground from '../../assets/home/background-home-mobile.jpg';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='bg-cover' style={{backgroundImage:`url(${mobileBackground})`,height:'844px'}}>
        <Navbar />
    <div className='mt-12'>
        <div className='flex justify-center flex-col gap-4 items-center'>
            <p className=' text-periwinkle font-barlowCondensed font-thin tracking-wide'>SO, YOU WANT TO TRAVEL TO</p>
            <h2 className='text-white font-bellefair tracking-widest text-8xl'>SPACE</h2>
            <p className=' text-periwinkle font-barlowCondensed text-center font-thin' style={{width:'327px'}}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not 
            hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this 
            world experience!
            </p>
        </div>
        <div className='mt-20 text-center'>
            <Link to='#'>
                <button className='w-40 h-40 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>
                    EXPLORE
                </button>
            </Link>
        </div>
        </div>
    </div>
  )
}
