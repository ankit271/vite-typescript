import { getName } from './function.ts'

{

    let message: string = getName('Ankit','Bhadohi');

    console.log(message);

   // Option 1: Constrain T to types that support addition
    function addToThing<T extends number | string>(a: T, b: T) {
        console.log(a);
        console.log(b);        
    }

    addToThing(5, 6);        // Works fine - outputs 11
    addToThing("A", "B");    // Works fine - outputs "AB"
}