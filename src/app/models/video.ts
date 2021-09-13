import { Channel } from "./channel";

export class Video{
    id:number;
    src:string;
    title:string;
    description:string;
    preview:string;
    channel:Channel
    constructor(){
        this.id=0;
        this.src="";
        this.title="";
        this.description="";
        this.preview="";
        this.channel=new Channel();
    }
}