import { Component, OnInit } from '@angular/core';
import { HttpClientKorisnikService } from 'src/app/services/http-client-korisnik.service';
import { HttpClientDrzavaService } from 'src/app/services/http-client-drzava.service';
import { Korisnik } from 'src/app/classes/korisnik';
import { Drzava } from 'src/app/classes/drzava'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  korisnici: Korisnik[] = []
  drzave: Drzava[] = []
  constructor(private korisnikService: HttpClientKorisnikService, private drzavaService: HttpClientDrzavaService) {   }
 
  public ngOnInit() {
    this.getKorisnici();
    this.getDrzave();
  }
   
  getKorisnici() {
    this.korisnikService.getKorisnici().subscribe(data => { 
      this.korisnici = data;
    });    
  }

  getDrzave() {
    this.drzavaService.getDrzave().subscribe(data => { 
      this.drzave = data;
    });    
  }
}

