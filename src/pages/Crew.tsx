import {useState} from 'react'
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


export default function Crew() {
    const [image, setImage] = useState('douglas')

    function changeImage(){
        if(image === 'douglas'){
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={douglas} className='w-44 h-56'/>
                </div>
            )
        } else if(image === 'mark') {
            return (
                <div className='flex justify-center items-center mt-8'>
                    <img src={mark} className=' w-40 h-56'/>
                </div>
            )
        } else if(image === 'victor') {
            return (
                <div className='flex justify-center items-center mt-8'>
                <img src={victor} className=' w-44 h-56'/>
            </div>
            )
        } else if(image === 'anousheh') {
            return (
                <div className='flex justify-center items-center mt-8'>
                <img src={anousheh} className=' w-56 h-56'/>
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
  return (
    <div style={{backgroundImage:`url(${background})`,height:'844px'}} className='bg-cover'>
    <Navbar />
    <div className='text-white font-barlowCondensed font-thin text-center'>
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
    </div>
    {changeContent()}
</div>
  )
}
