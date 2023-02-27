// styles
import styles from './GameCard.module.css';

//types
import { Game } from '../../types/models';

interface GameCardProps {
  game: Game;
}

const GameCard = ({game}: GameCardProps): JSX.Element =>{

  
  /*
  game has id, name, msrp, description, photo,
  publisher, players, playtime
  */
  
  return(
    <div className={styles.container}>
      <img src={game.photo}></img>
      <div className={styles.rightPanel}>
        <p className={styles.gameTitle}>{game.name}</p>
        <p className={styles.desc}>{game.description}</p>
      </div>
    </div>
  )
}

export default GameCard;