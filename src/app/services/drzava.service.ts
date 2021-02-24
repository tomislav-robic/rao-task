import { Drzava } from '../classes/drzava'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export abstract class DrzaveService {
  drzaveUrl = 'api/drzave'
  abstract getDrzave(): Observable<Drzava[]>;
}