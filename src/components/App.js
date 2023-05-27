import logo from '../logo.svg';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const handleEditProfile = () => {
    // Обработчик события редактирования профиля
    console.log('Редактирование профиля');
  };

  const handleAddPlace = () => {
    // Обработчик события добавления места
    console.log('Добавление места');
  };

  const handleEditAvatar = () => {
    // Обработчик события редактирования аватара
    console.log('Редактирование аватара');
  };

  return (
    <body className="page">
      <Header />
      <Main onEditProfile={handleEditProfile} onAddPlace={handleAddPlace} onEditAvatar={handleEditAvatar}/>
      <Footer />
      <PopupWithForm />


    </body>
  );
}

export default App;
