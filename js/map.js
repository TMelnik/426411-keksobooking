'use strict';

//задание 1-->

// генерация случайного числа в диапазоне от минимального до максимального
function getRandom(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

//генерация случайного значения из массива

var arr = [];
function getRendomElement(array){
  return array[Math.floor(Math.random()*array.length)];
}

// генерация случайного массива строк

function getArray(array){

}

// массивы значений
var AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png'
];

var TITLE = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];

var TYPE = [
  'palace',
  'flat',
  'house',
  'bungalo'
];

var BOOK_TYPE_NAME = {
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalo': 'Бунгало'
};

var CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

var CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
// задание 2

var map = document.querySelector('.map');
map.classList.remove('map--faded');

//задание 1-->
var bookings = [];

for (var i =0; i < 8; i++){
  var booking = {
      'author': {
        'avatar': getRendomElement(AVATAR)
        },
      'offer':{
        'title': getRendomElement(TITLE),
        'address': getRandom(300, 900) + getRandom(150, 500),
        'prise': getRandom(1000, 1000000),
        'type': getRendomElement(TYPE),
        'rooms': getRandom(1, 5),
        'guests': getRandom(1, 10),
        'checkIn': getRendomElement(CHECKIN),
        'checkOut': getRendomElement(CHECKOUT),
        'features': getArray(FEATURES),
        'description': '',
        'photos': getRendomElement(PHOTOS),
        },
      'location': {
        'x': getRandom(300, 900),
        'y': getRandom(150, 500)
        }
    }
  bookings[i] = booking;
}

// задание 3 и 4
var mapPin = map.querySelector('.map__pins');
var mapPinTampele = document.querySelector('template').content.querySelector('.map__card');

for (var i = 0; i < bookings.length; i++){
   var element = mapPinTampele.cloneNode(true);
   var fragment = document.createDocumentFragment();
   fragment.appendChild(element);
   mapPin.appendChild(fragment);
}
//задание 5
var elemntBefore = document.querySelector('.map__filters-container');
var elemntParent = document.querySelector('.map');
var elemnt = document.createElement('div');

element.className = 'new_map_card';
element.insertBefore(element, elemntBefore);

var articles = document.querySelector('template').content.querySelector('article.map__card');

function renderPopup(someBooking) {
  var article = articles.cloneNode(true);
//вывести заголовок обьявления
  article.querySelector('.popup__title').textContent = someBooking.offer.title;
//вывести адрес
  article.querySelector('.popup__text--address').textContent = someBooking.offer.address;
//вывести цена
  article.querySelector('.popup__text--price').textContent = someBooking.offer.price + '₽/ночь';
//тип жилья
  article.querySelector('.popup__type').textContent = BOOK_TYPE_NAME[someBooking.offer.type];
//количество гостей и комнат
   article.querySelector('.popup__text--capacity').textContent = someBooking.offer.rooms + ' комнаты для ' + someBooking.offer.guests + ' гостей';
//время заезда и выезда
   article.querySelector('.popup__text--time').textContent = 'Заезд после ' + someBooking.offer.checkin + ', выезд до ' + someBooking.offer.checkout;
//доступные удобства
  article.querySelectorAll('.popup__features').textContent = someBooking.features.address;
//описание
   article.querySelector('.popup__description').textContent = someBooking.offer.description;
//фотографии
  var photoPopup = article.querySelector('.popup__photos');

  for (i = 0; i < someBooking.offer.photos.length; i++) {
    var photoCopy = photoPopup.querySelector('li').cloneNode(true);
    photoPopup.appendChild(photoCopy);
    photoPopup.querySelector('img').setAttribute('src', someBooking.offer.photos[i]);
  }
//аватар
    article.querySelector('img').setAttribute('src',someBooking.author.avatar);
   return article;
}

var fragmentPopup = document.createDocumentFragment();
fragmentPopup.appendChild(renderPopup(book[0]));
elem.appendChild(fragmentPopup);
