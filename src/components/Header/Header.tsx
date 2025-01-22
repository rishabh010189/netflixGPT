import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/Netflix_Logo.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector((store:any) => store.user);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User logged off successfully!')
    }).catch((error:any) => {
      console.log('Something went wrong')
    });
  }

  return (
    <div className='flex justify-between items-center absolute px-16 py-4 w-full bg-gradient-to-b from-black z-40'>
      <img src={logo} alt="logo" className='w-44'/>
      {
        user && <div className='flex gap-6 items-center'>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' className='text-white cursor-pointer'/>
        </div>
        <FontAwesomeIcon icon={faBell} size='xl' className='text-white cursor-pointer'/>
        <div className='profileIcon cursor-pointer flex items-center group relative'>
          <img className="h-8 rounded-md" alt='profile-icon-img' src='https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' />
          <FontAwesomeIcon icon={faCaretDown} className='text-white px-3 group-hover:animate-[flip_1s_ease-in-out]'/>
          <div className='bg-slate-800 text-white w-60 hidden hover:block group-hover:block absolute right-0 top-8 rounded-sm border border-slate-300 p-3'>
            <ul className='text-center *:py-2'>
              <li className='text-md font-bold'>Welcome, {user.displayName}</li>
              <li onClick={signOutHandler} className='text-white text-center text-sm border-t'>Sign out of Netflix</li>
            </ul>
          </div>
        </div>
      </div>
      }

    </div>
  )
}

export default Header