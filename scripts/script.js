// show menu
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if(toggle && nav) {
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show');
    })
  }

}

showMenu('nav_toggle', 'nav_menu')

// active and remove menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
  // active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // remove mobile menu
  const navMenu = document.getElementById('nav_menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// scroll home
sr.reveal('.home-title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home-img', {delay: 400})
sr.reveal('.home-social-icon', {interval: 200})

// scroll about
sr.reveal('.about-subtitle', {})
sr.reveal('.about-img', {delay: 400})
sr.reveal('.about-text', {interval: 200})

// scroll skills
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-text', {delay: 200})
sr.reveal('.skills-data', {interval: 200})
sr.reveal('.skills-img', {delay: 200})

// scroll work
sr.reveal('.work-img', {interval: 200})

// scroll contact
sr.reveal('.contact-input', {interval: 200})
sr.reveal('.contact-button', {delay: 400})