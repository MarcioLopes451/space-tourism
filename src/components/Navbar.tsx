import Logo from '../../assets/shared/logo.svg';
import Menu from '../../assets/shared/icon-hamburger.svg';

export default function Navbar() {
  return (
    <div className='w-full'>
        <div className='flex justify-between p-6 items-center'>
            <img src={Logo} />
            <img src={Menu} className='w-8'/>
        </div>
    </div>
  )
}
