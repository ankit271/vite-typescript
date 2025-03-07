{

    interface IUser {
        rollNo: number
        fullName: string,
        address?: string
    }

    const userData: IUser[] = [
        {rollNo: 101,fullName: 'Ankit',address :'Bhadohi'},
        {rollNo: 102,fullName: 'Ankita'},
        {rollNo: 103,fullName: 'Amit'},
        {rollNo: 104,fullName: 'Ajay'}
    ]

    let data: [number,string,string?];

    userData.forEach((user: IUser) => {
        data = [user.rollNo, user.fullName,user.address];
        console.log(data);
    })  

}