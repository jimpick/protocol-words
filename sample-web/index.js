import { adjectives, nouns } from 'https://unpkg.com/protocol-words?module'

function getRandom (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function randomWords () {
  const adjective = adjectives[getRandom(adjectives.length)]
  const noun = nouns[getRandom(nouns.length)]
  return `${adjective} ${noun}`
}

const wordsEle = document.getElementById('words')

function loadOne () {
  wordsEle.innerHTML = `<h1>${randomWords()}</h1>`
}

loadOne()

const oneEle = document.getElementById('one')
oneEle.addEventListener('click', loadOne)

function loadMultiple () {
  const num = this
  let items = ''
  for (let i = 0; i < num; i++) {
    items += `<li>${randomWords()}</li>`
  }
  wordsEle.innerHTML = `<ul>${items}</ul>`
}

const tenEle = document.getElementById('ten')
tenEle.addEventListener('click', loadMultiple.bind(10))

const twentyEle = document.getElementById('twenty')
twentyEle.addEventListener('click', loadMultiple.bind(20))


