import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {

	const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getUserInfo()
				.then(userData => {
						setUserName(userData.name);
						setuserDescription(userData.about);
						setUserAvatar(userData.avatar);
				})
				.catch((err) => {
						console.log(err);
				})
				api.getDownloadedCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            })
}, [])

	return(
		<main>
			<section className="profile">
				<button className="profile__avatar-button" type="button" onClick={props.onEditAvatar} >
					<img className="profile__avatar" src={userAvatar} alt="Аватарка пользователя" />
				</button>
				<div className="profile__info">
					<div className="profile__wrapper">
						<h1 className="profile__title">{userName}</h1>
						<button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
					</div>
					<p className="profile__description">{userDescription}</p>
				</div>
				<button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
			</section>

			<section className="cards" aria-label="Карточки красивых мест">
				<ul className="cards__list">
					{cards.map((card) => (
						<Card
							key={card._id}
							card={card}
							onCardClick={props.onCardClick}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;