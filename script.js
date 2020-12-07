const iframe = document.querySelector('iframe')
const btn = document.getElementById('show')

btn.addEventListener('click', function () {
  if (btn.innerHTML = "Show" && iframe.classList.contains('hidden')) {
    iframe.classList.toggle('hidden')
    btn.innerHTML = "hide"
  } else if (btn.innerHTML = "hide" && !iframe.classList.contains('hidden')) {
    iframe.classList.toggle('hidden')
    btn.innerHTML = 'Show'
  }
  console.log("clicked")
})

