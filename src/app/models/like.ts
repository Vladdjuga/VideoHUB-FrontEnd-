import { User } from "./user";
import { Video } from "./video";

export class Comment{
    id:number;
    user!: User;
    video!: Video;
    constructor(){
        this.id=0;
    }
}