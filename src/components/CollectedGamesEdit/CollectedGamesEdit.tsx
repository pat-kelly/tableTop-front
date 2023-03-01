import styles from './CollectedGamesEdit.module.css';
import { shortGame } from '../../types/models';
import { useState } from 'react';
import { EditGameForm } from '../../types/forms';
import * as gameService from '../../services/gameService'

interface colGameEditProps {
  game: shortGame;
  handleDeleteGame: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, GA_id: string) => Promise<void>
}

const CollectedGamesEdit = (props:colGameEditProps): JSX.Element =>{
  
  const game = props.game;

  const [editToggle, setEditToggle] = useState(false);
  const [formData, setFormData] = useState<EditGameForm>({
    name: game.name,
    GA_id: game.GA_id,
    photo: game.photo,
    rating: game.rating
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      console.log(formData);
      await gameService.updateGame(formData)
      handleEditToggle();
      // await authService.changePassword(formData)
      // handleAuthEvt()
      // navigate('/')
    } catch (err) {
      console.log(err)
      // handleErrMsg(err, updateMessage)
    }
  }

  const handleEditToggle = ()=>{
    setEditToggle(!editToggle);
  }

  return(
    <>
    <div className={styles.gameContainer}>
      <img src={game.photo}/>
      <h3>{game.name}</h3>
      <button className={styles.editButton} onClick={handleEditToggle}>Edit Game</button>
      <button className={styles.delButton} onClick={(evt) => props.handleDeleteGame(evt, game.GA_id)}>X</button>
      {editToggle &&
        <form
          autoComplete='off'
          onSubmit={handleSubmit}
          className={styles.formContainer}
        >
        <label htmlFor='name'>
          Name: 
        </label>
        <input
          id='name'
          type='name'
          name='name'
          defaultValue={game.name}
          onChange={handleChange}
        ></input>
        <button className={styles.formButton}>Save</button>
        <p>*refresh the page to see changes</p>
        </form>
      }
    </div>
    </>
  )
}

export default CollectedGamesEdit