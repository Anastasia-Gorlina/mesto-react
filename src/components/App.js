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
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false); 
  const [selectedCard, setSelectedCard] = useState({name:'', src:''});

  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true)};

  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true)};
 
  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true)};

  const onPicturePopup = () => {
    setIsPicturePopupOpen(true)};

  const handleCardClick  = (card) => 
  {setSelectedCard(card); 
    onPicturePopup()};

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPicturePopupOpen(false);
    setSelectedCard ({name:'', src:''})
  };

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