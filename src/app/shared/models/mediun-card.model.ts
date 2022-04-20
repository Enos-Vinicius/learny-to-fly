import { BaseRecursoModel } from "./base-recurso.model";

export class MediunCard extends BaseRecursoModel {
    constructor(
        public numberCard?: string,
        public title?: string,
        public subtitle?: string,
        public circleColor?: string,
        public textColor?: string,
        public background?: string
    ){
        super();
    }

    static fromJson(jsonData: any): MediunCard{ 
        return jsonData;
    }
}