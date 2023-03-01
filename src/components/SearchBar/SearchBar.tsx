//assets
import styles from './SearchBar.module.css';

//services
import * as bgaService from '../../services/bgaService'
import { Game } from '../../types/models';
import { ChangeEvent, FormEvent, InputHTMLAttributes, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface searchProps{
  gameList: Game[];
  handleSearch: (searchTerms: string)=>Promise<void>
}

const SearchBar = (props: searchProps): JSX.Element =>{
  const {handleSearch} = props;
  const [searchTerms, setSearchTerms] = useState('');
  
  async function handleFormSubmit(event:FormEvent){
    event.preventDefault();
    const newTerms = searchTerms;
    handleSearch(newTerms);
  }

  const updateSearchTerms = (evt: ChangeEvent<HTMLInputElement>) =>{
    const { target } = evt;
    if(target) setSearchTerms((target as HTMLInputElement).value);
  }

  return (
    <nav className={styles.searchBar}>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input onChange={updateSearchTerms} placeholder="I'm searching for..." className={styles.input}></input>
          <button className={styles.searchButton}>🔍️</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar;