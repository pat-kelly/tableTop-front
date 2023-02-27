// stylesheets
import styles from './Landing.module.css';

// types
import { User, Game } from '../../types/models';

// services
import * as bgaService from '../../services/bgaService';

// Components=
import GameCard from '../../components/GameCard/GameCard'

interface LandingProps {
  user: User | null;
  gameList: Game[];
}

// const newGame = await bgaService.landing();

const Landing = (props: LandingProps): JSX.Element => {
  const { user, gameList } = props;

  // console.log(gameList);
  
  return (
    <main className={styles.container}>
      <ul>
        {gameList.map((game) =>{
          return <GameCard game={game} />
        })}
      </ul>
    </main>
  )
}

export default Landing
