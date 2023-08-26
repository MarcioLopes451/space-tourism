import Logo from '../../assets/shared/logo.svg';
import Menu from '../../assets/shared/icon-hamburger.svg';
import { useEffect, useState } from 'react';
import MobileNav from '../components/MobileNav';
import { Link } from 'react-router-dom';



export default function Navbar() {
    const [state, setState] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    function handleClick() {
        setState(!state)
    }

    function changeBackground(){
      if(width < breakPoint) {
        return (
          <div className='w-full'>
              <div className='flex justify-between p-6 items-center'>
                  <img src={Logo} />
                  <img src={Menu} className='w-8' onClick={handleClick}/>
              </div>
              <MobileNav isOpen={state} onClose={handleClick}/>
          </div>
        )
      } else if( width === breakPoint) {
        return (
          <div className='w-full'>
              <div className='flex justify-between items-center'>
                  <img src={Logo} className='ml-6'/>
                  <div className='flex gap-11 bg-transparent h-24 backdrop-blur-2xl items-center px-12 text-sm'>
                  <Link to='/space-tourism/' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>00</span> HOME
            </Link>
            <Link to='/space-tourism/destination' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>01</span> DESTINATION
            </Link>
            <Link to='/space-tourism/crew' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>02</span> CREW
            </Link>
            <Link to='/space-tourism/technology' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>03</span> TECHNOLOGY
            </Link>
                 </div>
              </div>
              <MobileNav isOpen={state} onClose={handleClick}/>
          </div>
        )
      } else if(width > breakPoint) {
        return (
          <div className='w-full'>
              <div className='flex justify-between items-center'>
                  <img src={Logo} className='ml-6'/>
                  <div className='flex gap-11 bg-transparent h-24 backdrop-blur-2xl items-center px-12 text-sm'>
                  <Link to='/space-tourism/' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>00</span> HOME
            </Link>
            <Link to='/space-tourism/destination' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>01</span> DESTINATION
            </Link>
            <Link to='/space-tourism/crew' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>02</span> CREW
            </Link>
            <Link to='/space-tourism/technology' className='text-white font-barlowCondensed font-thin tracking-wide flex gap-3'>
                <span className='font-bold'>03</span> TECHNOLOGY
            </Link>
                 </div>
              </div>
              <MobileNav isOpen={state} onClose={handleClick}/>
          </div>
        )
      }
    }
  return (
    <div className='w-full'>
       {changeBackground()}
    </div>
  )
}
