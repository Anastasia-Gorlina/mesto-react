import '../index.css';

function PopupWithForm({ title, name, isOpen, onClose, children, buttonText}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} aria-label={title}>
          <div className="popup__container">
            <button type ="button" aria-label="close" onClick={onClose} className="popup__close-button"></button>
          <h3 className="popup__title">{title}</h3>
          <form className={`popup__form popup-${name}-form`} name={name}>
            {children}
          <button className={`popup__button popup__delete-button`} type="button" onClick={onClose}>{buttonText}</button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm;