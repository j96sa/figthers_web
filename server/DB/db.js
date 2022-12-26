import {v4 as uuid} from 'uuid';

export default {
    'ufc':[
        // OTHER DIVISION 125
        {
            'division':'flyweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':1,
                    'weight':'125 lbs',
                    'name':'Brandom Moreno',
                    'nick':'The Assasin Baby',
                    'age':29,
                    'record':'20-6-2',
                    'country':'Mexico'
                },

                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'125 lbs',
                    'name':'Deiveson Figueiredo',
                    'nick':'Deus da Guerra',
                    'age':34,
                    'record':'21-2-1',
                    'country':'Brazil'
                }
            ]
        },

        // OTHER DIVISION 135
        {
            'division':'bantamweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'135 lbs',
                    'name':'Aljamamin Sterling',
                    'nick':'Funk Master',
                    'age':33,
                    'record':'22-3-0',
                    'country':'Jamaica'
                },

                {
                    'id':uuid(),
                    'rank':'2',
                    'weight':'135 lbs',
                    'name':'Petr Jan',
                    'nick':'No Mercy',
                    'age':29,
                    'record':'16-4-0',
                    'country':'Rusia'
                }
            ]
        },

        // OTHER DIVISION 145
        {
            'division':'feather-weight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'145 lbs',
                    'name':'Max Holloway',
                    'nick':'Blessed',
                    'age':31,
                    'record':'23-7-0',
                    'country':'USA'
                },

                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'145 lbs',
                    'name':'Alexander Volkanovski',
                    'nick':'The Great',
                    'age':34,
                    'record':'25-1-0',
                    'country':'Rusia'
                }
            ]
        },

        // OTHER DIVISION 155
        {
            'division':'lightweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'155 lbs',
                    'name':'Charles Oliveira',
                    'nick':'Do Bronx',
                    'age':33,
                    'record':'33-9-0',
                    'country':'Brazil'
                },

                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'155 lbs',
                    'name':'Islam Makhachev',
                    'nick':null,
                    'age':31,
                    'record':'23-1-0',
                    'country':'Rusia'
                }
            ]
        },

        // OTHER DIVISION 170
        {
            'division':'welterweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'3',
                    'weight':'170 lbs',
                    'name':'Khamzat Chimaev',
                    'nick':'Borz',
                    'age':28,
                    'record':'12-0-0',
                    'country':'Switzerland'
                },

                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'170 lbs',
                    'name':'Kamaru Usman',
                    'nick':'The Nigerian Nightmare',
                    'age':35,
                    'record':'20-2-0',
                    'country':'Nigeria'
                }
            ]
        },

        // OTHER DIVISION 185
        {
            'division':'middleweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'185 lbs',
                    'name':'Alex Pereira',
                    'nick':'Poatan',
                    'age':35,
                    'record':'7-1-0',
                    'country':'Brasil'
                },

                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'185 lbs',
                    'name':'Israel Adesanya',
                    'nick':'The Last Style Bender',
                    'age':33,
                    'record':'23-2-0',
                    'country':'Nigeria'
                }
            ]
        },

        // OTHER DIVISION 205
        {
            'division':'light-heavyweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'205 lbs',
                    'name':'Jiri Prochazka',
                    'nick':null,
                    'age':30,
                    'record':'29-3-1',
                    'country':'Czechia'
                },

                {
                    'id':uuid(),
                    'rank':'2',
                    'weight':'205 lbs',
                    'name':'Jan Błachowicz',
                    'nick':'The Polish Power',
                    'age':39,
                    'record':'29-9-0',
                    'country':'Poland'
                }
            ]
        },

        // OTHER DIVISION +205
        {
            'division':'heavyweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'+205 lbs',
                    'name':'Francis Ngannou',
                    'nick':'The Predator',
                    'age':36,
                    'record':'17-3-0',
                    'country':'Camerun'
                },

                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'+205 lbs',
                    'name':'Cyril Gane',
                    'nick':'Bon Gamin',
                    'age':32,
                    'record':'11-1-0',
                    'country':'France'
                }
            ]
        },
    ],

    'box':[
        // OTHER DIVISION 125
        {
            'division':'bantam',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'champ',
                    'weight':'54kg',
                    'name':'Naoya Inoue',
                    'nick':'The Monster',
                    'age':29,
                    'record':'23-0-0',
                    'country':'Japan'
                },

                {
                    'id':uuid(),
                    'rank':'2',
                    'weight':'55kg',
                    'name':'Nonito Donaire',
                    'nick':'The Filipino Flash',
                    'age':40,
                    'record':'42-7-0',
                    'country':'Filipines'
                }
            ]
        },

        {
            'division':'light-middleweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'154 lbs',
                    'name':'Jermell Charlo',
                    'nick':'Iron Man',
                    'age':31,
                    'record':'33-1-0',
                    'country':'United States'
                },
       
                {
                    'id':uuid(),
                    'rank':'3',
                    'weight':'154 lbs',
                    'name':'Erislandy Lara',
                    'nick':'The American Dream',
                    'age':37,
                    'record':'27-3-3',
                    'country':'Cuba'
                },
            ]
        },
       
        {
            'division':'light-heavyweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'175 lbs',
                    'name':'Artur Beterbiev',
                    'nick':'The Boa Constrictor',
                    'age':35,
                    'record':'15-0-0',
                    'country':'Russia'
                },
       
                {
                    'id':uuid(),
                    'rank':'2',
                    'weight':'175 lbs',
                    'name':'Dmitry Bivol',
                    'nick':'The White Wolf',
                    'age':29,
                    'record':'17-0-0',
                    'country':'Russia'
                }
            ]
        },

        {
            'division':'lightweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'135 lbs',
                    'name':'Teofimo Lopez',
                    'nick':'The Takeover',
                    'age':24,
                    'record':'16-0-0',
                    'country':'United States'
                },
       
                {
                    'id':uuid(),
                    'rank':'2',
                    'weight':'135 lbs',
                    'name':'Vasyl Lomachenko',
                    'nick':'Hi-Tech',
                    'age':33,
                    'record':'14-2-0',
                    'country':'Ukraine'
                },
       
                {
                    'id':uuid(),
                    'rank':'3',
                    'weight':'135 lbs',
                    'name':'Ryan Garcia',
                    'nick':'Kingry',
                    'age':23,
                    'record':'21-0-0',
                    'country':'United States'
                },
       
                {
                    'id':uuid(),
                    'rank':'4',
                    'weight':'135 lbs',
                    'name':'Gervonta Davis',
                    'nick':'Tank',
                    'age':26,
                    'record':'24-0-0',
                    'country':'United States'
                }
            ]
        },

        {
            'division':'heavyweight',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'1',
                    'weight':'200+ lbs',
                    'name':'Tyson Fury',
                    'nick':'The Gypsy King',
                    'age':33,
                    'record':'30-0-1',
                    'country':'United Kingdom'
                },
       
                {
                    'id':uuid(),
                    'rank':'2',
                    'weight':'200+ lbs',
                    'name':'Anthony Joshua',
                    'nick':'AJ',
                    'age':32,
                    'record':'24-1-0',
                    'country':'United Kingdom'
                },
       
                {
                    'id':uuid(),
                    'rank':'3',
                    'weight':'200+ lbs',
                    'name':'Deontay Wilder',
                    'nick':'The Bronze Bomber',
                    'age':36,
                    'record':'42-1-1',
                    'country':'United States'
                },
       
                {
                    'id':uuid(),
                    'rank':'4',
                    'weight':'200+ lbs',
                    'name':'Oleksandr Usyk',
                    'nick':'The Cat',
                    'age':33,
                    'record':'18-0-0',
                    'country':'Ukraine'
                }
            ]
        },
       
        {
            'division': 'super-middleweight',
            'fighters': [
                {
                    'id': uuid(),
                    'rank': 1,
                    'weight': '168 lbs',
                    'name': 'Canelo Alvarez',
                    'nick': 'Canelo',
                    'age': 30,
                    'record': '55-1-2',
                    'country': 'Mexico'
                },
                {
                    'id': uuid(),
                    'rank': 2,
                    'weight': '168 lbs',
                    'name': 'Caleb Plant',
                    'nick': 'Sweethands',
                    'age': 28,
                    'record': '21-0',
                    'country': 'United States'
                }
            ]
        },

        {
            'division': 'welterweight',
            'fighters': [
                {
                    'id': uuid(),
                    'rank': 1,
                    'weight': '147 lbs',
                    'name': 'Terence Crawford',
                    'nick': 'Bud',
                    'age': 33,
                    'record': '37-0',
                    'country': 'United States'
                },
                {
                    'id': uuid(),
                    'rank': 2,
                    'weight': '147 lbs',
                    'name': 'Errol Spence Jr.',
                    'nick': 'The Truth',
                    'age': 30,
                    'record': '26-0',
                    'country': 'United States'
                }
            ]
        }
    ]
}

/**
 * 

{
    "id":"1357",
    "rank":2,
    "weight":"155 lbs",
    "name":"Dustin Poirirer",
    "nick":"The Diamond",
    "age":33,
    "record":"29-7-0",
    "country":"EUA"
}

{
    "id":"2468",
    "rank":1,
    "weight":"135 lbs",
    "name":"Sean O'Malley",
    "nick":"The Sugar Show",
    "age":28,
    "record":"16-1-0",
    "country":"EUA"
}

{
    "id":"123",
    "rank":2,
    "weight":"185 lbs",
    "name":"Robert Whittaker",
    "nick":"The Reaper",
    "age":31,
    "record":"25-6-0",
    "country":"Australia"
}

{
            'division':'',
            'fighters':[
                {
                    'id':uuid(),
                    'rank':'',
                    'weight':'',
                    'name':'',
                    'nick':'',
                    'age':,
                    'record':'',
                    'country':''
                },

                {
                    'id':uuid(),
                    'rank':'',
                    'weight':'',
                    'name':'',
                    'nick':'',
                    'age':,
                    'record':'',
                    'country':''
                }
            ]
        },
 */