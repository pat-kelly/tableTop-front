import { useState, useEffect } from 'react';
import styles from './CollectedGames.module.css';
import * as gameService from '../../services/gameService';
import { Game, shortGame } from '../../types/models';

const CollectedGames = (): JSX.Element =>{

  const [userGames, setUserGames] = useState<shortGame[]>([])


  useEffect((): void =>{
    const gameList = async(): Promise<void> =>{
      const initialGames: shortGame[] = await gameService.index();
      console.log('initGames',initialGames);
      setUserGames(initialGames);
    }
    gameList();
  })

  const handleDeleteGame =async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, GA_id: string) => {
    const res = await gameService.delGame(GA_id);
    console.log('success',res);
  }

  return (
    <div className={styles.container}>
      <h2>Games Collected:</h2>
      <ul>
        {userGames ?
          userGames.map((game,idx) =>(
            <li key={idx}>
              <div className={styles.gameContainer}>
                <img src={game.photo}/>
                <h3>{game.name}</h3>
                <button onClick={(evt) => handleDeleteGame(evt, game.GA_id)}>X</button>
              </div>
              
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