
{
    class Student {

        private _name;
        public age;
        readonly college_name:string = "XYZ College";

        constructor(fname:string, age:number, college_name:string){
            this._name = fname;
            this.age = age;
            this.college_name = college_name;
        }  
        
        display(): void{
            console.log("Name: " + this._name + ", Age: " + this.age);
        }

        set name(newName : string){
            this._name = newName;
        }

        get name(){
            return this._name;
        }
    }

    let student = new Student("John", 20,"ABC College");
    student.name = "Jane";
    student.display();
    console.log(student.age)
    console.log(student.name)    
    console.log(student.college_name)
}