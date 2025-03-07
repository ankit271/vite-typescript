{    
    let randomData: Array<any> = ['Ankit','Priti','50',true,null,undefined]

    randomData.forEach( data => {
        if(typeof data === 'string'){
            console.log(data.toUpperCase());
        }
    })    

}