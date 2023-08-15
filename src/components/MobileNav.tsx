import Close from '../../assets/shared/icon-close.svg';

type Nav = {
    isOpen: boolean
    onClose: () => void
}

export default function MobileNav({onClose, isOpen}: Nav) {

  return isOpen ? (
    <div className='absolute top-0 left-36 bg-transparent w-64 backdrop-blur-2xl' style={{height:'844px'}}>
        <div>
            <img src={Close} className='absolute top-8 left-48' onClick={onClose}/>
        </div>
    </div>
  ) : null
}
