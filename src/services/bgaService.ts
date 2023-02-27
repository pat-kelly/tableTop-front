import * as tokenService from './tokenService';
import { Game } from '../types/models';

const BASE_URL = `https://api.boardgameatlas.com/api/search?client_id=zy2aMQasTE&`

async function fetchGames(searchTerms: string): Promise<Game[]>{
  try {

    const res = await fetch(`${BASE_URL}name=${searchTerms}&fuzzy_match=true`)
    
    const json = await res.json();
    
    return json.games.map((game: Game) => ({
      id: game.id,
      name: game.name,
      msrp: game.msrp,
      description: game.description,
      photo: game.image_url,
      publisher: game.primary_publisher.name,
      players: game.players,
      playtime: game.playtime,
    }));

  } catch (err) {
    throw(err);
  }
}

export { fetchGames }