import React from "react";

function Card(props) {

	function handleClick() {
		props.onCardClick(props.card);
}

	return (
		<li className="cards__item">
      <button className="cards__trash" type="button"></button>
      <img className="cards__picture" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="cards__wrapper">
        <h2 className="cards__title">{props.card.name}</h2>
        <div className="cards__like">
          <button className="cards__icon-like" type="button"></button>
          <span className="cards__like-number">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
	)

}

export default Card;