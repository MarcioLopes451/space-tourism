import Logo from '../../assets/shared/logo.svg';
import Menu from '../../assets/shared/icon-hamburger.svg';
import { useState } from 'react';
import MobileNav from '../components/MobileNav';



export default function Navbar() {
    const [state, setState] = useState(false)

    function handleClick() {
        setState(!state)
    }
  return (
    <div className='w-full'>
        <div className='flex justify-between p-6 items-center'>
            <img src={Logo} />
            <img src={Menu} className='w-8' onClick={handleClick}/>
        </div>
        <MobileNav isOpen={state} onClose={handleClick}/>
    </div>
  )
}
