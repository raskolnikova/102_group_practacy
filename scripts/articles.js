const articles = [{
  title: 'Как выбрать корм для кошечек',
  description: 'Котики любят вкусно покушать, но важно выбрать для них правильный корм',
  imgSrc: "./images/scale_1200.jpeg",
},
{
  title: 'Покрываем тестами с помощью Jes',
  description: ' Тесты разные нужны, тесты важны и круты',
  imgSrc: "./images/test.png",
},
{
  title: 'Покрываем тестами с помощью Jest',
  description: ' Тесты разные нужны, тесты важны и круты',
  imgSrc: "./images/test.png",
},
];

function createArticle(article) {
  let container = document.createElement('div');
  container.classList.add('article');

  let title = document.createElement('h2');
  title.textContent = article.title;
  
  let description = document.createElement('p');
  description.textContent =  article.description;

  let image = document.createElement('img');
  image.setAttribute('src', article.imgSrc)
  image.setAttribute('width',"200")
  image.setAttribute('height', "200")
  image.setAttribute('alt', "Воть моя фотокарточка")

  container.append(title,description,image)

  return container;
}

function renderArticles(articles){
 let container =  document.querySelector('.articles');

 if(articles.length === 0 || articles === null || articles === undefined ){
  container.innerHTML=`<h2>Статей пока нет</h2>`
 }

 articles.forEach(article => {
  const articleDom = createArticle(article);
  container.append(articleDom);
 })
}

renderArticles(articles);


//  <div class="article">
//         <h2>Как выбрать корм для кошечек</h2>
//         <p>Котики любят вкусно покушать, но важно выбрать для них правильный корм</p>
//         <img width="200" height="200" src="./images/scale_1200.jpeg" alt="Воть моя фотокарточка">
//       </div>

//       <div class="article">
//         <h2>Покрываем тестами с помощью Jest</h2>
//         <p>
//           Тесты разные нужны, тесты важны и круты
//         </p>
//         <img width="200" height="200"  src="./images/test.png" alt="Воть моя фотокарточка">
//       </div>