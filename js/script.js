let textTag = document.querySelector('header h1')
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++) {

     if(splittedText[i] == ' ') {
          splittedText[i] = '&nbsp'
     }
     textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

let k = 0
let interval = setInterval(() => {

     let spans = document.querySelectorAll('span')
     let singleSpan = spans[k]

     singleSpan.className = 'fadeMove'

     k++

     if(k === spans.length) {
          clearInterval(interval)
     }

}, 500)

window.onscroll = () => {
     let seci = document.querySelector('main .about .pic')
     let caci = document.querySelector('main .banda')
     let secp = seci.getBoundingClientRect().top
     let cacp = caci.getBoundingClientRect().top
     let scrp = window.innerHeight
     let img = document.querySelectorAll('main .about .pic div')
     let itan = document.querySelectorAll('main .banda .item')

     if(secp < scrp) {
          img.forEach(item => {
               item.classList.add('animated')
          })
     }

     if(cacp < scrp) {
          let i = 0

          let interval = setInterval(() => {

               itan[i].classList.add('animated')
               i++

               if(i === itan.length) {
                    clearInterval(interval)
               }
          }, 1000)
     }
}
