// Assets
import styles from './Nav.module.css';

// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav className={styles.nav}>
      {user ?
        <ul>
          <li><NavLink to="/">TableTop</NavLink></li>
          <li>
            <img 
              className={styles.profImg} 
              onClick={handleLogout} 
              src={user.profile.photo ? user.profile.photo : 'https://i.imgur.com/izJwDia.png'} 
            />
          </li>
        </ul>
      :
        <ul>
        <li><NavLink to="/">TableTop</NavLink></li>
          <li><NavLink to="/login"><img 
              className={styles.profImg}
              src='https://i.imgur.com/izJwDia.png' 
            /></NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
