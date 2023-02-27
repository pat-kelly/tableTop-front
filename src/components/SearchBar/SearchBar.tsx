//assets
import styles from './SearchBar.module.css';

//services
import * as bgaService from '../../services/bgaService'

const SearchBar = (): JSX.Element =>{

  async function handleSearch(){
    
  }

  return (
    <nav className={styles.searchBar}>
      <div>
        <input placeholder="I'm searching for..." className={styles.input}></input>
        <button onClick={handleSearch} className={styles.searchButton}>🔍️</button>
      </div>
      <p>Sort / Filter</p>
    </nav>
  )
}

export default SearchBar;