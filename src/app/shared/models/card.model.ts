import { BaseRecursoModel } from "./base-recurso.model";

export class Card extends BaseRecursoModel {
    constructor(
        public icon?: string,
        public title?: string,
        public background?: string,
        public selected?: boolean
    ){
        super();
    }

    static fromJson(jsonData: any): Card{ 
        return jsonData;
    }
}