//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNames = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("item");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 1500);
console.log(colorNames);

var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,11000);

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');
pauseButton.style.position = "absolute";
pauseButton.style.width = "662px";
pauseButton.style.height = "67px";
pauseButton.style.top = "600px";
pauseButton.style.left = "152px";
pauseButton.style.transform = "rotate(0deg)";

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,11000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var next = document.getElementById('next');
next.onclick = function(){
  pauseSlideshow();
  nextSlide();
};
next.style.position = "absolute";
next.style.width = "80px";
next.style.height = "616px";
next.style.top = "50px";
next.style.left = "882px";

var previous = document.getElementById('previous');
previous.onclick = function(){
  pauseSlideshow();
  previousSlide(); 
};
previous.style.position = "absolute";
previous.style.width = "80px";
previous.style.height = "616px";
previous.style.top = "50px";

/*//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNamess = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const randoms = (min, max) => {
  max = colorNamess.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphss = document.getElementsByClassName("textImgFatherChristmas");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphss.length; i++) {
    paragraphss[i].style.color = colorNamess[random(0)];
  }
}, 3000);
console.log(colorNames);*/

const textTwoSlide = document.querySelector('.textTwoSlide');
function blink() {
  const h2 = document./*getElementById*/querySelector('.textTwoSlide');//#hi
  h2.style.width = "800px";
   h2.style.fontSize = "30px";
  if (h2.style.visibility == "hidden") {
    h2.style.visibility = "visible";
    //textTwoSlide.style.color = "yellow"; //изменить цвет текста здесь можно
  } else {
    h2.style.visibility = "hidden";
  }
} 
/*можно сделать в штмл див или артикль id, но рекомендуют, чтобы id был 1, или class с текстом hi, найти его 
const article = document.getElementById, .querySelector('hi'); и включить сэт интервал*/
//window.setInterval(blink, 2000);
const time = setInterval(() => {
  const resultLoop = blink();
  if (resultLoop === true) { // если элемент найден
    clearInterval(time); // остановить setInterval
  }
}, 2000);  /*можно использовать для изменения фото если 
поставить ссылку с неограниченным колличеством фоток, на пример, 
'https://picsum.photos/100'*/

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNamesss = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const randomss = (min, max) => {
  max = colorNamesss.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphsss = document.getElementsByClassName("textTwoSlide");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphsss.length; i++) {
    paragraphsss[i].style.color = colorNamesss[random(0)];
  }
}, 3000);
console.log(colorNamesss);