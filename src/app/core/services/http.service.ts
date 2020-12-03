import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = env.serverURL;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /*
  Ejemplo para enviar parametros y headers en la petición GET
  localvar: any;

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const myObject: any = { this: 'thisThing', that: 'thatThing', other: 'otherThing'};
  const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

  const options = { params: new HttpParams(httpParams), headers: headers };

  this.httpClient.get<any>('https://server:port/api/endpoint', options)
    .subscribe((data: any) => {
        this.localvar = data;
});
  */

 constructor(private httpClient: HttpClient) { }

 //  Pendiente manejar httpParams !!!
 //  public get(path: string, params: HttpParams = new HttpParams(), isText = null): Observable<any> { 
   public get(path: string, isText: boolean = false): Observable<any> {
     if (isText == true) {
       return this.httpClient.get(BASE_URL + path, { responseType: 'text' }).pipe(catchError(this.formatErrors));
     }
     return this.httpClient.get(BASE_URL + path).pipe(catchError(this.formatErrors));
   }
 
   public getParams(path: string, params: any): Observable<any> {
     return this.httpClient.get(BASE_URL + path).pipe(catchError(this.formatErrors));
   }
 
   public put(path: string, body: object = {}, isText = null): Observable<any> {
     if (isText != null) {
       return this.httpClient.put(BASE_URL + path, JSON.stringify(body), { responseType: 'text' });
     }
     return this.httpClient.put(BASE_URL + path, JSON.stringify(body));
   }
 
   public post(path: string, body: object = {}, isText: any = null): Observable<any> {
     if (isText != null) {
       return this.httpClient.post(BASE_URL + path, JSON.stringify(body), { responseType: isText });
     }
     return this.httpClient.post(BASE_URL + path, JSON.stringify(body));
   }
 
   public delete(path: string): Observable<any> {
     return this.httpClient.delete(BASE_URL + path).pipe(catchError(this.formatErrors));
   }
   
   public formatErrors(error: any): Observable<any> {
     return throwError(error.error);
   }
}
