{

    interface Mysql {        
        dbname: string;
        username: string;
        password: string;
        port:number
    }

    interface Oracle {       
        dbname: string;
        username: string;
        password: string;        
    }
       
    class Sql<T extends Mysql | Oracle> {
        
        public readonly dbname: string;
        public readonly username : string
        public readonly password : string
        public readonly port?: number

        constructor(db : T) {
            this.dbname = db.dbname;
            this.username = db.username;
            this.password = db.password;

            if((db as Mysql).port){
                this.port = (db as any).port;
            }                       
        }

        connect(): void {
            console.log(`Connecting to the ${this.dbname}  database`);
        }

        disconnect(): void {
            console.log(`Disconnecting to the ${this.dbname}  database`);
        }
    }

    let mysql_db: Mysql = { dbname: "MySql", username: "root", password: "welcome123",port:3000 };
    let oracle_db: Oracle = { dbname: "Oracle", username: "root", password: "welcome123" };

    let mysql = new Sql<Mysql>(mysql_db);
    let oracle = new Sql<Oracle>(oracle_db);

    mysql.connect();
    mysql.disconnect(); 
    oracle.connect();
    oracle.disconnect()   

}