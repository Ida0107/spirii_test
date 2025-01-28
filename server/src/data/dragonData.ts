import { EDragonType } from "../dragons/enums";
import { IDragon } from "../dragons/interfaces";

export const dragonData: IDragon[] = [
    {
        id: '61a5eb358dde810012dc9bcd',
        name: 'Leo',
        size: 70,
        health: 100,
        type: EDragonType.CAT,
        createdAt: new Date('2021-08-19T19:41:35.982Z')
    },
    {
        id: '61a5eb358dde810012dc9b77',
        name: 'Lola',
        size: 65,
        health: 100,
        type: EDragonType.CAT,
        createdAt: new Date('2021-08-19T19:41:35.982Z')
    },
    {
        id: '61a5eb358dde810012dc9b88',
        name: 'Rio',
        size: 170,
        health: 100,
        type: EDragonType.GIRAFFE,
        createdAt: new Date('2021-08-19T19:41:35.982Z')
    },
    {
        id: '61a5eb358dde810012dc9b11',
        name: 'Micky',
        size: 120,
        health: 100,
        type: EDragonType.KOALA,
        createdAt: new Date('2021-08-19T19:41:35.982Z')
    },
    {
        id: '61a5eb358dde810012dc9b75',
        name: 'Leo',
        size: 300,
        health: 100,
        type: EDragonType.GIRAFFE,
        createdAt: new Date('2021-08-19T19:41:35.982Z')
    },
    {
        id: '61a5eb358dde810012dc9b55',
        name: 'Lola',
        size: 145,
        health: 100,
        type: EDragonType.KOALA,
        createdAt: new Date('2021-08-19T19:41:35.982Z')
    }
];
