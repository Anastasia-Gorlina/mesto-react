import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupEditProfileComponent from './PopupProfileComponent';
import PopupAddPlaceComponent from './PopupAddPlaceComponent';
import PopupAvatarComponent from './PopupAvatarComponent';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const onEditAvatar = () => {setIsEditAvatarPopupOpen(true)};

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const onEditProfile = () => {setIsEditProfilePopupOpen(true)};

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const onAddPlace = () => {setIsAddPlacePopupOpen(true)};


  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPicturePopupOpen(false);
    setSelectedCard ({name:'', src:''})
  };

  const [selectedCard, setSelectedCard] = useState({name:'', src:''});
  const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false); 
  const onPicturePopup = () => {setIsPicturePopupOpen(true)};
  const handleCardClick  = (card) => {setSelectedCard(card); onPicturePopup()};

  return (
    <div className="page">
      <Header />
      <Main
        handleEditAvatarClick = {onEditAvatar} handleEditProfileClick = {onEditProfile}
        handleAddPlaceClick = {onAddPlace} onCardClick ={handleCardClick}
      />
      <Footer />

      <PopupWithForm 
        name = {'change-avatar-form'} title = {'Обновить аватар'} isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups} buttonText = {'Сохранить'}>
        <PopupAvatarComponent />
      </PopupWithForm>

      <PopupWithForm 
        name = {'profile'} title = {'Редактировать профиль'} isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups} buttonText = {'Сохранить'}>
        <PopupEditProfileComponent  />
      </PopupWithForm>

      <PopupWithForm 
        name = {'card'} title = {'Новое место'} isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups} buttonText = {'Сохранить'}>
        <PopupAddPlaceComponent />
      </PopupWithForm>

      <ImagePopup 
        card={selectedCard} isOpen = {isPicturePopupOpen} onClose={closeAllPopups}>
      </ImagePopup>
    </div>
  );
}

export default App;