import '../index.css';
import { api } from '../utils/Api';
import Card from './Card';
import {useState, useEffect} from 'react';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, editUserAvatar] = useState('');

  useEffect(() => {
      api.getUserInfo().then(res => {
          setUserName(res.name);
          setUserDescription(res.about);
          editUserAvatar(res.avatar);
      })
      .catch(err => {
          console.log ('Ошибка: ${err}')
      })
  }, [])

      const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards().then(res => {
            const arr = res.map((item) => {
                return {
                    src: item.link,
                    name: item.name,
                    likes: item.likes.length,
                    id: item._id
                }
            })
            setCards(arr);
        })
        .catch(err => {
          console.log ('Ошибка: ${err}')
      })
    }, [])

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__edit-avatar-button"
          onClick={handleEditAvatarClick}
          type="button"
        >
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              onClick={handleEditProfileClick}
              className="profile__edit-button"
            ></button>
          </div>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button
          type="button"
          onClick={handleAddPlaceClick}
          className="profile__button"
        ></button>
      </section>
      <section
        className="elements"
        aria-label="Photos added by the user"
      ></section>
      <section className="elements">
        {cards.map (card => {
          return <Card key={card.id} card={card} onCardClick = {onCardClick}/>
})}
      </section>
    </main>
  );
}

export default Main;