import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../clases/pokemon';
import {PokemonesService} from '../servicios/pokemones.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {
  pokemones:Pokemon[]=[];
  constructor(public pokeService:PokemonesService
    ,public router:Router, public alertCtrl:AlertController) { }
  //cuando se crea por primera vez
  async ngOnInit(){

  }
  //cada vez que se entra a la ventana
  async ionViewWillEnter() {
    //traeme los pokemones
    let res = await this.pokeService.obtener();
    this.pokemones = [];
    res.forEach(p=>{
      let poke = p.data();
      this.pokemones.push(poke as Pokemon);
    });
    if(this.pokemones.length == 0){ //no se ha ingresado ninguno?
       //1.Mostrar un alert que diga que no hay pokemones
       const alert = await this.alertCtrl.create({
         header: "No hay pokemones!",
         message: "Para ver pokemones debe ingresar uno antes",
         buttons: ['Ir a agregar un pokemon']
       });
       await alert.present();
       //2. Enviar de vuelta a la página de agregar
       this.router.navigate(["/tabs/agregar"]);
    }
  }

}
