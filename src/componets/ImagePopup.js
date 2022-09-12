import React from "react";

function ImagePopup(props) {
	return (
		<div className={`popup popup-place ${props.card.link ? "popup_opened" : ''}`}>
			<figure className="popup__figure">
				<button className="popup__close" type="button" onClick={props.onClose}></button>
				<img className="popup__image" src={props.card.link} alt="Фото картинки" />
				<figcaption className="popup__caption">{props.card.name}</figcaption>
			</figure>
		</div>
	);
}

export default ImagePopup;