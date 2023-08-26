import {useEffect, useState} from 'react'
import background from '../../assets/technology/background-technology-mobile.jpg';
import Navbar from '../components/Navbar';
import launch from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spacePort from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-landscape.jpg';
import { technology } from '../data';
import { TechnologyLayout } from '../components/ContextLayout';
import tabletBackground from '../../assets/technology/background-technology-tablet.jpg';
import desktopBackground from '../../assets/technology/background-technology-desktop.jpg';
import launchP from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spacePortP from '../../assets/technology/image-spaceport-portrait.jpg';
import spaceCapsuleP from '../../assets/technology/image-space-capsule-portrait.jpg';
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

const slideRight = {
    hidden: {
        x:'100px',
        opacity: 0
    },
    visible:{
        x:'0vh',
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



export default function Technology() {
    const [image, setImage] = useState('launch');
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
        if(image === 'launch'){
            return (
                <div className='flex justify-center items-center mt-8'>
                     {width < breakPoint ? <img src={launch} className='w-full h-56 md:h-72'/> : 
                     width >= breakPoint && width < med ? <img src={launch} className='w-full'/> : <img src={launchP} /> }
                </div>
            )
        } else if(image === 'spacePort') {
            return (
                <div className='flex justify-center items-center mt-8'>
                    {width < breakPoint ? <img src={spacePort} className='w-full h-56 md:h-72'/> : 
                    width >= breakPoint && width < med ? <img src={spacePort} className='w-full'/> : <img src={spacePortP}/> }
                </div>
            )
        } else if(image === 'spaceCapsule') {
            return (
                <div className='flex justify-center items-center mt-8'>
                {width < breakPoint ? <img src={spaceCapsule} className='w-full h-56 md:h-72'/> : 
                 width >= breakPoint && width < med ? <img src={spaceCapsule} className='w-full'/> : <img src={spaceCapsuleP}/> }
            </div>
            )
        } 
    }
    function changeContent() {
        if(image === 'launch') {
            return (
                <div>
                    <TechnologyLayout
                        name={technology.one.name}
                        description={technology.one.description}
                        />
                </div>
            )
        } else if(image === 'spacePort') {
            return (
                <div>
                  <TechnologyLayout
                        name={technology.two.name}
                        description={technology.two.description}
                        />    
                </div>
            )
        } else if(image === 'spaceCapsule') {
            return (
                <div>
                   <TechnologyLayout
                        name={technology.three.name}
                        description={technology.three.description}
                        />
                </div>
            )
        } 
    }
    function changeBackground() {
        if(width < breakPoint) {
            return (
                <div style={{backgroundImage:`url(${background})`,height:'1100px'}} className='bg-cover'>
                    <Navbar />
                    <div className='text-white'>
                    <h3 className='flex justify-center gap-4'><span className='opacity-20 font-bold'>03</span>SPACE LAUNCH 101</h3>
                    {changeImage()}
                    <motion.div
                    variants={slideIn}
                    initial='hidden'
                    animate='visible'
                    className='flex justify-center items-center gap-5 text-richBlack mt-5'>
                        <button onClick={() => setImage('launch')} 
                        className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>1</button>
                        <button onClick={() => setImage('spacePort')} 
                        className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>2</button>
                        <button onClick={() => setImage('spaceCapsule')} 
                        className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>3</button>
                    </motion.div>
                    <h3 className=' text-periwinkle font-barlowCondensed font-thin text-center mt-6'>THE TERMINOLOGY...</h3>
                    </div>
                    <motion.div variants={slideRight}
                    initial='hidden'
                    animate='visible'>
                    {changeContent()}
                    </motion.div>
                </div>
              )
        } else if(width >= breakPoint && width < med) {
            return (
                <div style={{backgroundImage:`url(${tabletBackground})`,height:'1100px'}} className='bg-cover'>
                    <Navbar />
                    <div className='text-white mt-9'>
                    <h3 className='flex justify-start gap-4 ml-6'><span className='opacity-20 font-bold'>03</span>SPACE LAUNCH 101</h3>
                    {changeImage()}
                    <motion.div
                    variants={slideIn}
                    initial='hidden'
                    animate='visible'
                    className='flex justify-center items-center gap-5 text-richBlack mt-5'>
                        <button onClick={() => setImage('launch')} 
                        className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>1</button>
                        <button onClick={() => setImage('spacePort')} 
                        className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>2</button>
                        <button onClick={() => setImage('spaceCapsule')} 
                        className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>3</button>
                    </motion.div>
                    <h3 className=' text-periwinkle font-barlowCondensed font-thin text-center mt-6'>THE TERMINOLOGY...</h3>
                    </div>
                    <motion.div variants={slideRight}
                    initial='hidden'
                    animate='visible'>
                        {changeContent()}
                    </motion.div>
                </div>
              )
        } else {
            return (
                <div style={{backgroundImage:`url(${desktopBackground})`, height:'1110px'}} className='bg-cover'>
                    <Navbar />
                    <h3 className='flex justify-start gap-4 ml-24 text-white mt-24 text-xl font-thin font-barlowCondensed'>
                    <span className='opacity-20 font-bold'>03</span>SPACE LAUNCH 101</h3>
                    <div className='text-white flex justify-around'>
                    <div className='flex items-center gap-10'>
                    <motion.div
                    variants={slideIn}
                    initial='hidden'
                    animate='visible' 
                    className='flex justify-center flex-col items-center gap-9 text-richBlack mt-5 px-5'>
                        <button onClick={() => setImage('launch')} 
                        className=' w-20 h-20 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>1</button>
                        <button onClick={() => setImage('spacePort')} 
                        className=' w-20 h-20 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>2</button>
                        <button onClick={() => setImage('spaceCapsule')} 
                        className=' w-20 h-20 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>3</button>
                    </motion.div>
                    <motion.div
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'>
                    <h3 className='text-periwinkle font-barlowCondensed font-thin text-start mt-6'>THE TERMINOLOGY...</h3>
                    {changeContent()}
                    </motion.div>
                    </div>
                    {changeImage()}
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
