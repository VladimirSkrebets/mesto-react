import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
}

function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}

function handleCardClick(card) {
	setSelectedCard(card);
}

function closeAllPopups() {
	setIsEditProfilePopupOpen(false);
	setIsAddPlacePopupOpen(false);
	setIsEditAvatarPopupOpen(false);
	setSelectedCard({ name: '', link: '' });
}

  return (
    <div>
      <Header />
			<Main 
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}
			/>
			<Footer />

			<PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen ? "popup_opened" : ''}
        onClose={closeAllPopups}
      >
        <input id="name-input" className="popup__user-name popup__input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
				<span className="name-input-error popup__input-error"></span>
				<input id="work-input" className="popup__user-work popup__input" type="text" name="about" placeholder="О себе" required minLength="2" maxLength="200" />
				<span className="work-input-error popup__input-error"></span>
				<button className="popup__submit" type="submit">Сохранить</button>
      </PopupWithForm>

			<PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen ? "popup_opened" : ''}
        onClose={closeAllPopups}
      >
        <input id="title-input" className="popup__user-name popup__input" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
				<span className="title-input-error popup__input-error"></span>
				<input id="link-input" className="popup__user-work popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
				<span className="link-input-error popup__input-error"></span>
				<button className="popup__submit" type="submit">Создать</button>
      </PopupWithForm>

			<PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen ? "popup_opened" : ''}
        onClose={closeAllPopups}
      >
        <input id="avatar-link-input" className="popup__input popup__user-work" type="url" name="avatar"  placeholder="Ссылка на картинку" required />
				<span className="popup__input-error avatar-link-input-error"></span>
				<button className="popup__submit" type="submit">Сохранить</button>
      </PopupWithForm>

			<ImagePopup 
				onClose={closeAllPopups}
        card={selectedCard}
			></ImagePopup>
				
    </div>
	
  );
}

export default App;