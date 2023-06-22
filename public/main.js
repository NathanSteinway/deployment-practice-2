const bullyButton = document.getElementById('pushBtn')
const learnButton = document.getElementById('eduBtn')
const schnoz = document.getElementById('schnoz')
const title = document.querySelector('h1')


const push = () => {

    title.innerHTML = "How could you?"
    schnoz.setAttribute('src', 'https://cdn.discordapp.com/attachments/600925351329136651/1120755561248608357/chrome_mk82XG1TqJ.png')

}

const learn = () => {

}


bullyButton.addEventListener('click', push)
learnButton.addEventListener('click', learn)