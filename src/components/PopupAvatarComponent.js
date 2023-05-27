import '../index.css';


function PopupAvatarComponent() {

  return (
    <div className="popup__container">
      <input 
        type="url"
        name="popup__avatar-link"
        placeholder="Ссылка на картинку"
        className="popup__profile popup__profile_type_avatar"
        required = ""
      >
      </input>
      <span className="popup__error"></span>
      </div>
  );
}

export default PopupAvatarComponent;