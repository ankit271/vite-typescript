{

    abstract class Notification{
        protected name : string = "Notification";
        abstract send(): void;

        noNotification(): void{
            console.log('No Notification');            
        }
    }

    class Email extends Notification{
        
        send():void{
            console.log("Email sent");                         
        }
        
        override noNotification(): void {
            console.log("Notification enabled for Email")
        }
    }

    class SMS extends Notification{
        send():void{
            console.log("SMS sent");            
        }

        noNotification(): void {
            console.log("Notification enabled for SMS")
        }
    }

    let email = new Email();
    email.send();
    email.noNotification()

    let sms = new SMS();
    sms.send();
    sms.noNotification();
    
}