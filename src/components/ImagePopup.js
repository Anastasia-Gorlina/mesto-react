function ImagePopup({card, onClose}) {
    return(
        <div id="popup-big-image" className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
            <div className="popup-figure-container">
                <button onClick={onClose} type="button" aria-label="Кнопка закрыть попап" className="popup__close-button"></button>
                <img className="popup__image" src={card?.link} alt={card?.name} />
                <figcaption className="popup-image-status">{card?.name}</figcaption>
            </div>
        </div>
    )
}

export default ImagePopup;