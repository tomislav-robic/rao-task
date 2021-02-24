import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Korisnik } from '../classes/korisnik';
import { Drzava } from '../classes/drzava'
 
@Injectable({
  providedIn: 'root'
})
export class MyInMemoryService implements InMemoryDbService {

  createDb() {
    let korisnici: Korisnik[] = [
      {
        id: 'baafc548-1b9b-4f29-8fd3-00aeb8a7e233',
        username: 'pperic',
        ime: 'Pero',
        prezime: 'Perić',
		    lozinka: 'password1',
		    oib:'61022112045',
		    drzavaId:'c7082b4f-fd20-4ee6-a026-919d1d5eb3d5'
      },
      {
        id: '13e42dec-b0d6-4134-9b1b-f0ae44676365',
        username: 'owalker',
        ime: 'Olivia',
        prezime: 'Walker',
		    lozinka: 'password2',
		    oib:'45771086001',
		    drzavaId:'d4eb36e8-b46a-4731-b124-21e9bde7539f'
      },
	    {
        id: '66d5430b-322f-4ca9-a4c2-8bebab818a90',
        username: 'eschulz',
        ime: 'Emma',
        prezime: 'Schulz',
		    lozinka: 'password3',
		    oib:'84883895772',
		    drzavaId:'7e876478-b994-4c5c-984c-325fbe6f156f'
      }
    ]
    let drzave: Drzava[] = [
      {
        id: 'c7082b4f-fd20-4ee6-a026-919d1d5eb3d5',
        sifraDrzave: '1234',
        nazivDrzave: 'Hrvatska'
      },
      {
        id: 'd4eb36e8-b46a-4731-b124-21e9bde7539f',
        sifraDrzave: '3124',
        nazivDrzave: 'Engleska'
      },
	    {
        id: '7e876478-b994-4c5c-984c-325fbe6f156f',
        sifraDrzave: '5213',
        nazivDrzave: 'Njemačka'
      }
    ]
    return { korisnici, drzave } 
  }
}
