import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeAPIServiceService} from '../poke-apiservice.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {


  id: string;
  pokes: Pokemon[] = [];
  selectedPokeId: string;
  searchPokeName: string = '';
  constructor(private pokeService:PokeAPIServiceService) {
    this.id = '';
    this.selectedPokeId='';
    this.searchPokeName='';
    // strictPropertyInitialization
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon(''+  index,e.name,e.url));
      });
    } );
  }

  go(){
    console.log(this.selectedPokeId);
  }

}
