const card = document.querySelector('.card__inner')
const iframe = document.querySelector('iframe')
const btn = document.getElementById('show')
const left = document.getElementById('c-l')
const wholecard = document.getElementById('card')

card.addEventListener('click', function () {
  card.classList.toggle('is-flipped')
})

btn.addEventListener('click', function () {
  if (btn.innerHTML = "Try for yourself!" && iframe.classList.contains('hidden')) {
    iframe.classList.toggle('hidden')
    btn.innerHTML = "Hide"
  } else if (btn.innerHTML = "Hide" && !iframe.classList.contains('hidden')) {
    iframe.classList.toggle('hidden')
    btn.innerHTML = 'Try for yourself!'
  }
  console.log("clicked")
})

