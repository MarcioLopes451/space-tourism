import Close from '../../assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const slideRight = {
    hidden: {
        x:'100px',
    },
    visible:{
        x:'0px',
        transition:{
            duration:0.5
        }
    },
    exit:{
        x:'100px',
        transition:{
            duration:0.5
        }
    }
}

type Nav = {
    isOpen: boolean
    onClose: () => void
}

export default function MobileNav({onClose, isOpen}: Nav) {

  return isOpen ? (
    <motion.div className='absolute top-0 left-36 bg-transparent w-64 backdrop-blur-2xl z-50' style={{height:'844px'}} 
    variants={slideRight}
    initial='hidden'
    animate='visible'
    exit='exit'>
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
            <Link to='/space-tourism/technology' className='text-white font-barlowCondensed font-thin tracking-wide mx-8 flex gap-3'>
                <span className='font-bold'>03</span> TECHNOLOGY
            </Link>
           </div>
        </div>
    </motion.div>
  ) : null
}
