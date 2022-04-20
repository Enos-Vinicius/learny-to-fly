import { BaseRecursoModel } from "./base-recurso.model";

export class ContentCard extends BaseRecursoModel {
    constructor(
        public icon?: string,
        public title?: string,
        public subtitle?: string,
    ){
        super();
    }

    static fromJson(jsonData: any): ContentCard{ 
        return jsonData;
    }
}