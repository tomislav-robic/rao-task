import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Drzava } from '../classes/drzava';
import { DrzaveService } from './drzava.service';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
 
@Injectable({
  providedIn: 'root'
})
 
export class HttpClientDrzavaService extends DrzaveService {
   
  constructor(private http: HttpClient) {
    super();
   }
 
  getDrzave(): Observable<Drzava[]> {
    return this.http.get<Drzava[]>(this.drzaveUrl).pipe(
      catchError(this.handleError)
    );
  }
 
   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
 
}