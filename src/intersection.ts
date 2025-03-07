{

    interface A {
        x: number;
        z: string;        
    }
    interface B {
        y: number;
    }

    type C = A & B;  // Intersection type, combining both A and B
    const c: C = { x: 1, y: 2, z: 'Ankit' };

    console.log(c);
    

}