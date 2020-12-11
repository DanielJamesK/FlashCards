const card = document.querySelector('.card')
const iframe = document.querySelector('iframe')
const btn = document.getElementById('show')
const left = document.getElementById('c-l')
const wholecard = document.getElementById('card')
const qContainer = document.querySelector('.container')




// btn.addEventListener('click', function () {
//   if (btn.innerHTML = "Try for yourself!" && iframe.classList.contains('hidden')) {
//     iframe.classList.toggle('hidden')
//     btn.innerHTML = "Hide"
//   } else if (btn.innerHTML = "Hide" && !iframe.classList.contains('hidden')) {
//     iframe.classList.toggle('hidden')
//     btn.innerHTML = 'Try for yourself!'
//   }
//   console.log("clicked")
// })

let questions = []

const addFlashCard = (e) => {
  e.preventDefault()
  let question = {
    id: Date.now(),
    description: document.querySelector('#question').value
  }
  questions.push(question)
  document.querySelector('form').reset()

  console.warn('added', { questions })
  let pre = document.querySelector('#msg pre')
  pre.textContent = '\n' + JSON.stringify(questions, '\t', 2)

  localStorage.setItem(`${question.id}`, `${question.description}`)
  userQuestion = localStorage.getItem('MyQuestions')
  createUserCard(localStorage.getItem(question.id))
  console.log(localStorage.getItem(question.id))

}

document.querySelector('#btn').addEventListener('click', addFlashCard)

function createUserCard(question) {
  const cardHTML = ` 
  <div class="card">
    <div class="card__inner">
      <div class="card__face card__face--front">
        <img src="images/html5.png" alt="" class="pp--front">
        <h3>${question}</h3>
      </div>
      <div class="card__face card__face--back">
      <div class="card__content">
        <div class="card__header">
          <h2>Inserting an<br>image</h2>
        </div>
          <div class="card__body">
            <h3>Answer</h3>
            <p>To insert an image into your HTML markup, use the &lt; img &gt; tags.<br><br>For example <br>&lt; img src="puppy.jpg" &gt; <br><br>Try for yourself in the code editor</p>
          </div>
      </div>
    </div>
    </div>
  </div>`

  qContainer.innerHTML = cardHTML
  cardHTML.addEventListener('click', function () {
    cardHTML.classList.toggle('is-flipped')
  })
}

