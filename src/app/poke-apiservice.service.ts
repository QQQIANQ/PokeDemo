import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeDetail, PokeServiceRes} from './pokemon';
const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})


export class PokeAPIServiceService {

  constructor(private http: HttpClient) {

  }

  getPokemons(): Observable<PokeServiceRes>{
  return this.http.get<PokeServiceRes>(url);
  }

  getPokemonsInfo(id: string): Observable<PokeDetail>{
    return this.http.get<PokeDetail>(url+ id+'/');
  }
}
