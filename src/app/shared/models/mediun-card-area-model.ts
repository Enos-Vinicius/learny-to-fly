import { BaseRecursoModel } from "./base-recurso.model";

export class MediunCardArea extends BaseRecursoModel {
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

    static fromJson(jsonData: any): MediunCardArea { 
        return jsonData;
    }
}