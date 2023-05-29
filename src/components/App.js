import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { useState, useEffect } from 'react';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false); 
  const [isLoadingButton, setisLoadingButton] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name:'', src:''});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)};

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)};
 
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)};

  const onPicturePopup = () => {
    setIsPicturePopupOpen(true)};

  const handleCardClick  = (card) => 
  {setSelectedCard(card); 
    onPicturePopup()};

  const closeAllPopups = (form) => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPicturePopupOpen(false);
    setSelectedCard ({name:'', src:''})
  };

  const [currentUser , setCurrentUser] = useState('');
  useEffect(() => {
    api.getUserInfo().then(res => {
        setCurrentUser(res);
    })
    .catch(err => {
        console.log (`Ошибка: ${err}`)
    })
  }, [])

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res);
    })
    .catch(err => {
        console.log (`Ошибка: ${err}`)
    })
  }, [])

  function handleCardLike(card) {

    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.сhangeLikeCard(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    }) 
  }
  function handleCardDelete (card) {
    // Отправляем запрос в API и удаляем карточку
    api.deleteCard(card._id)
        .then(() => {
          setCards((cards) => cards.filter((i) => i._id !== card._id));
        })
        .catch(err => {
          console.log (`Ошибка: ${err}`)
        })
  } 
  
  function handleUpdateUser (dataUser) {
    // Отправляем запрос в API и обновляем значения профиля
    //console.log(data)
    setisLoadingButton(true)
    api.editUserInfo(dataUser).then((res) => {
        setCurrentUser(res);
        closeAllPopups()
        setisLoadingButton(false)
      })
      .catch(err => {
          console.log (`Ошибка: ${err}`)
      })
  }
  
  function handleUpdateAvatar (dataAvatar) {
    // Отправляем запрос в API и обновляем аватар
    //console.log(data)
    setisLoadingButton(true)
    api.editUserAvatar(dataAvatar).then((res) => {
        setCurrentUser(res);
        closeAllPopups()
        setisLoadingButton(false)
      })
      .catch(err => {
          console.log (`Ошибка: ${err}`)
      })
  }
  
  function handleAddPlaceSubmit (newCard) {
    // Отправляем запрос в API и обновляем аватар
    //console.log(data)
    setisLoadingButton(true)
    api.addNewCard(newCard).then((newCard) => {
      setCards([newCard, ...cards]);
        closeAllPopups()
        setisLoadingButton(false);
      })
      .catch(err => {
          console.log (`Ошибка: ${err}`)
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        handleEditAvatarClick = {handleEditAvatarClick} handleEditProfileClick = {handleEditProfileClick}
        handleAddPlaceClick = {handleAddPlaceClick} onCardClick ={handleCardClick}
        onCardLike = {handleCardLike} onCardDelete ={handleCardDelete} cards={cards} 
      />
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        onUpdateAvatar = {handleUpdateAvatar} buttonText = {isLoadingButton ? 'Сохранение...' : 'Сохранить'}
      />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        onUpdateUser = {handleUpdateUser} buttonText = {isLoadingButton ? 'Сохранение...' : 'Сохранить'}
      />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        onAddPlace = {handleAddPlaceSubmit} buttonText = {isLoadingButton ? 'Сохранение...' : 'Сохранить'}
      />

      <ImagePopup 
                card = {selectedCard} isOpen = {isPicturePopupOpen} onClose = {closeAllPopups} >
      </ImagePopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;