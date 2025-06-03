const navLinks = [{
  name: 'Главная',
  link: './index.html'
},
{
  name: 'Блог',
  link: './blog.html'
},
{
  name: 'Проекты',
  link: './projects.html'
},
{
  name: 'Доклады',
  link: './presentations.html'
},
{
  name: 'Резюмешечка для работодателей',
  link: './resume.html'
},
];

const contactLinks = [{
  name: 'Гитхаб',
  link: 'https://github.com/raskolnikova'
},
{
  name: 'Телеграм',
  link: 'https://web.telegram.org/k/'
},
{
  name: 'Линкидин',
  link: 'https://ru.linkedin.com'
},
];

function getLink(name, href) {
  let li = document.createElement('li');

  let a = document.createElement('a');
  a.textContent = name;
  a.setAttribute('href', href);

  li.append(a);
  return li;
}

// for (let i = 0; i < navLinks.length; i++) {
//   const element = getLink(navLinks[i].name,navLinks[i].link);
//   navbar.append(element);
// }

function renderLinks(links, selector) {
  let container = document.querySelector(selector);

  links.forEach(link => {
    const element = getLink(link.name, link.link);
    container.append(element);
  });

}

renderLinks(navLinks, 'ul.navigation');
renderLinks(contactLinks, 'ol.navigation');
