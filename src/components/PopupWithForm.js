import '../pages/index.css';

function PopupWithForm({name, title, isOpen, onClose, children, buttonText}) {

    return (
        <>
        <PopupWithForm name="profile" title="Редактировать профиль">
          <input id="profile-edit-name" type="text" name="popup__appellation" placeholder="Введите имя" className="popup__profile popup__profile_name" minLength="2" maxLength="40" required />
          <span id="profile-edit-name-error" className="popup__error">Вы пропустили это поле.</span>
          <input id="profile-edit-information" type="text" name="popup__inf" placeholder="Введите описание" className="popup__profile popup__profile_status" minLength="2" maxLength="200" required />
          <span id="profile-edit-information-error" className="popup__error">Вы пропустили это поле.</span>
          <button type="submit" className="popup__sumbit-button popup__button">Сохранить</button>
        </PopupWithForm>
      
        <PopupWithForm name="card" title="Новое место">
          <input id="profile-add-img-name" className="popup__profile popup__profile_img-name" name="popup__name" placeholder="Name" type="text" minLength="2" maxLength="30" required />
          <span id="profile-add-img-name-error" className="popup__error">Вы пропустили это поле.</span>
          <input id="profile-edit-img-link" className="popup__profile popup__profile_img-link" type="url" name="popup__link" placeholder="Link to image" required />
          <span id="profile-edit-img-link-error" className="popup__error">Введите адрес сайта.</span>
          <button type="submit" className="popup__create-button popup__button">Создать</button>
        </PopupWithForm>
      
        <PopupWithForm name="avatar" title="Обновить аватар">
          <input type="url" name="popup__avatar-link" placeholder="Link to image" className="popup__profile popup__profile_type_avatar" id="input-change-avatar" required />
          <span id="input-change-avatar-error" className="popup__error"></span>
          <button type="submit" className="popup__button popup__delete-button">Save</button>
        </PopupWithForm>
      
        <PopupWithForm name="delete" title="Вы уверены?">
          <button type="submit" className="popup__button popup__delete-button">Yes</button>
        </PopupWithForm>
        </>
      )
}

export default PopupWithForm;