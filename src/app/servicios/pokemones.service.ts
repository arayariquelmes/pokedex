import { Injectable } from '@angular/core';
import {Pokemon} from '../clases/pokemon';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  constructor(public afs:AngularFirestore) { }
  agregar(pokemon:Pokemon){
    let colPoke = this.afs.collection("pokemones");
    return colPoke.doc(this.afs.createId()).set(pokemon);
  }
  async obtener(){
    //1.Obtener la colección
    let colPokemones = this.afs.collection("pokemones");
    //2. Obtener los pokemones de la colección
    let res = await colPokemones.get();
    //3. Devolver una promesa
    return res.toPromise();
  }
}
