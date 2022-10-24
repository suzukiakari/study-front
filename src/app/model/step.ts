export class Step {
    
    id: number;
    name: string; 
    explanation: string;
    link: string;
    stepNo: number;
    icon: string

    constructor(id: number, name: string, explanation: string, link: string, stepNo: number, icon:string) {
        this.id = id;
        this.name = name;
        this.explanation = explanation;
        this.link = link;
        this.stepNo = stepNo;
        this.icon = icon;
    }

}