const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]
const section = document.createElement("section");
const article1 = document.createElement("article");
const article2 = document.createElement("article");
const article3 = document.createElement("article");
const article4 = document.createElement("article");
const article5 = document.createElement("article");
const articles = document.getElementsByTagName("article");
const images = ["../Assets/ThingsFallAppart.jpg", "/Assets/FairyTales.jpg", "/Assets/TheDivineComedy.jpg", "/Assets/TheEpicOfGilgamesh.jpg", "/Assets/TheBookOfJob.jpg"];

section.appendChild(article1);
section.appendChild(article2);
section.appendChild(article3);
section.appendChild(article4);
section.appendChild(article5);
document.querySelector("body").appendChild(section);

//T??tulos
for (let i = 0; i < articles.length; i++) {
    let t??tulo = document.createElement("h1");
    t??tulo.innerHTML = books[i].title;
    articles[i].appendChild(t??tulo);
};

//Autores
for (let i = 0; i < articles.length; i++) {
    let autor = document.createElement("p");
    autor.innerHTML = books[i].author;
    articles[i].appendChild(autor);
};

//Pa??ses
for (let i = 0; i < articles.length; i++) {
    let pa??s = document.createElement("p");
    pa??s.innerHTML = books[i].country;
    articles[i].appendChild(pa??s);
};

//Im??genes
for (let i = 0; i < articles.length; i++) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", images[i]);
    articles[i].appendChild(imagen);
};

//Lenguajes
for (let i = 0; i < articles.length; i++) {
    let lenguaje = document.createElement("p");
    lenguaje.innerHTML = books[i].language;
    articles[i].appendChild(lenguaje);
};

//A??os
for (let i = 0; i < articles.length; i++) {
    let a??o = document.createElement("p");
    a??o.innerHTML = books[i].year;
    articles[i].appendChild(a??o);
};

//P??ginas
for (let i = 0; i < articles.length; i++) {
    let p??ginas = document.createElement("p");
    p??ginas.innerHTML = books[i].pages + " pages";
    articles[i].appendChild(p??ginas);
};