export class Quotes {
    constructor(public id: number, public name: string, public description: string, public author:string,public submittedby:string, public completeDate:date){
        this.showDescription=false;
    }
}
