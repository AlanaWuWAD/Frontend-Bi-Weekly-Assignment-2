const getQuote = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const quote = await res.json()
    console.log(quote)
    makeContent(quote)
}

const main = document.querySelector('main')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')

function makeContent(res) {
    h1.innerHTML = `
    ADVICE #${res.slip.id}`
    p.innerHTML = `
    ${res.slip.advice}
    `


}
const dice = document.querySelector('.dice')
dice.addEventListener('click', () => {
    getQuote()

})



