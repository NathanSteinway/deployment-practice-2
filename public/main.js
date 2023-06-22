const schnoz = document.querySelector('img')
const schnozPush = document.querySelector('button')

const welcome = evt =>{

    schnoz.src = "https://cdn.discordapp.com/attachments/600925351329136651/1120755561248608357/chrome_mk82XG1TqJ.png"

    alert('How could you?')

}

schnozPush.addEventListener('click', welcome)