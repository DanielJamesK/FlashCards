
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

// let questions = []

// const addFlashCard = (e) => {
//   e.preventDefault()
//   let question = {
//     id: Date.now(),
//     description: document.querySelector('#question').value

//   }
//   questions.push(question)
//   document.querySelector('form').reset()

//   console.warn('added', { questions })
//   let pre = document.querySelector('#msg pre')
//   // pre.textContent = '\n' + JSON.stringify(questions, '\t', 2)

//   localStorage.setItem(`${question.id}`, `${question.description}`)
//   localStorage.setItem(`${answer.id}`, `${answer.description}`)
//   userQuestion = localStorage.getItem('MyQuestions')
//   createUserCard(localStorage.getItem(question.id))
//   console.log(localStorage.getItem(question.id))

// CODE I HAD BEFORE I CTRL Z TO SHOW TED
let questions = []
let answers = []
const addFlashCardQuestion = (e) => {
  e.preventDefault()

  let questionVal = document.querySelector('#question').value
  let answerVal = document.querySelector('#answer').value

  questions.push(questionVal)
  answers.push(answerVal)
  document.querySelector('form').reset()

  console.warn('added', { questions })
  console.warn('added', { answers })
  let pre = document.querySelector('#msg pre')
  // pre.textContent = '\n' + JSON.stringify(questions, '\t', 2)

  localStorage.setItem('question', `${questionVal}`)
  localStorage.setItem('answer', `${answerVal}`)
  // userQuestion = localStorage.getItem('MyQuestions')
  createUserCard(localStorage.getItem('question'), localStorage.getItem('answer'))
  console.log('question')
  console.log(question)
}

document.querySelector('#btn').addEventListener('click', addFlashCardQuestion)

function createUserCard(question, answer) {
  // const cardHTML = ` 
  // <div class="card">
  //   <div class="card__inner">
  //     <div class="card__face card__face--front">
  //       <img src="images/html5.png" alt="" class="pp--front">
  //       <h3>${question}</h3>
  //     </div>
  //     <div class="card__face card__face--back">
  //     <div class="card__content">
  //       <div class="card__header">
  //         <h2>Inserting an<br>image</h2>
  //       </div>
  //         <div class="card__body">
  //           <h3>Answer</h3>
  //           <p>To insert an image into your HTML markup, use the &lt; img &gt; tags.<br><br>For example <br>&lt; img src="puppy.jpg" &gt; <br><br>Try for yourself in the code editor</p>
  //         </div>
  //     </div>
  //   </div>
  //   </div>
  // </div>`

  // qContainer.innerHTML = cardHTML

  let div = document.createElement('div');
  let text = document.createTextNode('Test');
  let divInner = document.createElement('div')
  let divInnerFace = document.createElement('div')
  let divInnerFaceBack = document.createElement('div')
  let divInnerFaceBackContent = document.createElement('div')
  let divHeader = document.createElement('div')
  let divInnerFaceH3 = document.createElement('h3')
  let divInnerFaceH3Back = document.createElement('h3')
  let divCardBody = document.createElement('div')
  let divImg = document.createElement('img')
  let divP = document.createElement('p')
  div.classList.add('card');
  divInnerFaceH3.classList.add('card__header')
  divInnerFaceH3Back.classList.add('card__header')
  divInnerFaceH3Back.classList.add('h3')
  divInner.classList.add('card__inner')
  divInnerFace.classList.add('card__face')
  divInnerFace.classList.add('card__face--front')
  divInnerFaceBack.classList.add('card__face')
  divInnerFaceBack.classList.add('card__face--back')
  divInnerFaceBackContent.classList.add('card__content')
  divHeader.classList.add('card__header')
  divImg.classList.add('pp-front')
  divImg.classList.add('pp')
  divCardBody.classList.add('card__body')
  divImg.src = "images/html5.png"
  divInnerFaceH3Back.textContent = "ANSWER"
  divP.textContent = `${answer}`
  divInnerFaceH3.style.color = "#FFF"
  divInnerFaceH3.textContent = `${question}`
  divCardBody.appendChild(divP)
  divInnerFaceBackContent.appendChild(divInnerFaceH3Back)
  divInnerFaceBackContent.appendChild(divCardBody)
  divInnerFaceBack.appendChild(divInnerFaceBackContent)
  divInnerFace.appendChild(divImg)
  divInnerFace.appendChild(divInnerFaceH3)
  divInner.appendChild(divInnerFace)
  divInner.appendChild(divInnerFaceBack)
  divInner.appendChild(text);
  div.appendChild(divInner);
  qContainer.appendChild(div)


  const flip = function () {
    divInner.classList.toggle('is-flipped')
  }
  divInner.addEventListener('click', flip)
}





