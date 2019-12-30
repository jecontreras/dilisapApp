import { Component, OnInit } from '@angular/core';
import { RespuestaMDB, Genre } from '../interfas/interfaces';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  listCategoria:Genre[] = [];
  listArticulo:RespuestaMDB[] = [];
  buscando:boolean = false;
  config:any = {};

  constructor(
    private _Articulo: ArticuloService
  ) {}
  ngOnInit(){ 
    this.getlistArticulo();
    this.config = {
      categoria: this.listCategoria,
      texto: "Buscar Articulo"
    };
  }
  getlistArticulo(){
    this._Articulo.getArticulo({})
    .subscribe(rta=>{
      console.log(rta)
      this.listArticulo = rta.results;
    });
  }

}
