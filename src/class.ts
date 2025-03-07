{

    class Person {
        protected firstname: string;
        private lastname: string;

        constructor(fname: string, lname: string){
            this.firstname = fname;
            this.lastname = lname;
        }

        display(): void{
            console.log(`Hi ${this.firstname} ${this.lastname}`);            
        }    
    }

    class Boy extends Person{
        constructor(fname: string, lname: string){            
            super(fname, lname);
            this.firstname = 'Ajay';            
        }

        printWelcome(){
            console.log('Welcome');            
        }

        static welcome(){
            console.log('Welcome');
        }
    }

    let p: Boy = new Boy('Ankit','Mishra')
    p.display();
    p.printWelcome();
    Boy.welcome();
}