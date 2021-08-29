export class RegisterRequest{
    name:string;
    password:string;
    re_password:string;
    phone:string;
    birthday:Date;
    gender:string;
    constructor(){
        this.name="";
        this.password="";
        this.re_password="";
        this.phone="";
        this.birthday=new Date();
        this.gender="";
    }
}