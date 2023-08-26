import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mobileBackground from '../../assets/home/background-home-mobile.jpg';
import Navbar from '../components/Navbar';
import tabletBackground from '../../assets/home/background-home-tablet.jpg';
import desktopBackground from '../../assets/home/background-home-desktop.jpg'

export default function Home() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;
    const med = 1024;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    function changeBackground(){
        if(width < breakPoint) {
            return (
                <div className='bg-cover' style={{backgroundImage:`url(${mobileBackground})`,height:'844px'}}>
                     <Navbar />
                     <div className='mt-12 z-10'>
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
        } else if(width >= breakPoint && width < med) {
            return <div className='bg-cover' style={{backgroundImage:`url(${tabletBackground})`,height:'1000px'}}>
                <Navbar />
                     <div className=' mt-28 z-10'>
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
        } else  {
            return <div className='bg-cover' style={{backgroundImage:`url(${desktopBackground})`,height:'1110px'}}>
                <Navbar />
                     <div className='mt-64 z-10 flex justify-around items-center'>
                        <div className='flex flex-col'>
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
                                <button className=' w-72 h-72 bg-white rounded-full font-bellefair text-3xl font-thin tracking-widest'>
                                    EXPLORE
                                </button>
                            </Link>
                        </div>
                        </div>
                </div>
        }
    }
  return (
    <div>
        {changeBackground()}
    </div>
  )
}
