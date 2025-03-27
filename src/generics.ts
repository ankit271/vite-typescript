{

    function getUniqueId<T>(id : T): T{
        
        if(typeof id === "string"){
            return id.toUpperCase() as T;
        }
        return id;
    }

   let x: number = getUniqueId(100);
   let email: string =  getUniqueId("abc@gmail.com")

    console.log(x);
    console.log(email);

    
}