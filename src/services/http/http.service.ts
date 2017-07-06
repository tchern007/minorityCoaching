import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class HttpService {

    headers: any;
    options: RequestOptions;  

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers })  
    }

    get(url: string, param: any): Observable<any> {
        console.log(`Appel URL : ${url} ${param.toString()}`)
        console.log(param);
        let params: URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }
        this.options = new RequestOptions({ headers: this.headers, search: params, withCredentials: true });
        return this._http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(url: string, param: any): Observable<any> {       
        console.log(`Appel URL : ${url}`)
        console.log(param);
        let params: URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.append(key, val);
            }
        }

        this.options = new RequestOptions({ headers: this.headers, withCredentials: true });
        return this._http
            .post(url, params, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    getHttpObservableArray(observableObjects: { url: string, parametres: any }[]): Observable<any>[] {
        let observableArray: Observable<any>[] = [];
        for (let observableObject of observableObjects) {
            observableArray.push(this.get(observableObject.url, observableObject.parametres));
            console.log(observableObject.url);
            console.log(observableObject.parametres);
        }
        return observableArray;
    }

    private extractData(res: Response) {        
        console.log(res.json());
        let body = res.json();
       
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}