import {Hero} from './hero';

export var HEROES: Hero[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];

/* Update section with firebase code */

/*export class HEROES {
    firebaseUrl: string;
    messagesRef: Firebase;

    constructor () {
        this.firebaseUrl = "resplendent-heat-1805.firebaseIO.com";
        return this.messagesRef = new Firebase(this.firebaseUrl);
    };
}*/