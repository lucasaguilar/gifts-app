import { Component, OnInit } from '@angular/core';
import { from, Observable, of, pipe, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Country } from '../models/country.model';
import { ApiService } from '../services/api.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  suscription: Subscription;
  paises: Observable<Country[]>;
  // paises: any;
  countries: Country[];
  textoAbuscar = '';

  constructor(public apiService: ApiService) {
    const myObs = from('Hello world');

    // aplicando algunos filtros
    const filteredObs = myObs.pipe(
      filter((char) => char !== ' '),
      map((char) => char.toUpperCase())
    );

    this.suscription = filteredObs.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
    console.log('iniciando component ngOnInit');
    // this.apiService.getData(environment.urlCountries);
    this.paises = this.apiService.getAllContries(environment.urlCountries);
    console.log(this.paises);

    /*    this.apiService.getAllContries().subscribe((data) => {
      this.paises = data.data;
    }); */
  }

  click(event) {
    console.log(event);
  }

  onSearchChange(event) {
    this.textoAbuscar = event.detail.value;
  }
}
