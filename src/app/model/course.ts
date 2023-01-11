import { Category } from "./category";

export class Course {

    id : number;
    name : string;
    category : Category; 
    icon : string;

    constructor(id:number, name:string, category:Category, icon:string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.icon = icon;
    }


}