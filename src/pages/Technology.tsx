import {useState} from 'react'
import background from '../../assets/technology/background-technology-mobile.jpg';
import Navbar from '../components/Navbar';
import launch from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spacePort from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-landscape.jpg';
import { technology } from '../data';
import { TechnologyLayout } from '../components/ContextLayout';


export default function Technology() {
    const [image, setImage] = useState('launch')

    function changeImage(){
        if(image === 'launch'){
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={launch} className='w-full h-56'/>
                </div>
            )
        } else if(image === 'spacePort') {
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={spacePort} className='w-full h-56'/>
                </div>
            )
        } else if(image === 'spaceCapsule') {
            return (
                <div className='flex justify-center items-center mt-8'>
                <img src={spaceCapsule} className='w-full h-56'/>
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

  return (
    <div style={{backgroundImage:`url(${background})`,height:'844px'}} className='bg-cover'>
        <Navbar />
        <div className='text-white'>
        <h3 className='flex justify-center gap-4'><span className='opacity-20 font-bold'>03</span>SPACE LAUNCH 101</h3>
        {changeImage()}
        <div className='flex justify-center items-center gap-5 text-richBlack mt-5'>
            <button onClick={() => setImage('launch')} 
            className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>1</button>
            <button onClick={() => setImage('spacePort')} 
            className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>2</button>
            <button onClick={() => setImage('spaceCapsule')} 
            className=' w-10 h-10 bg-white rounded-full font-bellefair text-xl font-thin tracking-widest'>3</button>
        </div>
        <h3 className=' text-periwinkle font-barlowCondensed font-thin text-center mt-6'>THE TERMINOLOGY...</h3>
        </div>
        {changeContent()}
    </div>
  )
}
