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
      <img width='50px' src={game.photo}></img>
      
      <p>{game.name}</p>
    </div>
  )
}

export default GameCard;