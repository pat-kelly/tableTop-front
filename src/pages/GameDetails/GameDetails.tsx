import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Game } from '../../types/models';
import * as bgaService from '../../services/bgaService'
import styles from './GameDetails.module.css'
import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';

interface GameDetailsProps {
  gameList: Game[];
}


const GameDetails = (props: GameDetailsProps): JSX.Element =>{
  
  const gameId = useParams();
  const curGame = props.gameList.find(game => game.id === gameId.id)
  
  const handleAddGame = async() =>{
    if(curGame){
      const res = await gameService.addGame(curGame);
    }    

  }

  return (
    <div className={styles.main}>
      {curGame ?
        <div className={styles.container}>
            <img src={curGame.photo}></img>
            <div className={styles.rightPanel}>
              <h3>{curGame.name}</h3>
              <p>
                Publisher: {curGame.publisher}<br/>
                MSRP: ${curGame.msrp}<br/>
                Number of players: {curGame.players}<br/>
                Average Playtime: {curGame.playtime} min<br/>
              </p>
              <p className={styles.desc}>{curGame.description}</p>
            </div>
            <button onClick={handleAddGame}><Link to='/games'>Add To Collection</Link></button>
        </div>
      :
        <h4 className={styles.container}>Loading..</h4>
      }
    </div>    
  )

}

export default GameDetails;


{/* <div className={styles.container}>
        <img src={curGame?.photo}></img>
        <div className={styles.rightPanel}>
          <h3>{curGame?.name}</h3>
        </div>
      </div> */}