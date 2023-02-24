//assets
import styles from './SearchBar.module.css';

//npm modules

//types

const SearchBar = (): JSX.Element =>{

  return (
    <nav className={styles.searchBar}>
      <h2>Search for a Game</h2>
      <div>
        <input></input>
        <button>Search</button>
      </div>
      <p>Sort / Filter</p>
    </nav>
  )
}

export default SearchBar;