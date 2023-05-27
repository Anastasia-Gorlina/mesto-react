import { useContext } from "react";
//import CurrentUserContext from "../contexts/CurrentUserContext";

/*function Card({ card, onCardClick, onCardLike, onCardDelete }) {

    // const currentUser = useContext(CurrentUserContext);

    // // Определяем, являемся ли мы владельцем текущей карточки
    // const isOwn = card.owner._id === currentUser._id;

    // // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    // const isLiked = card.likes.some(i => i._id === currentUser._id);
    // const cardLikeButtonClassName = (
    // `element__vector ${isLiked ? 'element__vector-counter' : ''}`
    // );

    const handleLikeClick = () => { onCardLike(card) };
    const handleDeleteClick = () => { onCardDelete(card) };

return (
    <article className="element">
        {isOwn && <button onClick={handleDeleteClick} type="button" aria-label="Кнопка удалить" className="element__delete-button"></button>}
        <img onClick={() => { onCardClick(card) }} alt={card.name} className="element__image" src={card.link} />
        <div className="element__inf">
            <h2 className="lement__title">{card.name}</h2>
            <div className="element__vector-container">
                <button onClick={handleLikeClick} type="button" aria-label="Кнопка лайк" className={cardLikeButtonClassName}></button>
                <span className="element__vector-counter">{card?.likes.length}</span>
            </div>
        </div>
    </article>
)
}

<template className="card__template">
<article className="element">
  <img className="element__image" />
  <div className="element__inf">
    <h2 className="element__title"></h2>
    <div className="element__vector-container">
      <button type="button" aria-label="Like button" className="element__vector"></button>
      <span className="element__vector-counter">0</span>
    </div>
  </div>
  <button type="button" aria-label="Delete button" className="element__delete_button"></button>
</article>
</template>


export default Card;*/