const searchInput = document.querySelector('#searchInput')
const moviesList = document.querySelector('#moviesList')
const noResults = document.querySelector('.no-results')
const hidden = document.querySelector('.hidden')

let movies = []

window.addEventListener('DOMContentLoaded', async () => {
  moviesList.innerHTML = `<h1>Loading</h1>`
  const data = await LoadData()
  movies = data
  renderMovies(movies)
})

async function LoadData() {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=NAME')            
    return await response.json();
  }catch(err) {
    console.error(err)
  }
};

searchInput.addEventListener('keyup', e => {
  const newMovies = movies.filter(movies => movies.show.name.toLowerCase().includes(searchInput.value.toLowerCase()))
  renderMovies(newMovies)
  // console.log(searchInput.value)
})


//const genBuilder = () => {let genText = "";for (i = 0; i < Generes.length; i++){genText += `<span class="text-label">${Generes[i]}</span>`}return genText}

const createMoviesItems = movies => movies.map(movie => `<li><div class="mv-img"><img src="${movie.show.image.medium}" /></div><div class="mv-content"><h2>${movie.show.name}</h2><p><b>Raiting:</b> ${movie.show.rating.average}</p><p>${movie.show.genres[0]}, ${movie.show.genres[1]}, ${movie.show.genres[2]}</p> ${movie.show.summary}</div></li><hr>`).join('')

function renderMovies(movies) {
  const itemString = createMoviesItems(movies)
  moviesList.innerHTML = itemString

}


const Foo = class A {
    constructor() {}
    bar() {
      return 'Hello World!';
    }
  };
  
  const instance = new Foo();
  instance.bar();  // "Hello World!"
  Foo.name; 

  const FooB = class B {
    constructor() {}
    bar() {
      return 'Class B!';
    }
  };

  const instanceB = new FooB();
  instanceB.bar();  // "Class B!"!"
  FooB.name; 