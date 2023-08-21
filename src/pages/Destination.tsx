import {useState} from 'react'
import background from '../../assets/destination/background-destination-mobile.jpg';
import moon from '../../assets/destination/image-moon.webp';
import mars from '../../assets/destination/image-mars.webp';
import europa from '../../assets/destination/image-europa.webp';
import titan from '../../assets/destination/image-titan.webp';
import { destination } from '../data';
import DestinationLayout from '../components/ContextLayout';
import Navbar from '../components/Navbar';


export default function Destination() {
    const [image, setImage] = useState('moon');

    function changeImage(){
        if(image === 'moon'){
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={moon} className='w-48 h-48'/>
                </div>
            )
        } else if(image === 'mars') {
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={mars} className='w-48 h-48'/>
                </div>
            )
        } else if(image === 'europa') {
            return (
                <div className='flex justify-center items-center mt-8'>
                <img src={europa} className='w-48 h-48'/>
            </div>
            )
        } else if(image === 'titan') {
            return (
                <div className='flex justify-center items-center mt-8'>
                <img src={titan} className='w-48 h-48'/>
            </div>
            )
        }
    }

    function changeContent() {
        if(image === 'moon') {
            return (
                <div>
                    <DestinationLayout
                        description={destination.moon.description} 
                        name={destination.moon.name} 
                        distance={destination.moon.distance} 
                        travel={destination.moon.travel}                    />
                </div>
            )
        } else if(image === 'mars') {
            return (
                <div>
                   <DestinationLayout
                        description={destination.mars.description} 
                        name={destination.mars.name} 
                        distance={destination.mars.distance} 
                        travel={destination.mars.travel}                    />
                </div>
            )
        } else if(image === 'europa') {
            return (
                <div>
                   <DestinationLayout
                        description={destination.europa.description} 
                        name={destination.europa.name} 
                        distance={destination.europa.distance} 
                        travel={destination.europa.travel}                    />
                </div>
            )
        } else if(image === 'titan') {
            return (
                <div>
                   <DestinationLayout
                        description={destination.titan.description} 
                        name={destination.titan.name} 
                        distance={destination.titan.distance} 
                        travel={destination.titan.travel}                    />
                </div>
            )
        }
    }
  return (
    <div style={{backgroundImage:`url(${background})`,height:'844px'}} className='bg-cover'>
        <Navbar />
        <div className='text-white font-barlowCondensed font-thin text-center'>
            <h3 className='flex justify-center gap-4'><span className='opacity-20 font-bold'>01</span> PICK YOUR DESTINATION</h3>
            {changeImage()}
            <div className='flex justify-center items-center gap-5 text-periwinkle mt-5'>
                <p onClick={() => setImage('moon')}>{destination.moon.name}</p>
                <p onClick={() => setImage('mars')}>{destination.mars.name}</p>
                <p onClick={() => setImage('europa')}>{destination.europa.name}</p>
                <p onClick={() => setImage('titan')}>{destination.titan.name}</p>
            </div>
        </div>
        {changeContent()}
    </div>
  )
}
