import logo from '../../assets/Netflix_Logo.png';

const Header = () => {
  return (
    <div className='absolute px-16 py-4 w-full bg-gradient-to-b from-black z-40'>
      <img src={logo} alt="logo" className='w-44'/>
    </div>
  )
}

export default Header