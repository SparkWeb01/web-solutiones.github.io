
const aS = document.querySelectorAll('a[href*="#"]')

for (let a of aS) {
  a.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = a.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
