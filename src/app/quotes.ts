export class Quotes {
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public author:string,public submittedBy:string, public completeDate:Date){
        this.showDescription=false;
    }
}
