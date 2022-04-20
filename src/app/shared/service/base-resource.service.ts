
import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { BaseRecursoModel } from "../models/base-recurso.model";

export abstract class BaseRecursoService<T extends BaseRecursoModel> {
    protected http: HttpClient

    constructor(
        protected apiPath: string,
        protected injector,
        protected jsonDataToResourceFn: (jsonData: any) => T
    ) {
        this.http = injector.get(HttpClient);

     }

    getAll(): Observable<T[]> {
        return this.http.get(this.apiPath).pipe(
            map(this.jsonDataToRecursos.bind(this)),
            catchError(this.handleError)
        )
    }


  //PROTECTED METHODS

  protected jsonDataToRecursos(jsonData: any[]): T[] {
    const recursos: T[] = [];
        jsonData.forEach(
            element => recursos.push(this.jsonDataToResourceFn(element))
        );
        return recursos;
  }

  protected jsonDataToRecurso(jsonData: any): T{
    return jsonData;
  }

  protected handleError(error: any): Observable<any>{
    return throwError(error);
  }
}
