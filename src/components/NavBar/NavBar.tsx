// Assets
import styles from './Nav.module.css';

// npm modules
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'
import { Profile } from '../../types/models';

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}



const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  const [menu, setMenu] = useState(false);

  function handleMenuClick(){
    menu ? setMenu(false) : setMenu(true);
  }

  return (
    <>
      <nav className={styles.nav}>
          <ul>
            <li><NavLink to="/">TableTop</NavLink></li>
            <li>
              <i onClick={handleMenuClick} className='fa-solid fa-bars'></i>
            </li>
            {user ?
              <li>
                <img 
                  className={styles.profImg} 
                  onClick={handleLogout} 
                  src={user.profile.photo}
                />
              </li>
            :
              <li>
                <NavLink to="/login">
                  <img 
                    className={styles.profImg}
                    src='https://i.imgur.com/izJwDia.png' 
                  />
                </NavLink>
              </li>
            }
          </ul>
      </nav>
      
        <div className={menu ? styles.subMenu : `${styles.subMenu} ${styles.hidden}`}>
          <NavLink onClick={handleMenuClick} to='/'>Home</NavLink>
          <NavLink onClick={handleMenuClick} to='/'>Profile</NavLink>
          <NavLink onClick={handleMenuClick} to='/'>My Games</NavLink>
        </div> 
      
    </>
  )
}

export default NavBar
