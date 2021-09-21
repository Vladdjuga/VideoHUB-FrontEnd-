export class User{
    id:number;
    name:string;
    icon:string;
    gender:string;
    phone:string;
    birth:Date;
    roles:string[];
    img:any;
    constructor(){
        this.id=0;
        this.name="";
        this.icon="";
        this.gender="";
        this.phone="";
        this.birth=new Date();
        this.roles=[];
    }
}