import { useState, useEffect } from 'react';
import styles from './CollectedGames.module.css';
import * as gameService from '../../services/gameService';
import { Game, shortGame } from '../../types/models';
import CollectedGamesEdit from '../../components/CollectedGamesEdit/CollectedGamesEdit';

const CollectedGames = (): JSX.Element =>{

  const [userGames, setUserGames] = useState<shortGame[]>([])
  const [editWindow, setEditWindow] = useState(false);

  const handleEventWindow = ()=>{
    setEditWindow(!editWindow);
  }

  useEffect((): void =>{
    const gameList = async(): Promise<void> =>{
      const initialGames: shortGame[] = await gameService.index();
      setUserGames(initialGames);
    }
    gameList();
  },[])

  const handleDeleteGame =async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, GA_id: string) => {
    const res = await gameService.delGame(GA_id);
    setUserGames(await gameService.index());
  }

  return (
    <div className={styles.container}>
      <h2>Games Collected:</h2>
      <ul>
        {userGames ?
          userGames.map((game,idx) =>(
            <li key={idx}>
              <CollectedGamesEdit game={game} handleDeleteGame={handleDeleteGame}/>
            </li>
          ))
        :
        <h4>Loading..</h4>  
        }
      </ul>
    </div>
  )
}

export default CollectedGames;