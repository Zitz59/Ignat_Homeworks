import React from 'react'
import Message from "./Message";


/*const messageData1 = [
    {id:1, avatar:'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',name:'Some Name', message:'some text',time:'22:00'},
    {id:1, avatar:'https://r1.mt.ru/r4/photo62D3/20696726373-0/png/bp.webp',name:'Amayak Akopyan', message:'Сим - салабим, рахат ибн лукум!',time:'22:02'},
    {id:1, avatar:'https://www.seekpng.com/png/detail/342-3424516_zitz-battletoad-art-battletoads.png',name:'Zitz the Battletoad', message:'keep write the code!!!',time:'22:03'}

ПОКОВЫРЯТЬ и ЗАРЕФАЧИТЬ
]*/

const messageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some message',
    time: '22:00',
}

const messageData2 = {
    avatar: 'https://r1.mt.ru/r4/photo62D3/20696726373-0/png/bp.webp',
    name: 'Amayak Akopyan',
    message: 'Сим - салабим, рахат ибн лукум!',
    time: '22:02',
}

const messageData3 = {
    avatar: 'https://www.seekpng.com/png/detail/342-3424516_zitz-battletoad-art-battletoads.png',
    name: 'Zitz the Battletoad',
    message: 'keep write the code!!!',
    time: '22:03',
}



function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />
            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />
            <Message
                avatar={messageData3.avatar}
                name={messageData3.name}
                message={messageData3.message}
                time={messageData3.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1