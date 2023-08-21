import Close from '../../assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';

type Nav = {
    isOpen: boolean
    onClose: () => void
}

export default function MobileNav({onClose, isOpen}: Nav) {

  return isOpen ? (
    <div className='absolute top-0 left-36 bg-transparent w-64 backdrop-blur-2xl' style={{height:'844px'}}>
        <div>
            <img src={Close} className='absolute top-8 left-48' onClick={onClose}/>
           <div className='flex flex-col mt-36 gap-9'>
            <Link to='/space-tourism/' className='text-white font-barlowCondensed font-thin tracking-wide mx-8 flex gap-3'>
                <span className='font-bold'>00</span> HOME
            </Link>
            <Link to='/space-tourism/destination' className='text-white font-barlowCondensed font-thin tracking-wide mx-8 flex gap-3'>
                <span className='font-bold'>01</span> DESTINATION
            </Link>
            <Link to='/space-tourism/crew' className='text-white font-barlowCondensed font-thin tracking-wide mx-8 flex gap-3'>
                <span className='font-bold'>02</span> CREW
            </Link>
            <Link to='/' className='text-white font-barlowCondensed font-thin tracking-wide mx-8 flex gap-3'>
                <span className='font-bold'>03</span> TECHNOLOGY
            </Link>
           </div>
        </div>
    </div>
  ) : null
}
