import '../index.css';

function Card({onCardClick, card}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
        <img className="element__image" src={card.src} alt={card.name} onClick={handleClick}/>
        <button type="button" aria-label="Кнопка удалить" className="element__delete_button"></button>
        <div className="element__inf">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__vector-container">
            <button type="button" aria-label="Кнопка лайк" className="element__vector"></button>
            <h3 className="element__vector-counter">{card.likes.length}</h3>
          </div>
        </div>
      </article>
    );
}

export default Card; 