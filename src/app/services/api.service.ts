import { Injectable } from '@angular/core';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Options } from 'selenium-webdriver';
import { Gift } from '../models/gift.model';
import { Country } from './../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private countries = new BehaviorSubject<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly countriesReadOnly = this.countries.asObservable();
  dataStoreCountries: { countries: any[] } = { countries: [] };
  dataStoreGifts: { gifts: Gift[] } = { gifts: [] };

  constructor() {}

  getData(url: string) {
    const flagBeneficiosRemotos = sessionStorage.getItem('flagStorageRemotos');

    if (
      flagBeneficiosRemotos === 'true' &&
      localStorage.getItem('storageRemotos')
    ) {
      this.dataStoreCountries.countries = JSON.parse(
        localStorage.getItem('storageRemotos')
      );
      this.countries.next(this.dataStoreCountries.countries);
    } else {
      this.getAllContries(url);
    }
  }

  saveInStorage(countries: any) {
    localStorage.setItem('storageRemotos', JSON.stringify(countries));
  }

  getAllContriesWithSuscribe(url: string) {
    const options: HttpOptions = {
      url,
      params: { fullText: 'false' },
    };

    return from(Http.get(options)).subscribe(
      (data) => {
        console.log(data.data);
        this.dataStoreCountries.countries = data.data;
        this.saveInStorage(this.dataStoreCountries.countries);
        sessionStorage.setItem('flagStorageRemotos', 'true');
        this.countries.next(this.dataStoreCountries.countries);
      },
      (error) => console.log('error loading country')
    );
  }

  getAllGifts(url: string, apiKey: string): Observable<Gift[]> {
    const options: HttpOptions = {
      url,
      params: { api_key: apiKey },
    };

    return from(Http.get(options)).pipe(
      map((data) => {
        //console.log(data.data);
        this.dataStoreGifts.gifts = data.data.data;
        return this.dataStoreGifts.gifts;
      })
    );
  }

  getAllContries(url: string): Observable<Country[]> {
    const flagBeneficiosRemotos = sessionStorage.getItem('flagStorageRemotos');

    if (
      flagBeneficiosRemotos === 'true' &&
      localStorage.getItem('storageRemotos')
    ) {
      this.dataStoreCountries.countries = JSON.parse(
        localStorage.getItem('storageRemotos')
      );

      return of(this.dataStoreCountries.countries);
    } else {
      const options: HttpOptions = {
        url,
        params: { fullText: 'false' },
      };

      return from(Http.get(options)).pipe(
        map((data) => {
          console.log(data.data);
          this.dataStoreCountries.countries = data.data;
          this.saveInStorage(this.dataStoreCountries.countries);
          sessionStorage.setItem('flagStorageRemotos', 'true');
          return this.dataStoreCountries.countries;
        })
      );
    }
  }

  getCountries() {
    // return this.countriesReadOnly;
    return this.countries.asObservable();
  }

  doPost(url: string, data: any) {
    const options: HttpOptions = {
      url,
      data,
      method: 'POST',
    };

    return (
      from(Http.request(options)).subscribe((result) => {
        console.log(result);
      }),
      (error) => console.log('error loading country')
    );
  }
}
