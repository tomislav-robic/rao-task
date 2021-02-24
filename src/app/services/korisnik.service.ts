import { Korisnik } from '../classes/korisnik'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export abstract class KorisniciService {
  korisniciUrl = 'api/korisnici'
  abstract getKorisnici(): Observable<Korisnik[]>;
  abstract getKorisnik(id: number): Observable<Korisnik>;
  abstract addKorisnik(id: string, username: string, ime: string, prezime: string, lozinka: string, oib: string, drzavaId: string): Observable<Korisnik>;
  abstract deleteKorisnik(id:string): Observable<Korisnik>;
  abstract searchKorisnik(username: string): Observable<Korisnik[]>;
}
