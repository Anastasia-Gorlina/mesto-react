import '../index.css';


function PopupProfileComponent() {
  

  return (
    <>
      <div className="popup__container">
        <input
          type="text"
          name="popup__appellation"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
          required
          className="popup__profile popup__profile_name"
          id="profile-edit-name">
          </input>
          <span className="popup__error"></span>
        </div>
        <div>
        <input
          type="text"
          name="popup__inf"
          placeholder="Введите описание"
          minLength="2"
          maxLength="200"
          required
          className="popup__profile popup__profile_status"
          id="profile-edit-information"></input>
        <span className="popup__error"></span>
      </div>
    </>
  );
}

export default PopupProfileComponent;