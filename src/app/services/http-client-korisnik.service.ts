import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Korisnik } from '../classes/korisnik';
import { KorisniciService } from './korisnik.service';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
 
@Injectable({
  providedIn: 'root'
})
 
export class HttpClientKorisnikService extends KorisniciService {
   
  constructor(private http: HttpClient) {
    super();
   }
 
  getKorisnici(): Observable<Korisnik[]> {
    return this.http.get<Korisnik[]>(this.korisniciUrl).pipe(
      catchError(this.handleError)
    );
  }
 
  getKorisnik(id: number): Observable<Korisnik> {
    const url = `${this.korisniciUrl}/${id}`;
    return this.http.get<Korisnik>(url).pipe(
      catchError(this.handleError)
    );
  }
 
  addKorisnik(id: string, username: string, ime: string, prezime: string, lozinka: string, oib: string, drzavaId: string): Observable<Korisnik> {
    const Korisnik = { id, username, ime, prezime, lozinka, oib, drzavaId };
 
    return this.http.post<Korisnik>(this.korisniciUrl, Korisnik, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  deleteKorisnik(id:string): Observable<Korisnik> {
    const url = '${this.KorisniciUrl}/${id}';
 
    return this.http.delete<Korisnik>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  searchKorisnik(term: string): Observable<Korisnik[]> {
    term = term.trim();
    const options = term ?
    { params: new HttpParams().set('name', term)} : {};
 
    return this.http.get<Korisnik[]>(this.korisniciUrl, options).pipe(
      catchError(this.handleError)
    );
  }
   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
 
}