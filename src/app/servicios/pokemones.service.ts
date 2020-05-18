import { Injectable } from '@angular/core';
import {Pokemon} from '../clases/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  pokemones:Pokemon[]=[];
  constructor() { }
  agregar(pokemon:Pokemon){
    this.pokemones.push(pokemon);
  }
  obtener(){
    return this.pokemones;
  }
}
