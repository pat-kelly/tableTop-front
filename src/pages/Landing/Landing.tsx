// stylesheets
import styles from './Landing.module.css';

// types
import { User, Game } from '../../types/models';

// services
import * as bgaService from '../../services/bgaService';

// Components=
import GameCard from '../../components/GameCard/GameCard'

import { Link } from 'react-router-dom' 

interface LandingProps {
  user: User | null;
  gameList: Game[];
}

// const newGame = await bgaService.landing();

const Landing = (props: LandingProps): JSX.Element => {
  const { user, gameList } = props;
  
  return (
    <main className={styles.container}>
      <ul>
        {gameList.map((game) =>{
          return (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>
                <GameCard game={game} />
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Landing
