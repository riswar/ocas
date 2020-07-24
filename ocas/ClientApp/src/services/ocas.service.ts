import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ocasService {
    myURL: string;
    constructor(private httpClient: HttpClient, @Inject("BASE_URL") baseurl: string) {
        this.myURL = baseurl;
    }

    //Call get request method with Params
    getRequests(apiUrl: string, params?: HttpParams): Observable<any> {

        return this.httpClient.get(this.myURL + apiUrl, { params: params });
    }

    //Call Post request method with Params
    postRequests(apiUrl: string, userObject: any, params?: HttpParams): Observable<any> {

        
        return this.httpClient.post<any>(this.myURL + apiUrl, userObject);

    }

    //Call Put request method with Params
    putRequests(apiUrl: string, userObject: any, params?: HttpParams): Observable<any> {

        return this.httpClient.put(this.myURL + apiUrl, JSON.stringify(userObject));
    }

    //Call delete request method with Params
    deleteRequests(apiUrl: string, userObject: any, params?: HttpParams): Observable<any> {
        return this.httpClient.delete(this.myURL + apiUrl, { params: params });
    }
}
