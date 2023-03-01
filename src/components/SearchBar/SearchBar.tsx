//assets
import styles from './SearchBar.module.css';

//services
import * as bgaService from '../../services/bgaService'
import { Game } from '../../types/models';
import { FormEvent, InputHTMLAttributes, useState } from 'react';

interface searchProps{
  gameList: Game[];
  handleSearch: (searchTerms: string)=>Promise<void>
}

const SearchBar = (props: searchProps): JSX.Element =>{

  const [searchTerms, setSearchTerms] = useState('');
  
  async function handleSearch(event:FormEvent){
    event.preventDefault();
    // console.log(event.target.value);
  }

  const updateSearchTerms = (evt: Event) =>{
    const { target } = evt;
    if(target) setSearchTerms((target as HTMLInputElement).value);
  }

  return (
    <nav className={styles.searchBar}>
      <div>
        <form onSubmit={handleSearch}>
          <input onChange={updateSearchTerms} placeholder="I'm searching for..." className={styles.input}></input>
          <button className={styles.searchButton}>🔍️</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar;