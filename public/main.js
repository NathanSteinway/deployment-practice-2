const schnoz = document.getElementById('pushBtn')
const schnozImg = document.getElementByClassName('img')
const schnozPush = document.querySelector('button')

const push = evt =>{

    let schnozImgSrc = schnozImg.src

    schnozImgSrc.textContent = "https://cdn.discordapp.com/attachments/600925351329136651/1120755561248608357/chrome_mk82XG1TqJ.png"

    alert('How could you?')

}

schnozPush.addEventListener('click', push)