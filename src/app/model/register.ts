export class Register{
    username!:string;
    password!:string; 
    firstname!:string; 
    lastname!:string; 
    email!:string;
    phoneNumber!:string;
    constructor(username:string,firstname:string,lastname:string,password:string,e_mail:string,phonenumber:string){
        this.username=username;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=e_mail;
        this.password=password;
        this.phoneNumber=phonenumber;

    }
}