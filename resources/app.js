const msgDisplay = document.getElementById('message');
const btnGenerator = document.getElementById("generator");

btnGenerator.addEventListener('click', () => { getAndDisplayMessage() })

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)]

const names = [
    'Michael',
    'Kim',
    'Finn',
    'Autumn',
    'Roxy',
    'Don',
    'Cathy',
    'Katie'
]

const verbs = [
    'ran',
    'swam',
    'jumped',
    'walked',
    'crawled',
    'skipped',
    'plummited',
    'dove',
    'drove'
]

const prepositions = [
    'into',
    'over',
    'under',
    'above',
    'below',
    'next to',
    'off',
    'on'
]

const things = [
    'the house',
    'the pool',
    'the street',
    'the sidewalk',
    'the border',
    'the planet',
    'the galaxy'
]

const constructMessage = () => {
    
    const name = getRandomElement(names);
    const verb = getRandomElement(verbs);
    const preposition = getRandomElement(prepositions);
    const thing = getRandomElement(things);

    return `${name} ${verb} ${preposition} ${thing}!`
}

const getAndDisplayMessage = () => {
    msgDisplay.innerHTML = constructMessage();
}