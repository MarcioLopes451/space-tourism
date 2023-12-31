import {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import background from '../../assets/crew/background-crew-mobile.jpg';
import douglas from '../../assets/crew/image-douglas-hurley.webp'
import mark from '../../assets/crew/image-mark-shuttleworth.webp'
import victor from '../../assets/crew/image-victor-glover.webp'
import anousheh from '../../assets/crew/image-anousheh-ansari.webp'
import { CrewLayout } from '../components/ContextLayout';
import { crew } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import tabletBackground from '../../assets/crew/background-crew-tablet.jpg';
import desktopBackground from '../../assets/crew/background-crew-desktop.jpg';
import { motion } from 'framer-motion';

const slideIn = {
    hidden: {
        y:'-100px',
        opacity: 0
    },
    visible:{
        y:'0vh',
        opacity:1,
        transition:{
            duration:0.5
        }
    }
}

const slideUp = {
    hidden: {
        y:'100px',
        opacity: 0
    },
    visible:{
        y:'0vh',
        opacity:1,
        transition:{
            duration:0.5
        }
    }
}

export default function Crew() {
    const [image, setImage] = useState('douglas')
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

    function changeImage(){
        if(image === 'douglas'){
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={douglas} className='w-44 h-56 md:h-1/4 md:w-80 xl:w-11/12'/>
                </div>
            )
        } else if(image === 'mark') {
            return (
                <div className='flex justify-center items-center mt-8 md:mt-14'>
                    <img src={mark} className='w-40 h-56 md:h-1/5 md:w-64 xl:w-full'/>
                </div>
            )
        } else if(image === 'victor') {
            return (
                <div className='flex justify-center items-center mt-8 md:mt-16'>
                <img src={victor} className=' w-44 h-56 md:h-1/4 md:w-80 xl:w-full'/>
            </div>
            )
        } else if(image === 'anousheh') {
            return (
                <div className='flex justify-center items-center mt-8 md:mt-10'>
                <img src={anousheh} className=' w-56 h-56 md:h-1/4 md:w-96 xl:w-full'/>
            </div>
            )
        }
    }

    function changeContent() {
        if(image === 'douglas') {
            return (
                <div>
                    <CrewLayout
                        role={crew.one.role}
                        name={crew.one.name}
                        bio={crew.one.bio}
                        />
                </div>
            )
        } else if(image === 'mark') {
            return (
                <div>
                  <CrewLayout
                        role={crew.two.role}
                        name={crew.two.name}
                        bio={crew.two.bio}
                        />        
                </div>
            )
        } else if(image === 'victor') {
            return (
                <div>
                   <CrewLayout
                        role={crew.three.role}
                        name={crew.three.name}
                        bio={crew.three.bio}
                        />
                </div>
            )
        } else if(image === 'anousheh') {
            return (
                <div>
                   <CrewLayout
                        role={crew.four.role}
                        name={crew.four.name}
                        bio={crew.four.bio}
                        />
                </div>
            )
        }
    }

    function changeBackground(){
        if(width < breakPoint) {
            return (
                <div style={{backgroundImage:`url(${background})`,height:'1100px'}} className='bg-cover'>
                <Navbar />
                <motion.div
                variants={slideIn}
                initial='hidden'
                animate='visible' 
                 className='text-white font-barlowCondensed font-thin text-center mt-5'>
                    <h3 className='flex justify-center gap-4'><span className='opacity-20 font-bold'>02</span> MEET YOUR CREW</h3>
                    <div className='border-charcoal border-b mt-2 mx-4'>
                    {changeImage()}
                    </div>
                    <div className='flex justify-center items-center gap-5 text-periwinkle mt-5'>
                        <p onClick={() => setImage('douglas')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('mark')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('victor')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('anousheh')}><FontAwesomeIcon icon={faCircle} /></p>
                    </div>
                </motion.div>
                {changeContent()}
            </div>
            )
        } else if(width >= breakPoint && width < med) {
            return (
                <div style={{backgroundImage:`url(${tabletBackground})`,height:'1100px'}} className='bg-cover'>
                <Navbar />
                <motion.div 
                variants={slideIn}
                initial='hidden'
                animate='visible' 
                className='text-white font-barlowCondensed font-thin text-center mt-9'>
                    <h3 className='flex justify-start gap-4 ml-5'><span className='opacity-20 font-bold'>02</span> MEET YOUR CREW</h3>
                    <div className=' mt-2 mx-4'>
                    {changeContent()}
                    </div>
                    <div className='flex justify-center items-center gap-5 text-periwinkle mt-5'>
                        <p onClick={() => setImage('douglas')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('mark')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('victor')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('anousheh')}><FontAwesomeIcon icon={faCircle} /></p>
                    </div>
                </motion.div>
                <motion.div variants={slideUp}
                initial='hidden'
                animate='visible'>
                {changeImage()} 
                </motion.div>
            </div>
            )
        } else {
            return (
                <div style={{backgroundImage:`url(${desktopBackground})`, height:'1100px'}} className='bg-cover'>
                <Navbar />
                <h3 className='flex justify-start gap-4 ml-28 mt-32 text-white font-barlowCondensed font-thin text-xl tracking-wider'>
                    <span className='opacity-20 font-bold'>02</span> MEET YOUR CREW</h3>
                <div className='text-white font-barlowCondensed font-thin text-center flex justify-around items-center -mt-24'>
                    <motion.div variants={slideIn}
                initial='hidden'
                animate='visible'>
                    {changeContent()}
                    </motion.div>
                    <motion.div variants={slideUp}
                initial='hidden'
                animate='visible'>
                    {changeImage()}
                    </motion.div>
                </div>
                <div className='flex justify-start gap-5 text-periwinkle ml-32 -mt-10'>
                        <p onClick={() => setImage('douglas')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('mark')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('victor')}><FontAwesomeIcon icon={faCircle} /></p>
                        <p onClick={() => setImage('anousheh')}><FontAwesomeIcon icon={faCircle} /></p>
                    </div>
            </div>
            )
        }
    }

  return (
    <div>
        {changeBackground()}
    </div>
  )
}
