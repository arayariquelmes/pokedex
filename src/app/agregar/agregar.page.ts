import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../clases/pokemon';
import {PokemonesService} from '../servicios/pokemones.service';
import {Router} from '@angular/router'; //para cambiar entre paginas
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  nombre:string;
  descripcion:string;
  numero:number;
  tipo:string;
  constructor(public pokeService:PokemonesService, public router:Router) { }

  ngOnInit() {
  }
  registrar(){
      let pokemon:Pokemon = {
        id:'0',
        nombre: this.nombre,
        descripcion: this.descripcion,
        numero: this.numero,
        tipo: this.tipo
      };
      this.pokeService.agregar(pokemon);
      this.router.navigate(["/tabs/ver"]);
  }

}
