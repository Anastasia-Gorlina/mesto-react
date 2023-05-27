import '../pages/index.css';

function Main({handleEditAvatarClick, handleEditProfileClick,
    handleAddPlaceClick}) {
        
    function handleEditAvatarClick() {
        document.querySelector('.popup_type_change-avatar').classList.add('popup_opened');
      }
    
      function handleEditProfileClick() {
        document.querySelector('.popup_type_profile').classList.add('popup_opened');
      }
    
      function handleAddPlaceClick() {
        document.querySelector('.popup_type_card').classList.add('popup_opened');
      }

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__edit-avatar-button"  onClick={handleEditAvatarClick} type="button">
                <img className="profile__avatar" src={require('../images/avatar.png').default} alt="Avatar" />
            </button>
        <div className="profile__info">
            <div className="profile__title">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button type="button"  onClick={handleEditProfileClick} className="profile__edit-button"></button>
            </div>
            <p className="profile__status">Исследователь океана</p>
        </div>
            <button type="button" onClick={handleAddPlaceClick} className="profile__button"></button>
        </section>
        <section className="elements" aria-label="Photos added by the user">
        </section>
        </main>
    )
}
    
export default Main;