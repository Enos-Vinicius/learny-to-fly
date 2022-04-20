import { BaseRecursoModel } from "./base-recurso.model";

export class MinCard extends BaseRecursoModel {
    constructor(
        public icon?: string,
        public title?: string,
        public background?: string,
        public selected?: string
    ){
        super();
    }

    static fromJson(jsonData: any): MinCard{ 
        return jsonData;
    }
}