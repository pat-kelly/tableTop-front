/* ---------===== custom props ====--------- */


/* ---------===== board game models =====--------- */


export interface Game {
  id: string;
  name: string;
  msrp: number;
  description: string;
  photo: string;
  publisher: string;
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
