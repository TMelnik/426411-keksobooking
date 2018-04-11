'use strict';

var AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png'
]

var TITLE = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
]

var ADDRESS = [
  "600, 350",
  "500, 250",
  "100, 150",
  "200, 350",
  "300, 100",
  "400, 50",
  "500, 60",
  "600, 90"
]

var prise = Math.floor(Math.random() * 1000000) + 1000;

var TYPE = [
  'palace',
  'flat',
  'house',
  'bungalo'
]

var rooms = Math.floor(Math.random() * 5) + 1;

var guests = Math.floor(Math.random() * 10) + 1;

var CHECKIN, CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
]

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
]

var description = '';

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
]

var locationX = Math.floor(Math.random() * 900) + 300;
var locationY = Math.floor(Math.random() * 500) + 150;

var map = document.querySelector('.map');
userDialog.classList.remove('.map-faded');

function getRendomElement(array){
  var index = Math.floor(Math.random()*array.length);
  return array[index];
}

var object = {};

for (var i =0; i < 8; i++){
  var objectFiller = {};

  objectFiller.avatar = getRendomElement(AVATAR);
  objectFiller.title = getRendomElement(TITLE);
  objectFiller.adsress =getRendomElement(ADDRESS);
  objectFiller.flatPrise = prise;
  objectFiller.etype = getRendomElement(TYPE);
  objectFiller.numberRooms = rooms;
  objectFiller.numberGuests = guests;
  objectFiller.timeCheckin = getRendomElement(CHECKIN);
  objectFiller.timeCheckout = getRendomElement(CHECKOUT);
  objectFiller.features = getRendomElement(FEATURES);
  objectFiller.aboutPlace = description;
  objectFiller.photos = getRendomElement(PHOTOS);
  objectFiller.locationX = getRendomElement(locationX);
  objectFiller.locationY = getRendomElement(locationY);

  object[i] = objectFiller;
}
