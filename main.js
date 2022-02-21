function insert(num) {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
}
function back() {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number.substring(
    0,
    number.length - 1
  )
}

function calc() {
  let expression = document.getElementById('result').innerHTML

  if (expression) {
    document.getElementById('result').innerHTML = eval(expression)
  }
}

document.querySelector('.Theme2').addEventListener('click', e => {
  e.document.body.classList.toggle('Dark-mode')
})
