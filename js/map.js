'use strict';
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

var TYPE_NAME = {
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalo': 'Бунгало'
};

var BOOK_TIME = [
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

var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;


// задание 1-->

// генерация случайного числа в диапазоне от минимального до максимального
function getRandom(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

// генерация случайного значения из массива
function getRendomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// генерация случайного массива строк
function getUniqueValue(arrayValues) {
  return arrayValues.splice(getRandom(0, arrayValues.length - 1), 1)[0];
}

function getRandomArray(arrayValues) {
  var sourceValues = arrayValues.slice();
  var randomArrayLength = getRandom(1, sourceValues.length);
  var newArray = [];
  for (var i = 0; i < randomArrayLength; i++) {
    newArray[i] = getUniqueValue(sourceValues);
  }
  return newArray;
}

// задание 2

var map = document.querySelector('.map');
map.classList.remove('map--faded');


// задание 1-->

var getBooking = function () {
  var bookings = [];

  for (var i = 0; i < 8; i++) {
    var addrX = getRandom(300, 900);
    var addrY = getRandom(150, 500);

    bookings [i] = {
      'author': {
        'avatar': getRendomElement(AVATAR)
      },
      'offer': {
        'title': getRendomElement(TITLE),
        'address': addrX + ',' + addrY,
        'price': getRandom(1000, 1000000),
        'type': getRendomElement(TYPE),
        'rooms': getRandom(1, 5),
        'guests': getRandom(1, 10),
        'checkIn': getRendomElement(BOOK_TIME),
        'checkOut': getRendomElement(BOOK_TIME),
        'features': getRandomArray(FEATURES),
        'description': '',
        'photos': getRandomArray(PHOTOS)
      },
      'location': {
        'x': addrX,
        'y': addrY
      }
    };
  }
  return bookings;
};

var bookings = getBooking();

// задание 3 и 4
var mapPin = document.querySelector('.map__pins');
var template = document.querySelector('template').content;
var pinTemplate = template.querySelector('.map__pin');

var putPin = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 8; i++) {
    var templatePin = pinTemplate.cloneNode(true);
    templatePin.setAttribute('style', 'left: ' + (bookings[i].location.x - PIN_WIDTH / 2) + 'px; top: ' + (bookings[i].location.y - PIN_HEIGHT) + 'px');
    templatePin.querySelector('img').setAttribute('src', bookings[i].author.avatar);
    fragment.appendChild(templatePin);
  }
  mapPin.appendChild(fragment);
};


// задание 5

var elementBefore = document.querySelector('.map__filters-container');
var elementParent = document.querySelector('.map');
var element = document.createElement('div');

element.className = 'new_map__card';
elementParent.insertBefore(element, elementBefore);

var articleTemplatePopup = template.querySelector('article.map__card');

function renderPopup(someBooking) {
  var articlePopup = articleTemplatePopup.cloneNode(true);
  // вывести заголовок обьявления
  articlePopup.querySelector('.popup__title').textContent = someBooking.offer.title;
  // вывести адрес
  articlePopup.querySelector('.popup__text--address').textContent = someBooking.offer.address;
  // вывести цена
  articlePopup.querySelector('.popup__text--price').textContent = someBooking.offer.price + '₽/ночь';
  // тип жилья
  articlePopup.querySelector('.popup__type').textContent = TYPE_NAME[someBooking.offer.type];
  // количество гостей и комнат
  articlePopup.querySelector('.popup__text--capacity').textContent = someBooking.offer.rooms + ' комнаты для ' + someBooking.offer.guests + ' гостей';
  // время заезда и выезда
  articlePopup.querySelector('.popup__text--time').textContent = 'Заезд после ' + someBooking.offer.checkIn + ', выезд до ' + someBooking.offer.checkOut;
  // доступные удобства
  var articlePopupFeatures = articlePopup.querySelector('.popup__features');
  articlePopupFeatures.innerHTML = ' ';

  var fragmentLi = document.createDocumentFragment();
  for (var j = 0; j < someBooking.offer.features.length; j++) {
    var li = document.createElement('li');
    li.className = 'feature feature--' + someBooking.offer.features[j];
    fragmentLi.appendChild(li);
  }
  articlePopupFeatures.appendChild(fragmentLi);
  // описание
  articlePopup.querySelector('.popup__description').textContent = someBooking.offer.description;
  // фотографии
  var photoPopup = articlePopup.querySelector('.popup__photos');
  // задаем пустое содержимое элементу
  photoPopup.innerHTML = ' ';

  var imgPopupFragment = document.createDocumentFragment();

  for (var k = 0; k < someBooking.offer.photos.length; k++) {
    var imgPopupElement = document.createElement('img');
    imgPopupElement.setAttribute('src', someBooking.offer.photos[k]);
    imgPopupElement.setAttribute('width', '45px');
    imgPopupElement.setAttribute('heigth', '40px');
    imgPopupFragment.appendChild(imgPopupElement);
  }
  photoPopup.appendChild(imgPopupFragment);

  // аватар
  articlePopup.querySelector('img').setAttribute('src', someBooking.author.avatar);
  // return articlePopup;

  var fragmentPopup = document.createDocumentFragment();

  if (element.querySelector('article.map__card')) {
    element.querySelector('article.map__card').remove();
  }

  fragmentPopup.appendChild(renderPopup(bookings[0]));
  element.appendChild(fragmentPopup);
}


