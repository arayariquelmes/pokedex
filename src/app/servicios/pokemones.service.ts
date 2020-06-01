import { Injectable } from '@angular/core';
import {Pokemon} from '../clases/pokemon';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  pokemones:Pokemon[]=[];
  constructor(public afs:AngularFirestore) { }
  agregar(pokemon:Pokemon){
    let pokemones = this.afs.collection("pokemones");
    let id = this.afs.createId();
    pokemon.id = id;
    return pokemones.doc(id).set(pokemon);
  }
  async obtener(){
    let pokemones = this.afs.collection("pokemones");
    let res = await pokemones.get();
    return res.toPromise();
  }
}
