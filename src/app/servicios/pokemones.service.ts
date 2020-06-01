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
    let colPoke = this.afs.collection("pokemones");
    return colPoke.doc(this.afs.createId()).set(pokemon);
  }
  obtener(){
    //TODO: Como obtener desde firebase??
    return this.pokemones;
  }
}
