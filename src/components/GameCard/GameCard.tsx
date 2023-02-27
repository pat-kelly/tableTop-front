// styles
import styles from './GameCard.module.css';

//types
import { Game } from '../../types/models';

interface GameCardProps {
  game: Game;
}

const GameCard = ({game}: GameCardProps): JSX.Element =>{

  console.log(game);
  
  return(
    <>
    
    </>
  )
}

export default GameCard;