export interface PokeServiceRes {
  count:    number;
  next:     string;
  previous: string;
  results:  IPokemon[];
}

export interface IPokemon {
  name: string;
  url:  string;
}


export class Pokemon {
  constructor(public id: string , public name: string, public url: string) {}
}
