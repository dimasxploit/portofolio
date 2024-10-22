const leftArrow = document.querySelector('.arrow-nav.left')
const rightArrow = document.querySelector('.arrow-nav.right')
const theShowcase = document.querySelector('#showcase')
const theTitle = document.querySelector('.the-s-title')

const showcaseData = [
  {
    backgroundImage: 'url(portofolio/images/bela-tarr-s.png)',
    title: 'BELA TARR',
  },
  {
    backgroundImage: 'url(portofolio/images/pos-psikologi-s.png)',
    title: 'POS PSIKOLOGI',
  },
]

let currentIndex = 0

function updateShowcase(index) {
  theShowcase.style.backgroundImage = showcaseData[index].backgroundImage
  theTitle.textContent = showcaseData[index].title
}

leftArrow.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? showcaseData.length - 1 : currentIndex - 1
  updateShowcase(currentIndex)
})

rightArrow.addEventListener('click', () => {
  currentIndex = currentIndex === showcaseData.length - 1 ? 0 : currentIndex + 1
  updateShowcase(currentIndex)
})

updateShowcase(currentIndex)
