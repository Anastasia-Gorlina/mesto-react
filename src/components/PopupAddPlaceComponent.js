import '../index.css';

function PopupAddPlaceComponent() {

  return (
    <>
      <div className="popup__container">
        <input
          type="text"
          name="popup__name"
          placeholder="Введите название"
          minLength="2"
          maxLength="30"
          className="popup__profile popup__profile_img-name"
          id="profile-add-img-name"
          required></input>
        <span className="popup__error"></span>
      </div>
          <div className="popup__container">
          <input
            required
            type="url"
            name="popup__link"
            placeholder="Ссылка на картинку"
            className="popup__profile popup__profile_img-link"></input>
          <span className="popup__error"></span>
        </div>
     </>
  );
}

export default PopupAddPlaceComponent;