let popup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add ('.popup_opened');
}

function closePopup() {
  popup.classList.remove ('.popup_opened');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  formElement.addEventListener('submit', formSubmitHandler);
}