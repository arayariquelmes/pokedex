import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../clases/pokemon';
import {PokemonesService} from '../servicios/pokemones.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {
  pokemones:Pokemon[]=[];
  constructor(public pokeService:PokemonesService
    ,public router:Router
    , public alertCtrl:AlertController
    , public loadingCtrl: LoadingController) { }
  //cuando se crea por primera vez
  async ngOnInit(){

  }

  async actualizar(event){
    await this.cargarLista();
    event.target.complete();
  }

  async cargarLista(){
    //traeme los pokemones
    const loading = await this.loadingCtrl.create({
      message: 'Conectando al Servidor...'
    });
    //Muestro el indicador antes de hacer lo que se va a demorar
    await loading.present();
    this.pokemones = [];
    let res = await this.pokeService.obtener();//Esperar a que la promesa se cumpla
    //ocultar indicador cuando terminó lo que se demora
    await loading.dismiss();
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

  //cada vez que se entra a la ventana
  async ionViewWillEnter() {
    await this.cargarLista();
  }

}
