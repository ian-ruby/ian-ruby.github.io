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

// contact form: send the message to my inbox without leaving the page
const contactForm = document.getElementById('contact_form')

if (contactForm) {
  const statusEl = document.getElementById('contact_status')
  const submitBtn = document.getElementById('contact_submit')
  const ENDPOINT = 'https://formsubmit.co/ajax/githinji.mnene@gmail.com'

  const showStatus = (type, html) => {
    statusEl.className = 'contact-status ' + type
    statusEl.innerHTML = html
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(contactForm))

    // the hidden "_honey" field is only ever filled in by bots
    if (data._honey) return

    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'
    showStatus('', '')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await res.json()
      if (!res.ok || String(result.success) !== 'true') throw new Error(result.message || 'Send failed')

      showStatus('success', 'Thanks, your message has been sent. I\'ll reply to the email address you gave.')
      contactForm.reset()
    } catch (err) {
      showStatus('error', 'Your message could not be sent. Please try again, or email me directly at ' +
        '<a href="mailto:githinji.mnene@gmail.com">githinji.mnene@gmail.com</a>.')
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = 'Send'
    }
  })
}

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
sr.reveal('.work-card', {interval: 200})

// scroll contact
sr.reveal('.contact-input', {interval: 200})
sr.reveal('.contact-button', {delay: 400})
