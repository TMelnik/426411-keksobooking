'use strict';

//задание 1

// генерация случайного числа в диапазоне от минимального до максимального
function getRandom(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

//генерация случайного значения из массива
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

var CHECKIN, CHECKOUT = [
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

var bookings = [];

for (var i =0; i < 8; i++){
  var booking = [
    {
      `avatar`: getRendomElement(AVATAR)
    },
    {
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
        'photos': getRendomElement(PHOTOS);
        },
      'location': {
        'x': getRandom(300, 900),
        'y': getRandom(150, 500)
      }
    }
  ]
  bookings[i] = booking;
}

// задание 2

var map = document.querySelector('.map');
userDialog.classList.remove('.map-faded');

// задание 3
