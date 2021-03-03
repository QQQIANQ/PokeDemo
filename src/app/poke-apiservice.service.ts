import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeServiceRes} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient) {

  }

  getPokemons(): Observable<PokeServiceRes>{
  return this.http.get<PokeServiceRes>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
  }
}
