import { User } from "./user";
import { Video } from "./video";

export class Comment{
    id:number;
    text:string;
    user!: User;
    comment!: Comment;
    video!: Video;
    constructor(){
        this.id=0;
        this.text="";
    }
}