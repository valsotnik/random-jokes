const button = document.querySelector('.button')
const quote = document.querySelector('.quote')
const image = document.querySelector('.image')
const url = 'https://api.chucknorris.io/jokes/random'
const langButton = document.querySelector('.language')
// ===============================

async function getData () {
	try {
	
		const res = await fetch(url);
		const data = await res.json();
		showData(data);
	} catch (error) {
		console.log(error)
	}
}

function showData (data) {
	const { value: joke} = data;
	quote.textContent = joke;
}

async function getDataRu () {
		const quotes = 'data.json';
		const res = await fetch(quotes);
		const data = await res.json();
		console.log(data)
		showDataRu(data);
}
getDataRu()

function showDataRu (data) {
	const numFromData = getRandom(0,53);
	const { value: joke} = data[numFromData];
	console.log(data[numFromData])
	quote.textContent = joke;
}

function randomImage () {
	const num = getRandom(1,13);
	image.src = `./assets/img/${num}.png`
}
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

langButton.innerHTML = 'en'
button.innerHTML = "Chuck's quote"
function changeLang () {
randomImage();
langButton.classList.toggle('switch');
if (langButton.classList.contains('switch')) {
	langButton.innerHTML = 'ru';
	button.innerHTML = 'Цитата Чака';
	getDataRu();
} else {
	langButton.innerHTML = 'en';
	button.innerHTML = "Chuck's quote";
	getData();
}

}

function getDataFull () {
	if (langButton.classList.contains('switch')) {
		getDataRu();
	} else {
		getData();
	}
}

// =================================

button.addEventListener('click', getDataFull);
button.addEventListener('click', randomImage);
window.addEventListener('load', getData);
window.addEventListener('load', randomImage);
langButton.addEventListener('click', changeLang)