putPin();

// module4-task1


var pinMap = document.querySelector('.map__pin--main');
var address = document.getElementById('address');

pinMap.addEventListener('mouseup', function () {
  map.classList.remove('map--faded');
  document.querySelector('.notice__form').classList.remove('notice__form--disabled');
  document.querySelector('.notice__form').removeAttribute('disabled');
  var newAddressLeft = pinMap.offsetLeft - PIN_WIDTH / 2;
  var newAddressTop = pinMap.offsetTop + PIN_HEIGHT / 2;
  address.setAttribute('value', newAddressLeft + ', ' + newAddressTop);

});

var parentPin = document.querySelector('.map__pins');
parentPin.addEventListener('click', function (evt) {

  var targetPin = evt.target;
  if (targetPin.tagName === 'IMG') {
    targetPin = targetPin.parentElement;
  }

  if (targetPin.dataset.pinId !== void 0) {
    renderPopup(getBooking[parseInt(targetPin.dataset.pinId, 10)]);
  }

  var articlePopupAll = document.querySelectorAll('article.map__card');
  if (articlePopupAll.length >= 2) {
    articlePopupAll[0].remove();
  }
});


// module4-task2
var appartmentPrice = document.getElementById('price');

var selectType = document.getElementById('type');

// 2.3 Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»

selectType.addEventListener('change', function () {
  var selectedType = selectType.options[selectType.selectedIndex].value;

  var appartmentPriceMin = 0;

  if (selectedType === 'flat') {
    appartmentPriceMin = 1000;
  }
  if (selectedType === 'bungalo') {
    appartmentPriceMin = 0;
  }
  if (selectedType === 'house') {
    appartmentPriceMin = 5000;
  }
  if (selectedType === 'palace') {
    appartmentPriceMin = 10000;
  }
  appartmentPrice.setAttribute('min', appartmentPriceMin);
});

// Поля «Время заезда» и «Время выезда», при изменении значения одного поля, во втором выделяется соответствующее ему.

document.getElementById('timein').addEventListener('change', function () {
  var selectTimeIn = document.getElementById('timein');
  var selectedTimeIn = selectTimeIn.options[selectTimeIn.selectedIndex].value;

  var forRemoveOut = document.getElementById('timeout').querySelector('option[selected]');
  forRemoveOut.removeAttribute('selected');

  var addSelectedOut = document.getElementById('timeout').querySelector('option[value="' + selectedTimeIn + '"]');
  addSelectedOut.setAttribute('selected', 'selected');
});

document.getElementById('timeout').addEventListener('change', function () {
  var selectTimeOut = document.getElementById('timeout');
  var selectedTimeOut = selectTimeOut.options[selectTimeOut.selectedIndex].value;

  var forRemoveIn = document.getElementById('timein').querySelector('option[selected]');
  forRemoveIn.removeAttribute('selected');

  var addSelectedIn = document.getElementById('timein').querySelector('option[value="' + selectedTimeOut + '"]');
  addSelectedIn.setAttribute('selected', 'selected');
});

// 2.6. Поле «Количество комнат» синхронизировано с полем «Количество гостей» таким образом, что при
// выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:

var selectRoomNumber = document.getElementById('room_number');
var accessCapacity = document.getElementById('capacity');

selectRoomNumber.addEventListener('change', function () {
  var selectedRoomNumber = selectRoomNumber.options[selectRoomNumber.selectedIndex].value;

  var allRooms = accessCapacity.querySelectorAll('option');
  for (var q = 0; q < allRooms.length; q++) {
    allRooms[q].setAttribute('disabled', 'disabled');
    allRooms[q].removeAttribute('selected');
  }

  if (selectedRoomNumber <= 3) {
    for (var t = 1; t <= selectedRoomNumber; t++) {
      accessCapacity.querySelector('option[value="' + t + '"]').removeAttribute('disabled');
      accessCapacity.querySelector('option[value="' + t + '"]').setAttribute('selected', 'selected');
    }
  }
  if (selectedRoomNumber >= 4) {
    accessCapacity.querySelector('option[value="4"]').removeAttribute('disabled');
    accessCapacity.querySelector('option[value="4"]').setAttribute('selected', 'selected');
  }
});

