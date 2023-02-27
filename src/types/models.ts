/* ---------===== custom props ====--------- */


/* ---------===== board game models =====--------- */
interface publisher{
  id: string;
  name: string;
  url: string;
}

export interface Game {
  id: string;
  name: string;
  msrp: number;
  description: string;
  image_url: string;
  primary_publisher: publisher;
  players: string;
  playtime: string;
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number; photo:string };
  id: number;
  createdAt: string;
  updatedAt: string;
}
