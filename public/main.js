const bullyButton = document.getElementById('pushBtn')
const learnButton = document.getElementById('eduBtn')
const schnoz = document.getElementById('schnoz')
const info = document.getElementById('infoContainer')
const title = document.querySelector('h1')

const fakeDB = {
    intro: "Chimimōryō (traditional Chinese and Japanese: 魑魅魍魎; simplified Chinese: 魑魅魍魉; pinyin: Chīmèi wǎngliǎng; rōmaji: chimimōryō) is a term that refers to monsters of the mountains and monsters of the rivers. The term originated in China roughly 2,500 years ago in ancient chronicles such as the Zuo Zhuan. It refers to various kinds of obake and things changed into yōkai. 'Chimi' (魑魅) refers to the monsters of the mountains, and 'mōryō' (魍魎) refers to the monsters of the river,[1] and so the word 'chimimōryō' is often used to refer to all monsters of the mountains and rivers.[2] Furthermore, the word 'minori' was also used for this. For this to be used to mean a 'ripening' (minoru) oni has been used in various regions since ancient times.",
    name: 'Chimi are said to be monsters that come about from strange atmosphere (miasma) in mountains and forests. Taking on an appearance with the face of a human, and the body of a beast, they would perplex humans. In the dictionary Wamyō Ruijushō from the Heian period, they were considered to be a type of oni under the Japanese name "sudama", and in the Edo period encyclopedia, the Wakan Sansai Zue, they were seen to be mountain gods (Yama-no-Kami).[3]',
    name2: 'Mōryō are considered to be spirits from mountains and rivers, and trees and rocks. They emerge from the life energy of mountains, water, trees, rocks, and all natural things, and fool humans. They are also said to eat the dead, have the appearance of a child, stand on two feet, have dark red skin, have red eyes, long ears, beautiful hair, and a voice that resembles that of a human. With this kind of appearance, they are thought to be oni. In the Wakan Sansai Zue, they are considered water gods (Suijin), and in the ancient Chinese book Zuo Zhuan, they are considered to be gods of swamps and marshes.[3]'
}


const push = () => {

    title.innerHTML = "How could you?"
    schnoz.setAttribute('src', 'https://cdn.discordapp.com/attachments/600925351329136651/1120755561248608357/chrome_mk82XG1TqJ.png')

}

const learn = () => {

    info.innerHTML = `
        <h1>ORIGINS</h1>
        <p>${fakeDB.intro}</p>
        <h1>NAME</h1>
        <p>${fakeDB.name}</p>
        <p>${fakeDB.name2}</p>
    `

}


bullyButton.addEventListener('click', push)
learnButton.addEventListener('click', learn)