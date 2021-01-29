export default {
    id: '1',
    users: [{
        id:'u1',
        name: 'Michael',
        imageUri: '/Users/Michael/repos/polyTextual/polyTextual/20.jpeg'
    },{
        id:'u2',
        name:'Luka',
        imageUri:'/Users/Michael/repos/polyTextual/polyTextual/22.jpeg'
    }],
    messages: [{
        id:'m1',
        content:`C'mon, what are you waiting for..?`,
        createdAt: '2021-01-07T13:48:00.000Z',
        user: {
            id: 'u1',
            name: 'Michael'
        },
    }, 
    {
        
            id:'m2',
            content:`I dont know I guess Im just lazy lol`,
            createdAt: '2020-01-17T11:48:00.000Z',
            user: {
                id: 'u2',
                name: 'Luka'
            },
        
    },
    {
        
            id:'m3',
            content:`Well, how about we take a trip somewhere like here`,
            createdAt: '2020-01-17T10:48:00.000Z',
            user: {
                id: 'u1',
                name: 'Michael'
            }
        
    },
    {
        
            id:'m4',
            content:`I really think thats what we need to do lol`,
            createdAt: '2020-01-17T08:48:00.000Z',
            user: {
                id: 'u1',
                name: 'Michael'
            }
        
    }
]};