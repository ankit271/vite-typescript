function LogClass(target: Function) {
    console.log(`Class created: ${target.name}`);
}

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    console.log(originalMethod);
    console.log(propertyKey);
    console.log(target);


    descriptor.value = function(...args: any[]) {
        console.log(`Calling method: ${propertyKey} with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

@LogClass
class Person {
    constructor(public name: string, public age: number) {}

    @LogMethod
    display(name: string, age :number): void{
        console.log('hii' + " " + name + " " + age);        
    }
    
    @LogMethod
    display1(name: string): void{
        console.log('hii' + " " + name);        
    }
}

const p = new Person("John", 30);  // Logs: Class created: Person
console.log(p);
p.display('AVC',28)
p.display1('AVC')
