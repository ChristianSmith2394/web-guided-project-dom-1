// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
const navElement = document.getElementById('mainNav')
const menuItems = document.getElementsByClassName('menu-item')
const paragraphs = document.getElementsByTagName('cat')
// A- finding across the entire DOM
const header = document.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')
const firstCard = document.querySelector('.card:nth-of-type(1)')
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
const titleFirstCard = firstCard.querySelector('h2')
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a')
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent))
// C- Turn the collection of links into a real array
const realLinks = Array.from(links)
// D- Use .find to find the anchor tag with the textContent of "Home"
console.log(realLinks.find(link => link.textContent === 'Home'))


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Lambda Dog"
titleFirstCard.textContent = "Doggo"
subtitleFirstCard.textContent = "This is the goodest boyo"
textFirstCard.textContent = "This is my doggo, he loves to eat treats and chase his tail!"
link2FirstCard.textContent = "Dog Ipsum"


//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
imageFirstCard.src = "https://i1.sndcdn.com/artworks-000810672895-5vv94q-t500x500.jpg"
link1FirstCard.setAttribute('href', 'https://www.google.com/search?q=dogs&oq=dogs&aqs=edge..69i57j0i433i457i512j0i402l2j0i433i512j0i512l3.3028j0j1&sourceid=chrome&ie=UTF-8')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => header.classList.toggle('sky'), 1000)
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em'

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard =firstCard.cloneNode(true)
document.querySelector('.card-group').appendChild(secondCard)

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]


const data =   {
    "contact": {
      "contact-heading" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    }
  };

  const contactHeading = document.querySelector('.contact-heading')
  const address = document.querySelector('.address')
  const phone = document.querySelector('.phone')
  const email = document.querySelector('.email')

  contactHeading.textContent = data['contact']['contact-heading']